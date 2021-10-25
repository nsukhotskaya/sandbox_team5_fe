import React from 'react';
import { Box, Toolbar, IconButton, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderNav } from '../headerNav';

const Header = (props) => {
  const { isOpen, openSidebar } = props;
  return (
    <AppBar position="fixed">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        backgroundColor="#ffffff"
      >
        <Toolbar>
          {!isOpen && (
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={openSidebar}
              edge="start"
              margin-right="2px"
            >
              <MenuIcon color="action" />
            </IconButton>
          )}
        </Toolbar>
        <HeaderNav />
      </Box>
    </AppBar>
  );
};

export default Header;
