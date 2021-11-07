import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';
import { connect } from 'react-redux';
import { userLogOut } from '../../../store/actions';

function HeaderNav(props) {
  const { logOut } = props;
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
  logOut: () => dispatch(userLogOut()),
});

export default connect(null, mapDispatchToProps)(HeaderNav);
