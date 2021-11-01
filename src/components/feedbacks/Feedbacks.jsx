import React from 'react';
import { Box } from '@mui/material';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

export default class Feedbacks extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      columnDefs: [
        {headerNames: 'Full Name', field: 'fullName'},
        {headerNames: 'Rating', field: 'rating'},
        {headerNames: 'Text', field: 'text'},
      ],
      rowData: [
        {fullName: 'John Smith', rating: '2', text: 'Ordinary magician without magic stick'},
        {fullName: 'Harry Potter', rating: '4', text: 'Great magician, with perfect magic stick'},
      ]
    };
  }

  render(){
    const { columnDefs } = this.state;
    const { rowData } = this.state;
    return(
      <Box width="100%" height="90%" className="ag-theme-alpine">
        <AgGridReact 
        columnDefs={columnDefs}
        rowData={rowData}
        />
      </Box>
    );
  }
}
