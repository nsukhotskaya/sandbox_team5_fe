import React from 'react';
import { useHistory } from 'react-router-dom';
import {
  Box,
} from '@mui/material';
import './LinkFormatter.sass';

const LinkFormatter = ({ value, data }) => {
  const { id } = data;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/candidate/${id}`);
  };

  return (
    <Box className="linkFormatterWrapper" onClick={handleClick}>
      {value}
    </Box>
  );
};

export default LinkFormatter;
