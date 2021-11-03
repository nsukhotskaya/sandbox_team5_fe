import React from 'react';

import { Box, Toolbar, AppBar } from '@mui/material';
import { HeaderNav } from '../headerNav';
import { HeaderMenu } from '../headerMenu';
import './Header.sass';

function Header() {
  return (
    <AppBar position="fixed">
      <Box className="header" backgroundColor="background.paper">
        <Toolbar>
          <HeaderMenu />
        </Toolbar>
        <HeaderNav />
      </Box>
    </AppBar>
  );
}

export default Header;
