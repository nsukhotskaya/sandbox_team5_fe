import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import { Link } from 'react-router-dom';
import './HeaderNav.sass';
import { connect } from 'react-redux';
import { deleteUserToken } from '../../../store/commands';

function HeaderNav(props) {
  const { deleteUserToken } = props;
  return (
    <Box height="60px" width="120px">
      <Box className="headerNav">
        <IconButton>
          <Link to="/profile">
            <Avatar alt="Ivan Ivanov" />
          </Link>
        </IconButton>
        <IconButton onClick={deleteUserToken()}>
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
