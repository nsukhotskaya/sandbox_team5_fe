import React from 'react';
import { Box } from '@mui/material';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import listOfCandidates from '../../mocks/listOfCandidates.json';
import { tableFields } from '../../constants';
import { getFieldLabel } from '../../utils';

const Candidates = () => {
  const onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
    window.setTimeout(() => {
      const colIds = params.columnApi.getAllColumns().map((c) => c.colId);
      params.columnApi.autoSizeColumns(colIds);
    }, 50);
  };

  // const onPageSizeChanged = (event) => {
  //   const { value } = event.target;
  //   paginationSetPageSize(Number(value));
  // };

  return (
    <Box>
      {/* <Box font-size="13" marginBottom="5">
        Page Size:
        <select onChange={() => onPageSizeChanged()} id="page-size">
          <option value="10">10</option>
          <option value="50">50</option>
          <option value="100">100</option>
          <option value="500">500</option>
        </select>
      </Box> */}
      <Box className="ag-theme-alpine">
        <AgGridReact
          onFirstDataRendered={onFirstDataRendered}
          rowData={listOfCandidates}
          rowSelection="multiple"
          // rowDragManaged
          // suppressRowDrag={suppressRowDrag}
          // immutableData={immutableData}
          rowDragMultiRow
          animateRows
          sideBar
          domLayout="print"
          pagination
          paginationPageSize="10"
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
