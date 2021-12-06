import React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material';

const Confirm = ({
  confirmTitle,
  confirmContentText,
  callback,
  rejectButtonLabel,
  acceptButtonLabel,
}) => {
  const handleClickNo = () => {
    callback(false);
  };

  const handleClickYes = () => {
    callback(true);
  };

  return (
    <Dialog open>
      <DialogTitle>{confirmTitle}</DialogTitle>
      {confirmContentText && (
        <DialogContent>
          <DialogContentText>{confirmContentText}</DialogContentText>
        </DialogContent>
      )}
      <DialogActions>
        <Button color="error" variant="outlined" onClick={handleClickNo}>
          {rejectButtonLabel}
        </Button>
        <Button color="success" variant="outlined" onClick={handleClickYes}>
          {acceptButtonLabel}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default Confirm;
