import React, { useState } from 'react';
import { Box, FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import listOfCandidates from '../../mocks/listOfCandidates.json';
import { tableFields } from '../../constants';
import { getFieldLabel } from '../../utils';

const Candidates = () => {
  const [gridApi, setGridApi] = useState(null);
  const onFirstDataRendered = (params) => {
    const colIds = params.columnApi.getAllColumns().map((c) => c.colId);
    params.columnApi.autoSizeColumns(colIds);
  };

  const onGridReady = (params) => {
    setGridApi(params.api);

    listOfCandidates.forEach((data, index) => {
      const list = data;
      list.id = index;
    });
    params.api.setRowData(listOfCandidates);
  };

  const onSortChanged = () => {
    const sortModel = gridApi.getSortModel();
    const sortActive = sortModel && sortModel.length > 0;
    gridApi.setSuppressRowDrag(sortActive);
  };

  const onFilterChanged = () => {
    const filterActive = gridApi.isAnyFilterPresent();
    gridApi.setSuppressRowDrag(filterActive);
  };

  const onRowDragMove = (event) => {
    function moveInArray(arr, fromIndex, toIndex) {
      const element = arr[fromIndex];
      arr.splice(fromIndex, 1);
      arr.splice(toIndex, 0, element);
    }
    const movingNode = event.node;
    const { overNode } = event;
    const rowNeedsToMove = movingNode !== overNode;
    if (rowNeedsToMove) {
      const movingData = movingNode.data;
      const overData = overNode.data;
      const fromIndex = listOfCandidates.indexOf(movingData);
      const toIndex = listOfCandidates.indexOf(overData);
      const newStore = listOfCandidates.slice();
      moveInArray(newStore, fromIndex, toIndex);
      gridApi.setRowData(newStore);
      gridApi.clearFocusedCell();
    }
  };

  const getRowNodeId = (data) => data.id;

  const onPageSizeChanged = (newPageSize) => {
    const { value } = newPageSize.target;
    gridApi.paginationSetPageSize(Number(value));
  };

  const paginationNumberFormatter = (params) =>
    `[${params.value.toLocaleString()}]`;

  return (
    <Box>
      <Box width="80px" marginBottom="5px" marginTop="30px">
        <FormControl fullWidth variant="filled">
          <InputLabel>Page Size</InputLabel>
          <Select defaultValue="10" label="10" onChange={onPageSizeChanged}>
            <MenuItem value={10}>10</MenuItem>
            <MenuItem value={20}>20</MenuItem>
            <MenuItem value={30}>30</MenuItem>
          </Select>
        </FormControl>
      </Box>

      <Box className="ag-theme-alpine" width="1500px">
        <AgGridReact
          width="1500px"
          onFirstDataRendered={onFirstDataRendered}
          immutableData
          animateRows
          getRowNodeId={getRowNodeId}
          onGridReady={onGridReady}
          onSortChanged={onSortChanged}
          onFilterChanged={onFilterChanged}
          onRowDragMove={onRowDragMove}
          rowSelection="multiple"
          rowDragMultiRow
          domLayout="print"
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
          }}
        >
          <AgGridColumn
            field="fullName"
            sortable
            filter
            checkboxSelection
            resizable
            rowDrag
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
