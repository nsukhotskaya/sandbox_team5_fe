import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Box, Toolbar, AppBar } from '@mui/material';
import { HeaderNav } from '../headerNav';
import './Header.sass';
import HeaderMenu from '../headerMenu/HeaderMenu';
import { theme } from '../../utils';

class Header extends React.PureComponent {
  render() {
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Box className="header" backgroundColor={theme.palette.primary}>
            <Toolbar>
              <HeaderMenu />
            </Toolbar>
            <HeaderNav />
          </Box>
        </AppBar>
      </ThemeProvider>
    );
  }
}

export default Header;
