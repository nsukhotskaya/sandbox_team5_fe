import React from 'react';
import { Box, Toolbar, IconButton, AppBar } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderNav } from '../headerNav';
import './Header.sass';
import { theme } from '../../utils';

class Header extends React.PureComponent {
  render() {
    const { isOpen, openSidebar } = this.props;
    return (
      <ThemeProvider theme={theme}>
        <AppBar position="fixed">
          <Box className="header" backgroundColor={theme.palette.primary.light}>
            <Toolbar>
              {!isOpen && (
                <IconButton
                  aria-label="open drawer"
                  onClick={openSidebar}
                  edge="start"
                  margin-right="2px"
                >
                  <MenuIcon color="secondary" />
                </IconButton>
              )}
            </Toolbar>
            <HeaderNav />
          </Box>
        </AppBar>
      </ThemeProvider>
    );
  }
}

export default Header;
