import React from 'react';
import { Box } from '@mui/material';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import listOfCandidates from '../../mocks/listOfCandidates.json';
import { tableFields } from '../../constants';

const Candidates = () => {
  const onFirstDataRendered = (params) => {
    params.api.sizeColumnsToFit();
    window.setTimeout(() => {
      const colIds = params.columnApi.getAllColumns().map((c) => c.colId);
      params.columnApi.autoSizeColumns(colIds);
    }, 50);
  };

  return (
    <Box className="ag-theme-alpine">
      <AgGridReact
        onFirstDataRendered={onFirstDataRendered}
        rowData={listOfCandidates}
        rowSelection="multiple"
        rowDragManaged
        rowDragMultiRow
        sideBar
        domLayout="print"
        pagination
        paginationPageSize="20"
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
        {tableFields.map(({ field, label }) => (
          <AgGridColumn
            field={field}
            headerName={label}
            key={field}
            sortable
            filter
            resizable
          />
        ))}
      </AgGridReact>
    </Box>
  );
};

export default Candidates;
