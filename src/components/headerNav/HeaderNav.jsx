import * as React from 'react';

import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';

function HeaderNav() {
  return (
    <Box height="60px" width="120px">
      <Box className="headerNav">
        <IconButton>
          <Avatar alt="Ivan Ivanov" />
        </IconButton>
        <IconButton>
          <LoginIcon color="primary" />
        </IconButton>
      </Box>
    </Box>
  );
}

export default HeaderNav;
