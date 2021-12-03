import React from 'react';
import { useDispatch } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton } from '@mui/material';
import './HeaderNav.sass';
import { deleteUserToken } from '../../../store/commands';

function HeaderNav() {
  const dispatch = useDispatch();
  const logOut = () => {
    dispatch(deleteUserToken())
  }

  return (
    <Box height="60px" width="60px">
      <Box className="headerNav">
        <IconButton onClick={logOut}>
          <LoginIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

export default HeaderNav;
