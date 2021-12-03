import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  Typography,
  IconButton,
  Popper,
  Stack,
  Button,
  Divider,
} from '@mui/material';
import { ManageSearch } from '@mui/icons-material';
import CachedIcon from '@mui/icons-material/Cached';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import {
  tableFieldsFirstPart,
  tableFieldsSecondTwo,
  reformatCandidates,
} from '../../constants';
import { getFieldLabel } from '../../utils';
import {
  fetchCandidateList,
  updateCandidateStatusById,
  fetchLocations,
  fetchLanguages,
  fetchEnglishLevel,
  fetchCandidateStatusTypes,
  fetchGoogleSheet,
  fetchUserInfo,
} from '../../store/commands';
import {
  LinkFormatter,
  PageSize,
  CandidatesSearch,
  FilterCandidates,
  StarFormatter,
} from '../../components';
import './candidates.sass';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';

const Candidates = () => {
  const [gridApi, setGridApi] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const [isAddToWorkButtonDisabled, setIsAddToWorkButtonDisabled] =
    useState(true);
  const open = !!anchorEl;
  const { id } = useParams();

  const isLoading = useSelector(loadingSelector(['GET_CANDIDATE_LIST']));
  useEffect(() => {}, [isLoading]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const dispatch = useDispatch();

  const listOfCandidates = useSelector((state) => state.candidates.candidates);
  const candidateSearchResult = useSelector(
    (state) => state.searchResult.searchResult,
  );
  const newListOfCandidates = reformatCandidates(listOfCandidates);
  const newCandidateSearchResult = reformatCandidates(candidateSearchResult);
  const internshipName =
    listOfCandidates && listOfCandidates.map((item) => item.internshipName);

  const requestBody = {
    pageSize: 100000,
    pageNumber: 1,
    internshipId: id,
  };

  useEffect(() => {
    dispatch(fetchCandidateList(requestBody));
    dispatch(fetchLocations());
    dispatch(fetchLanguages());
    dispatch(fetchEnglishLevel());
    dispatch(fetchCandidateStatusTypes());
    dispatch(fetchUserInfo());
  }, []);

  const onFilter = (filters) =>
    dispatch(fetchCandidateList(requestBody, filters));

  useEffect(() => {
    if (gridApi) gridApi.setRowData(newCandidateSearchResult);
  }, [candidateSearchResult]);

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onButtonExport = () => {
    gridApi.exportDataAsExcel();
  };

  const getRowNodeId = (data) => data.id;

  const onRowSelected = () => {
    const selectedNodes = gridApi.getSelectedNodes();
    const selectedData = selectedNodes.map((node) => node.data.statusType);
    if (selectedNodes.length === 0) {
      setIsAddToWorkButtonDisabled(true);
    } else if (selectedNodes !== 0 && selectedData.includes('HR_Review')) {
      setIsAddToWorkButtonDisabled(true);
    } else {
      setIsAddToWorkButtonDisabled(false);
    }
  };

  const addToWork = () => {
    const selectedRow = gridApi.getSelectedRows();
    const candidateId = selectedRow && selectedRow.map((item) => item.id);
    dispatch(updateCandidateStatusById(candidateId));
    const rowNodes = (rowNode) => {
      rowNode.setSelected(false);
    };
    gridApi.forEachNode(rowNodes);
  };

  const googleSheet = () => {
    dispatch(fetchGoogleSheet(id));
  };

  return (
    <Box padding="1%" width="100%" height="100%">
      <Box className="candidatesPageHeader">
        <Box display="flex" alignItems="center">
          <Typography variant="h4" component="div" color="#757575">
            {internshipName[0]}
          </Typography>
          <IconButton onClick={googleSheet}>
            <CachedIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box className="candidatesButtons">
          <Box>
            <IconButton onClick={handleClick}>
              <ManageSearch fontSize="large" />
            </IconButton>
          </Box>
          <Box className="filterBox">
            <FilterCandidates onFilter={onFilter} />
          </Box>
          <Stack direction="row" spacing={2}>
            <Button
              className="candidatesPageButton"
              onClick={() => onButtonExport()}
              variant="outlined"
            >
              {getFieldLabel('candidates.button.exportToExcel')}
            </Button>
            <Button
              onClick={() => addToWork()}
              className="candidatesPageButton"
              variant="outlined"
              disabled={isAddToWorkButtonDisabled}
            >
              {getFieldLabel('candidates.button.addToWork')}
            </Button>
            <Divider orientation="vertical" variant="middle" flexItem />
            <PageSize gridApi={gridApi} />
          </Stack>
          <Popper open={open} anchorEl={anchorEl} placement="left">
            <CandidatesSearch id={id} />
          </Popper>
        </Box>
      </Box>
      <Box className="ag-theme-alpine">
        {isLoading ? (
          <LoadingIndicator />
        ) : (
          <AgGridReact
            getRowNodeId={getRowNodeId}
            frameworkComponents={{
              linkFormatter: LinkFormatter,
              starFormatter: StarFormatter,
            }}
            onRowSelected={onRowSelected}
            suppressRowClickSelection
            rowData={newListOfCandidates}
            debug
            animateRows
            onGridReady={onGridReady}
            rowSelection="multiple"
            pagination
            paginationPageSize="20"
            sideBar={{
              toolPanels: [
                {
                  id: 'columns',
                  labelDefault: 'Columns',
                  labelKey: 'columns',
                  iconKey: 'columns',
                  toolPanel: 'agColumnsToolPanel',
                },
              ],
              position: 'left',
            }}
          >
            <AgGridColumn
              field="fullName"
              sortable
              checkboxSelection
              resizable
              headerCheckboxSelection
              suppressSizeToFit
              minWidth={200}
              cellRenderer="linkFormatter"
            />
            {tableFieldsFirstPart.map((field) => (
              <AgGridColumn
                field={field}
                headerName={getFieldLabel(`candidates.table.${field}`)}
                key={field}
                sortable
                resizable
                flex={1}
              />
            ))}
            <AgGridColumn
              field="hrReview"
              sortable
              resizable
              flex={1}
              cellRenderer="starFormatter"
            />
            <AgGridColumn field="interviewer" sortable resizable flex={1} />
            <AgGridColumn
              field="interviewerReview"
              sortable
              resizable
              flex={1}
              cellRenderer="starFormatter"
            />
            {tableFieldsSecondTwo.map((field) => (
              <AgGridColumn
                field={field}
                headerName={getFieldLabel(`candidates.table.${field}`)}
                key={field}
                sortable
                resizable
                flex={1}
              />
            ))}
          </AgGridReact>
        )}
      </Box>
    </Box>
  );
};

export default Candidates;
