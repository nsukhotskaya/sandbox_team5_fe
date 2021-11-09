import React, { useState, useLayoutEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {
  Box,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  Select,
  IconButton,
  Popper,
  Input,
} from '@mui/material';
import { Print, MailOutline, ManageSearch } from '@mui/icons-material';
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
    <Box padding="1%">
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
        <Box display="flex">

          <Box marginRight="15px">
            <IconButton onClick={handleClick}>
              <ManageSearch fontSize="large" />
            </IconButton>
            <IconButton>
              <MailOutline fontSize="large" />
            </IconButton>
            <IconButton>
              <Print fontSize="large" />
            </IconButton>
          </Box>
          <Popper open={open} anchorEl={anchorEl} placement="left">
            <Input
              placeholder={getFieldLabel('candidates.popper.inputPlaceholder')}
            />
          </Popper>
          <Box width="80px">
            <FormControl fullWidth>
              <InputLabel>
                {getFieldLabel('candidates.form.inputLabel')}
              </InputLabel>
              <Select defaultValue="10" label="10" onChange={onPageSizeChanged}>
                {createMenuItem}
              </Select>
            </FormControl>
          </Box>
        </Box>
      </Box>
      <Box className="ag-theme-alpine">
        <AgGridReact
          rowData={newListOfCandidates}
          onColumnVisible={onColumnVisible}
          debug
          animateRows
          onGridReady={onGridReady}
          rowSelection="multiple"
          domLayout="autoHeight"
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
