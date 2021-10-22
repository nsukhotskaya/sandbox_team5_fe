import React from 'react';
import { Box, Toolbar, IconButton, AppBar } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { HeaderNav } from '../headerNav';

const Header = (props) => {
  const theme = useTheme();
  const { open, openSidebar, sidebarWidth } = props;
  return (
    <AppBar
      position="fixed"
      open={open}
      sx={{
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
      }}
    >
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={openSidebar}
            edge="start"
            sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon
              sx={{
                color: '#8FC1DD',
              }}
            />
          </IconButton>
        </Toolbar>
        <HeaderNav />
      </Box>
    </AppBar>
  );
};

export default Header;
