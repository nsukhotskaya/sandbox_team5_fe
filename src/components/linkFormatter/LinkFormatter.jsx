import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
} from '@mui/material';
import './LinkFormatter.sass';

const LinkFormatter = ({ value }) => {
  const history = useHistory();
  const handleClick = () => {
    history.push('/candidate');
  };

  return (
    <Box className="linkFormatterWrapper" onClick={handleClick}>
      {value}
    </Box>
  );
};

export default LinkFormatter;
