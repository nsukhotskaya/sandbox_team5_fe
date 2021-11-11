import React, { useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
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

const Candidates = () => {
  const [gridApi, setGridApi] = useState();
  const [anchorEl, setAnchorEl] = useState();
  const [isDisabled, setIsDisabled] = useState(true);
  const [isDisabledCandidatePage, setIsDisabledCandidatePage] = useState(true);
  const open = !!anchorEl;

  const listOfCandidates = useSelector((state) => state.candidates.candidates);

  const dispatch = useDispatch();

  useLayoutEffect(() => {
    dispatch(fetchCandidateList());
    if (gridApi) {
      gridApi.sizeColumnsToFit();
    }
  }, [gridApi]);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onColumnVisible = () => {
    gridApi.sizeColumnsToFit();
  };

  const onGridReady = (params) => {
    setGridApi(params.api);
  };

  const onSelectionChanged = (event) => {
    const rowCount = event.api.getSelectedNodes().length;
    if (rowCount >= 2) {
      setIsDisabledCandidatePage(true);
      setIsDisabled(false);
    } else if (rowCount === 0) {
      setIsDisabled(true);
      setIsDisabledCandidatePage(true);
    } else {
      setIsDisabled(false);
      setIsDisabledCandidatePage(false);
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

  const reformatCandidates = function vb(candidates) {
    return candidates.map((candidate) => {
      const newObj = { ...candidate };
      newObj.fullName = `${candidate.firstName} ${candidate.lastName}`;
      newObj.registrationDate = dayjs(`${candidate.registrationDate}`).format(
        'DD.MM.YYYY',
      );
      return newObj;
    });
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
          {getFieldLabel('internships.program.title.javascript')}
        </Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="outlined" disabled={isDisabledCandidatePage}>Candidate page</Button>
          <Button variant="outlined" endIcon={<Send />} disabled={isDisabled}>
            Send
          </Button>
          <Button variant="outlined" disabled={isDisabled}>Add to work</Button>
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
            <Input
              placeholder={getFieldLabel('common.search')}
            />
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
