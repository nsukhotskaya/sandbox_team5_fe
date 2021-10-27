import * as React from 'react';
import { ThemeProvider } from '@emotion/react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';
import { theme } from '../../utils';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderNav extends React.Component {
  render() {
    return (
      <ThemeProvider theme={theme}>
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
      </ThemeProvider>
    );
  }
}

export default HeaderNav;
