import * as React from 'react';

import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import { employeePhoto } from '../../assets';

// eslint-disable-next-line react/prefer-stateless-function
class Header extends React.Component {
  render() {
    return (
      <Box height="60px" width="300px">
        <Box
          width="10%"
          height="100%"
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mr="20px"
        >
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>

          <IconButton>
            <WarningAmberIcon />
          </IconButton>

          <IconButton>
            <LoginIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>

          <IconButton>
            <Avatar alt="Ryan Reynolds" src={employeePhoto} />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

export default Header;
