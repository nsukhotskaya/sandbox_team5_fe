import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderNav extends React.Component {
  render() {
    return (
      <Box height="60px" width="120px">
        <Box className="headerNav">
          <IconButton>
            <Avatar alt="Ivan Ivanov" />
          </IconButton>
          <IconButton>
            <LoginIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default HeaderNav;
