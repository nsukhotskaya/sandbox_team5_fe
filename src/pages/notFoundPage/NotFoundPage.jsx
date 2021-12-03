import React from 'react';
import { Box, Typography } from '@mui/material';

const NotFoundPage = () => (
  <Box p="40px">
    <Typography variant="h2">Oops... </Typography>
    <Typography variant="h5">404: Page not found</Typography>
    <Typography variant="subtitle1">
      There is no such page in this application
    </Typography>
  </Box>
);

export default NotFoundPage;
