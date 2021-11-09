import React from 'react';
import { Box, Typography } from '@mui/material';
// import { useMediaBetween } from '../utils';
import './CardTitle.sass';

const CardTitle = ({ title }) => (
  <Box>
    <Typography variant="h4" component="div" gutterBottom color="#222">
      {title}
    </Typography>
  </Box>
);
export default CardTitle;
