import React from 'react';
import { Box, Snackbar, Alert } from '@mui/material';
import { useMediaDown } from '../utils';

const Toaster = ({ isToasterOpen, handleCloseToaster, message, severity }) => {
  const smallScreen = useMediaDown('sm');
  return (
    <Snackbar
      open={isToasterOpen}
      autoHideDuration={8000}
      onClose={handleCloseToaster}
      anchorOrigin={
        smallScreen
          ? { vertical: 'top', horizontal: 'center' }
          : { vertical: 'top', horizontal: 'right' }
      }
    >
      <Box>
        <Alert onClose={handleCloseToaster} severity={severity}>
          {message}
        </Alert>
      </Box>
    </Snackbar>
  );
};

export default Toaster;
