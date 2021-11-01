import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';

const Card = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return <Box className="card">This is content</Box>;
};

export default Card;
