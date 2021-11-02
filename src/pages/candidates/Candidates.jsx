import React, { useState, useEffect } from 'react';
import {
  Box,
  MenuItem,
  Typography,
  InputLabel,
  FormControl,
  Select,
  IconButton,
} from '@mui/material';
import { Print, ManageSearch, MailOutline } from '@mui/icons-material';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import listOfCandidates from '../../mocks/listOfCandidates.json';
import { tableFields, valueMenuItem } from '../../constants';
import { getFieldLabel } from '../../utils';

const Candidates = () => {
  const [gridApi, setGridApi] = useState();

  useEffect(() => {
    if (gridApi) {
      gridApi.sizeColumnsToFit();
      // window.onresize = () => {
      //   gridApi.sizeColumnsToFit();
      // };
    }
  }, [gridApi]);

  const onGridReady = (params) => {
    setGridApi(params.api);
    params.api.setRowData(listOfCandidates);
  };

  const onPageSizeChanged = (newPageSize) => {
    const { value } = newPageSize.target;
    gridApi.paginationSetPageSize(Number(value));
  };

  const paginationNumberFormatter = (params) =>
    `[${params.value.toLocaleString()}]`;

  const createMenuItem = valueMenuItem.map((item) => (
    <MenuItem value={item} key={item}>
      {item}
    </MenuItem>
  ));

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
          <Box marginLeft="15px">
            <IconButton>
              <ManageSearch fontSize="large" />
            </IconButton>
            <IconButton>
              <MailOutline fontSize="large" />
            </IconButton>
            <IconButton>
              <Print fontSize="large" />
            </IconButton>
          </Box>
        </Box>
      </Box>
      <Box className="ag-theme-alpine">
        <AgGridReact
          // onFirstDataRendered={onFirstDataRendered}
          debug
          animateRows
          onGridReady={onGridReady}
          rowSelection="multiple"
          domLayout="autoHeight"
          pagination
          paginationPageSize="10"
          paginationNumberFormatter={paginationNumberFormatter}
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
            // defaultColDef={{ flex: 1, minWidth: 200 }}
            resizable
            suppressSizeToFit
            // width={300}
            headerCheckboxSelection
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
