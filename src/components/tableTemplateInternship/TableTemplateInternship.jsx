import React from 'react';
import { Box } from '@mui/material';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import { LinkFormatterInternships } from '../linkFormatterInternships';
import { getFieldLabel } from '../../utils';

export default class TableTemplateInternship extends React.Component {
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
            linkFormatter: LinkFormatterInternships,
          }}
          pagination
          paginationPageSize="15"
          defaultColDef={{ flex: 1, minWidth: 100 }}
          rowData={rowData}
        >
          <AgGridColumn
            field="name"
            sortable
            headerName={getFieldLabel('internship.table.name')}
            key="name"
            resizable
            minWidth={200}
            cellRenderer="linkFormatter"
          />
          <AgGridColumn field="internshipStatusType" headerName={getFieldLabel('internship.table.status')} resizable minWidth={200} />
        </AgGridReact>
      </Box>
    );
  }
}
