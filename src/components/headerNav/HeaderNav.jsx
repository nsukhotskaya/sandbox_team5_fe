import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';

// eslint-disable-next-line react/prefer-stateless-function
const HeaderNav = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box height="60px" width="120px">
      <Box className="headerNav">
        <IconButton>
          <Avatar alt="Ivan Ivanov" />
        </IconButton>
        <IconButton>
          <LoginIcon color="secondary" />
        </IconButton>
      </Box>
    </Box>
  );
};

export default HeaderNav;
