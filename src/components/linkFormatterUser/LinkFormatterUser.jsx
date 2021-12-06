import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@mui/material';
import './LinkFormatter.sass';

const LinkFormatterUser = ({ value, data }) => {
  const { id } = data;
  console.log(data);
  const history = useHistory();
  const handleClick = () => {
    history.push(`/profile/${id}`);
  };

  return (
    <Box className="linkFormatterWrapper" onClick={handleClick}>
      {value}
    </Box>
  );
};

export default LinkFormatterUser;
