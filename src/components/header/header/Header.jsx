import React from 'react';
import { Box, Toolbar, AppBar } from '@mui/material';
import { HeaderNav } from '../headerNav';
import { HeaderMenu } from '../headerMenu';
import './Header.sass';

class Header extends React.PureComponent {
  render() {
    return (
      <AppBar position="fixed">
        <Box className="header">
          <Toolbar>
            <HeaderMenu />
          </Toolbar>
          <HeaderNav />
        </Box>
      </AppBar>
    );
  }
}

export default Header;
