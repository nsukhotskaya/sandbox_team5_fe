import React from 'react';
import { Chip } from '@mui/material';

const ChipFormatter = ({ value }) => {

 const  getChipColor = () => {
  switch (value) {
    case 'New':
   return'secondary';
    case 'HR_Review':
     return 'primary';
    case 'InterviewerReview':
      return 'primary';
    case 'TestTask':
    return 'primary';
    case 'Pending':
      return'default';
    case 'Accepted':
      return 'success';
    case 'Questionable':
      return 'warning';
    case 'Graduated':
      return 'success';
    default:
     return 'error';
  }
 }
    
  return <Chip label={value} color={getChipColor()} variant="outlined" size="small" />;
};

export default ChipFormatter;
