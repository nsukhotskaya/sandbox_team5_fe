import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Toolbar, AppBar } from '@mui/material';
import { HeaderNav } from '../headerNav';
import './Header.sass';
import HeaderMenu from '../headerMenu/HeaderMenu';

const Header = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <AppBar position="fixed">
      <Box className="header" backgroundColor="primary">
        <Toolbar>
          <HeaderMenu />
        </Toolbar>
        <HeaderNav />
      </Box>
    </AppBar>
  );
};

export default Header;
