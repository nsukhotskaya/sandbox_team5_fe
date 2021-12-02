import React from 'react';
import { Box, Snackbar, Alert } from '@mui/material';
import { useMediaDown } from '../utils';

const ToasterAlert = ({isToasterOpen, handleCloseToaster, message, alertTypeSeverity}) => {
  const smallScreen = useMediaDown('sm');
  return(
    <Snackbar
      open = {isToasterOpen}
      autoHideDuration = {8000}
      onClose = {handleCloseToaster}
      anchorOrigin = {
        smallScreen ? { vertical: 'top', horizontal: 'center'} : { vertical: 'top', horizontal: 'left' }
      }
    >
      <Box m="10px">
        <Alert onClose={handleCloseToaster} severity={alertTypeSeverity}>
          {message}
        </Alert>
      </Box>
    </Snackbar>
  )
}

export default ToasterAlert;
