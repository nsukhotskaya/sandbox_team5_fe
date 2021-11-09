import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton } from '@mui/material';
import './HeaderNav.sass';
import { connect } from 'react-redux';
import { deleteUserToken } from '../../../store/commands';

function HeaderNav(props) {
  const { deleteUserToken: logOut } = props;
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

const mapDispatchToProps = (dispatch) => ({
  deleteUserToken: () => dispatch(deleteUserToken()),
});

export default connect(null, mapDispatchToProps)(HeaderNav);
