import React from 'react';
import { Box, Toolbar, IconButton, AppBar } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderNav } from '../headerNav';
import './Header.sass';

class Header extends React.PureComponent {
  render() {
    const { isOpen, openSidebar } = this.props;
    return (
      <AppBar position="fixed">
        <Box className="header">
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
  }
}

export default Header;
