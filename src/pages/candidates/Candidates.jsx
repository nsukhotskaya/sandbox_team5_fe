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
import { tableFieldsFirstPart, reformatCandidates } from '../../constants';
import { getFieldLabel } from '../../utils';
import {
  fetchCandidateList,
  updateCandidateStatusById,
  fetchLocations,
  fetchLanguages,
  fetchEnglishLevel,
  fetchCandidateStatusTypes,
  fetchGoogleSheet,
} from '../../store/commands';
import {
  LinkFormatter,
  PageSize,
  CandidatesSearch,
  FilterCandidates,
  StarFormatter,
  Toaster,
  ChipFormatter,
} from '../../components';
import useToaster from '../../components/toaster/useToaster';
import './candidates.sass';
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

  const { isToasterOpen, handleCloseToaster, alertMessages, addToast } =
    useToaster();

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const dispatch = useDispatch();

  const listOfCandidates = useSelector((state) => state.candidates.candidates);
  const authorizedUser = useSelector((state) => state.userInfo.userInfo);
  const authorizedUserRoleType = authorizedUser.roleType;

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
    } else if (
      (selectedNodes !== 0 && selectedData.includes('HR_Review')) ||
      selectedData.includes('Interview_Review') ||
      selectedData.includes('Pending') ||
      selectedData.includes('Accepted') ||
      selectedData.includes('Questionable') ||
      selectedData.includes('Declined') ||
      selectedData.includes('Graduated') ||
      selectedData.includes('Refused')
    ) {
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
    if (candidateId.length === 1) {
      addToast(getFieldLabel('candidate.addToWork.success.message'));
    } else {
      addToast(getFieldLabel('candidates.addToWork.success.message'));
    }
  };

  const googleSheet = () => {
    dispatch(fetchGoogleSheet(id));
  };

  return (
    <Box padding="1%" width="100%" height="100%">
      {alertMessages &&
        alertMessages.map((message) => (
          <Toaster
            key={message}
            isToasterOpen={isToasterOpen}
            handleCloseToaster={handleCloseToaster}
            message={message}
            severity="success"
          />
        ))}
      <Box
        display="flex"
        flexDirection={{
          xs: 'column',
          lg: 'row',
        }}
        alignItems={{
          xs: 'flex-end',
          lg: 'center',
        }}
        paddingTop="5px"
        paddingBottom="5px"
        justifyContent="space-between"
      >
        <Box display="flex" alignItems="center">
          <Typography variant="h4" component="div" color="#757575">
            {internshipName[0]}
          </Typography>
          <IconButton onClick={googleSheet}>
            <CachedIcon fontSize="large" />
          </IconButton>
        </Box>
        <Box
          display="flex"
          flexDirection={{
            xs: 'column',
            md: 'row',
          }}
          alignItems={{
            xs: 'flex-end',
            md: 'center',
          }}
        >
          <Box display="flex" flexDirection="row">
            <Box>
              <IconButton onClick={handleClick}>
                <ManageSearch fontSize="large" />
              </IconButton>
            </Box>
            <Box mr={{ xs: '0px', md: '15px' }} mb={{ xs: '5px', md: '0px' }}>
              <FilterCandidates onFilter={onFilter} />
            </Box>
          </Box>
          <Box
            display="flex"
            flexDirection={{
              xs: 'column',
              sm: 'row',
            }}
            alignItems={{
              xs: 'flex-end',
              sm: 'center',
            }}
          >
            <Stack
              direction="row"
              mr={{ xs: '0px', sm: '15px' }}
              mb={{ xs: '10px', sm: '0px' }}
            >
              <Button onClick={() => onButtonExport()} variant="outlined">
                {getFieldLabel('candidates.button.exportToExcel')}
              </Button>
            </Stack>
            {authorizedUserRoleType === 'Hr' && (
              <Stack
                direction="row"
                mr={{
                  xs: '0px',
                  sm: '15px',
                }}
              >
                <Button
                  onClick={() => addToWork()}
                  className="candidatesPageButton"
                  variant="outlined"
                  disabled={isAddToWorkButtonDisabled}
                >
                  {getFieldLabel('candidates.button.addToWork')}
                </Button>
              </Stack>
            )}
            <Divider orientation="vertical" variant="middle" flexItem />
            <Stack ml={{ sm: '15px' }}>
              <PageSize gridApi={gridApi} />
            </Stack>
          </Box>
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
              chipFormatter: ChipFormatter,
            }}
            onRowSelected={onRowSelected}
            suppressRowClickSelection
            rowData={newListOfCandidates}
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
              suppressMovable
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
              suppressMovable
                field={field}
                headerName={getFieldLabel(`candidates.table.${field}`)}
                key={field}
                sortable
                resizable
                flex={1}
              />
            ))}
            <AgGridColumn
            suppressMovable
              field="hrReview"
              sortable
              resizable
              flex={1}
              cellRenderer="starFormatter"
            />
            <AgGridColumn field="interviewer" sortable resizable flex={1} suppressMovable />
            <AgGridColumn
            suppressMovable
              field="interviewerReview"
              sortable
              resizable
              flex={1}
              cellRenderer="starFormatter"
            />
            <AgGridColumn field="mentor" sortable resizable flex={1} suppressMovable />
            <AgGridColumn
              field="mentorReview"
              sortable
              resizable
              flex={1}
              cellRenderer="starFormatter"
              suppressMovable
            />
            <AgGridColumn
              field="statusType"
              headerName={getFieldLabel('candidates.table.statusType')}
              sortable
              resizable
              suppressSizeToFit
              minWidth={100}
              maxWidth={150}
              cellRenderer="chipFormatter"
              suppressMovable
            />
          </AgGridReact>
        )}
      </Box>
    </Box>
  );
};

export default Candidates;
