import React from 'react';
import { Box } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class TableTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      checkboxSelection,
      paginationPageSize,
      columnDefs,
      rowData,
      pagination,
    } = this.props;
    return (
      <Box width="100%" height="90%" className="ag-theme-alpine">
        <AgGridReact
          rowSelection="multiple"
          checkboxSelection={checkboxSelection}
          pagination={pagination}
          paginationPageSize={paginationPageSize}
          defaultColDef={{ flex: 1, minWidth: 100 }}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </Box>
    );
  }
}
