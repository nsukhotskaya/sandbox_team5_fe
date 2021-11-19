import * as React from 'react';
import Box from '@mui/material/Box';
import CircularProgress from '@mui/material/CircularProgress';

export default function ProgressIndicator() {
  return (
    <Box
      className="progressIndicatorBox"
      height="100vh"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <CircularProgress className="progressIndicator" color="primary" />
    </Box>
  );
}
