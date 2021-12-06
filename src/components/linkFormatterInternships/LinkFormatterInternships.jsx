import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import './LinkFormatter.sass';

const LinkFormatterInternships = ({ value, data }) => {
  const { id } = data;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/internshipPage/${id}`);
  };

  return (
    <Box className="linkFormatterWrapper" onClick={handleClick}>
      {value}
    </Box>
  );
};

export default LinkFormatterInternships;
