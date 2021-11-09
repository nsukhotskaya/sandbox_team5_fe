import React from 'react';
import { Box } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class ProfileTable extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const { columnDefs } = this.props;
    const { rowData } = this.props;
    return (
      <Box width="100%" height="90%" className="ag-theme-alpine">
        <AgGridReact
          defaultColDef={{ flex: 1, minWidth: 100 }}
          columnDefs={columnDefs}
          rowData={rowData}
        />
      </Box>
    );
  }
}
