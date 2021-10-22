import React from 'react';
import { Box, Toolbar, IconButton, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderNav } from '../headerNav';

const Header = (props) => {
  const theme = useTheme();
  const { open, openSidebar, sidebarWidth } = props;
  const transitionAppBarStyles = {
    backgroundColor: '#ffffff',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    ...(open && {
      width: `calc(100% - ${sidebarWidth}px)`,
      marginLeft: `${sidebarWidth}px`,
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
    }),
  };
  const transitionIconButtonStyles = {
    marginRight: 2,
    ...(open && { display: 'none' }),
  };
  return (
    <AppBar position="fixed" sx={transitionAppBarStyles}>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openSidebar}
            edge="start"
            sx={transitionIconButtonStyles}
          >
            <MenuIcon color="action" />
          </IconButton>
        </Toolbar>
        <HeaderNav />
      </Box>
    </AppBar>
  );
};

export default Header;
