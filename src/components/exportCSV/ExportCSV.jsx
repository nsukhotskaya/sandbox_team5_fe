import React from 'react'
import * as FileSaver from 'file-saver';
import * as XLSX from 'xlsx';
import {
    Button,
  } from '@mui/material';
import { getFieldLabel } from '../../utils';

const ExportCSV = ({csvData, fileName}) => {
    const fileType = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8';
    const fileExtension = '.xlsx';
    const exportToCSV = (csv, file) => {
        const ws = XLSX.utils.json_to_sheet(csv);
        const wb = { Sheets: { 'data': ws }, SheetNames: ['data'] };
        const excelBuffer = XLSX.write(wb, { bookType: 'xlsx', type: 'array' });
        const data = new Blob([excelBuffer], {type: fileType});
        FileSaver.saveAs(data, file + fileExtension);
    }
    return (
        <Button onClick={() => exportToCSV(csvData,fileName)} variant="outlined">
        {getFieldLabel('candidates.button.exportToExcel')}
      </Button>
    )
}

export default ExportCSV