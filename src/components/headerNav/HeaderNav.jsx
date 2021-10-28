import * as React from 'react';
import { removeCookie } from 'react-cookie/lib';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';

const logOut = () => {
  console.log('log out');
  removeCookie('accessToken');
  console.log(document.cookie);
};

// eslint-disable-next-line react/prefer-stateless-function
class HeaderNav extends React.Component {
  render() {
    return (
      <Box height="60px" width="300px">
        <Box className="headerNav">
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>

          <IconButton>
            <WarningAmberIcon />
          </IconButton>

          <IconButton onClick={logOut}>
            <LoginIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>

          <IconButton>
            <Avatar alt="Ivan Ivanov" />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default HeaderNav;
