import React from 'react';
import { Box } from '@mui/material';
import { AgGridColumn, AgGridReact } from 'ag-grid-react';
import 'ag-grid-enterprise';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';

const Candidates = () => {
  const rowData = [
    {
      FullName: 'Viktar Rog',
      ApplicationDate: '15.10.2021',
      Location: 'Minsk',
      InternshipLanguage: 'Ru',
      InternshipStack: 'JS',
      EnglishLevel: 'B1',
      TestTaskEvaluation: 9,
      Interviewer: 7,
      Status: 'Approved',
      HR: 4,
    },
    {
      FullName: 'Anna Bel',
      ApplicationDate: '23.10.2021',
      Location: 'Kiev',
      InternshipLanguage: 'Ru',
      InternshipStack: 'JS',
      EnglishLevel: 'C1',
      TestTaskEvaluation: 8,
      Interviewer: 9,
      Status: 'New',
      HR: 3,
    },
    {
      FullName: 'Kanstantin Fersh',
      ApplicationDate: '24.10.2021',
      Location: 'Varshava',
      InternshipLanguage: 'Ru',
      InternshipStack: 'JS',
      EnglishLevel: 'A2',
      TestTaskEvaluation: 4,
      Interviewer: 7,
      Status: 'Processed',
      HR: 3,
    },
    {
      FullName: 'Mokka Rels',
      ApplicationDate: '17.10.2021',
      Location: 'Dubai',
      InternshipLanguage: 'En',
      InternshipStack: 'JS',
      EnglishLevel: 'B2',
      TestTaskEvaluation: 8,
      Interviewer: 7,
      Status: 'Processed',
      HR: 4,
    },
  ];

  return (
    <Box className="ag-theme-alpine" height="400px" width="auto">
      <AgGridReact rowData={rowData} rowSelection="multiple">
        <AgGridColumn field="FullName" sortable filter checkboxSelection />
        <AgGridColumn field="ApplicationDate" sortable filter />
        <AgGridColumn field="Location" sortable filter />
        <AgGridColumn field="InternshipLanguage" sortable filter />
        <AgGridColumn field="InternshipStack" sortable filter />
        <AgGridColumn field="EnglishLevel" sortable filter />
        <AgGridColumn field="TestTaskEvaluation" sortable filter />
        <AgGridColumn field="Interviewer" sortable filter />
        <AgGridColumn field="Status" sortable filter />
        <AgGridColumn field="HR" sortable filter />
        <AgGridColumn field="Hard skills evaluation*" sortable filter />
      </AgGridReact>
    </Box>
  );
};

export default Candidates;
