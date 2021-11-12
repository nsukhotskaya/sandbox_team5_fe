import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import {
  Box,
  MenuItem,
  Typography,
  FormControl,
  Select,
  IconButton,
  Popper,
  Input,
  Stack,
  Button,
  InputLabel,
} from '@mui/material';
import {
  Print, ManageSearch, Send,
} from '@mui/icons-material';
import dayjs from 'dayjs';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import { tableFields, valueMenuItem } from '../../constants';
import { getFieldLabel } from '../../utils';
import { fetchCandidateList } from '../../store/commands';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import './Candidates.sass';

const Candidates = () => {
  const [gridApi, setGridApi] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const open = !!anchorEl;
  const { id } = useParams();

  const listOfCandidates = useSelector((state) => state.candidates.candidates);

  const dispatch = useDispatch();
  const requestBody = {
    pageSize: 10,
    pageNumber: 1,
    internshipId: id,
  };

  useEffect(() => {
    dispatch(fetchCandidateList(requestBody));
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onColumnVisible = () => {
    gridApi.sizeColumnsToFit();
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
    params.api.sizeColumnsToFit();
  };

  const onSelectionChanged = (event) => {
    const rowCount = event.api.getSelectedNodes().length;
    if (rowCount) {
      setIsDisabled(false);
    } else {
      setIsDisabled(true);
    }
  };

  const onPageSizeChanged = (newPageSize) => {
    const { value } = newPageSize.target;
    gridApi.paginationSetPageSize(Number(value));
  };

  const createMenuItem = valueMenuItem.map((item) => (
    <MenuItem value={item} key={item}>
      {item}
    </MenuItem>
  ));

  const reformatCandidates = (candidates) => candidates.map((candidate) => {
    const newObj = { ...candidate };
    newObj.fullName = ((`${candidate.firstName} ${candidate.lastName}`)
    );
    newObj.registrationDate = dayjs(`${candidate.registrationDate}`).format(
      'DD.MM.YYYY',
    );
    return newObj;
  });

  const cellRenderer = (params) => {
    const keyData = params.data.fullName;
    const keyId = params.data.id;
    const newLink = `<a href=/internships/${keyId}>${keyData}</a>`;
    return newLink;
  };

  const newListOfCandidates = reformatCandidates(listOfCandidates);

  return (
    <Box padding="1%" width="100%" height="100%">
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        paddingTop="10px"
        paddingBottom="10px"
      >
        <Typography variant="h4" component="div" gutterBottom color="#222">
          {getFieldLabel('candidates.internship.name')}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" endIcon={<Send />} disabled={isDisabled}>
            {getFieldLabel('candidates.button.send')}
          </Button>
          <Button variant="outlined" disabled={isDisabled}>{getFieldLabel('candidates.button.addToWork')}</Button>
        </Stack>
        <Box display="flex" alignItems="center">
          <Box marginRight="15px">
            <IconButton onClick={handleClick}>
              <ManageSearch fontSize="large" />
            </IconButton>
            <IconButton>
              <Print fontSize="large" />
            </IconButton>
          </Box>
          <Popper open={open} anchorEl={anchorEl} placement="left">
            <Input placeholder={getFieldLabel('common.search')} />
          </Popper>
          <Box width="80px">
            <FormControl fullWidth size="small">
              <InputLabel>
                {getFieldLabel('candidates.form.inputLabel')}
              </InputLabel>
              <Select defaultValue="10" label="{getFieldLabel('candidates.form.inputLabel')}" onChange={onPageSizeChanged}>
                {createMenuItem}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box className="ag-theme-alpine" width="100%" height="calc(100% - 50px)">
        <AgGridReact
          suppressRowClickSelection
          rowData={newListOfCandidates}
          onColumnVisible={onColumnVisible}
          onSelectionChanged={onSelectionChanged}
          debug
          animateRows
          onGridReady={onGridReady}
          rowSelection="multiple"
          pagination
          paginationPageSize="10"
          sideBar={{
            toolPanels: [
              {
                id: 'columns',
                labelDefault: 'Columns',
                labelKey: 'columns',
                iconKey: 'columns',
                toolPanel: 'agColumnsToolPanel',
              },
              {
                id: 'filters',
                labelDefault: 'Filters',
                labelKey: 'filters',
                iconKey: 'filter',
                toolPanel: 'agFiltersToolPanel',
              },
            ],
            position: 'left',
          }}
        >
          <AgGridColumn
            field="fullName"
            sortable
            filter
            checkboxSelection
            resizable
            headerCheckboxSelection
            suppressSizeToFit
            minWidth={250}
            cellRenderer={cellRenderer}
          />
          {tableFields.map((field) => (
            <AgGridColumn
              field={field}
              headerName={getFieldLabel(`candidates.table.${field}`)}
              key={field}
              sortable
              filter
              resizable
            />
          ))}
        </AgGridReact>
      </Box>
    </Box>
  );
};

export default Candidates;
