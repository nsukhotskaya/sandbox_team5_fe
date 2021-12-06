import React from 'react';
import { Box } from '@mui/material';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import { LinkFormatterUser } from '../linkFormatterUser';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class TableTemplate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const {
      rowData,
    } = this.props;
    return (
      <Box width="100%" height="100%" className="ag-theme-alpine">
        <AgGridReact
          rowSelection="multiple"
          frameworkComponents={{
            linkFormatter: LinkFormatterUser,
          }}
          pagination
          paginationPageSize="15"
          defaultColDef={{ flex: 1, minWidth: 100 }}
          rowData={rowData}
        >
          {console.log(rowData)}
          <AgGridColumn
            field="userName"
            sortable
            key="userName"
            resizable
            minWidth={200}
            cellRenderer="linkFormatter"
          />
          <AgGridColumn field="position" resizable minWidth={200} />
          <AgGridColumn field="role" resizable minWidth={200} />
        </AgGridReact>
      </Box>
    );
  }
}
