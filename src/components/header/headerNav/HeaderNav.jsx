import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';
import { connect } from 'react-redux';
import { deleteUserToken } from '../../../store/commands';

function HeaderNav(props) {
  const { deleteUserToken: logOut } = props;
  return (
    <Box height="60px" width="120px">
      <Box className="headerNav">
        <IconButton href="/profile">
          <Avatar alt="Ivan Ivanov" />
        </IconButton>
        <IconButton onClick={logOut}>
          <LoginIcon />
        </IconButton>
      </Box>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteUserToken: () => dispatch(deleteUserToken()),
});

export default connect(null, mapDispatchToProps)(HeaderNav);
