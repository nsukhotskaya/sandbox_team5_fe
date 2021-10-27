import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';
import { theme } from '../../utils';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderNav extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <Box height="60px" width="300px">
          <Box className="headerNav">
            <IconButton>
              <ChatBubbleOutlineIcon color="secondary" />
            </IconButton>

            <IconButton>
              <WarningAmberIcon color="secondary" />
            </IconButton>

            <IconButton>
              <LoginIcon color="secondary" />
            </IconButton>

            <IconButton>
              <SettingsIcon color="secondary" />
            </IconButton>

            <IconButton>
              <Avatar alt="Ivan Ivanov" />
            </IconButton>
          </Box>
        </Box>
      </ThemeProvider>
    );
  }
}

export default HeaderNav;
