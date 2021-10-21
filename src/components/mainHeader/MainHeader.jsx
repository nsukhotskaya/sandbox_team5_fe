import React from 'react';
import { Box, Toolbar, IconButton, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';

const MainHeader = (props) => {
  const { open, openSidebar, sidebarWidth } = props;
  return (
    <AppBar
      position="fixed"
      open={open}
      id="mainHeader"
      sx={{
        transition: useTheme().transitions.create(['margin', 'width'], {
          easing: useTheme().transitions.easing.sharp,
          duration: useTheme().transitions.duration.leavingScreen,
        }),
        ...(open && {
          width: `calc(100% - ${sidebarWidth}px)`,
          marginLeft: `${sidebarWidth}px`,
          transition: useTheme().transitions.create(['margin', 'width'], {
            easing: useTheme().transitions.easing.easeOut,
            duration: useTheme().transitions.duration.enteringScreen,
          }),
        }),
      }}
    >
      <Box>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openSidebar}
            edge="start"
            sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default MainHeader;
