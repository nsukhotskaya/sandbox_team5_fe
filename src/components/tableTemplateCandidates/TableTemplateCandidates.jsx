import React from 'react';
import { Box } from '@mui/material';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { LinkFormatter } from '../linkFormatter';
import { getFieldLabel } from '../../utils';

export default class TableTemplateCandidates extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { rowData } = this.props;
    return (
      <Box width="100%" height="100%" className="ag-theme-alpine">
        <AgGridReact
          rowSelection="multiple"
          frameworkComponents={{
            linkFormatter: LinkFormatter,
          }}
          pagination
          paginationPageSize="15"
          defaultColDef={{ flex: 1, minWidth: 100 }}
          rowData={rowData}
        >
          <AgGridColumn
            field="userName"
            sortable
            key="userName"
            headerName={getFieldLabel('candidate.table.name')}
            resizable
            suppressMovable
            cellRenderer="linkFormatter"
          />
          <AgGridColumn
            field="status"
            headerName={getFieldLabel('candidate.table.status')}
            resizable
            suppressMovable
          />
        </AgGridReact>
      </Box>
    );
  }
}
