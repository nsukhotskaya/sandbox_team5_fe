import React from 'react';
import './Main.sass';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { SidebarHeader } from '../sidebarHeader';
import { Card } from '../card';

const Main = (props) => {
  const { open, sidebarWidth } = props;
  return (
    <Box
      open={open}
      id="main"
      sx={{
        padding: useTheme().spacing(3),
        transition: useTheme().transitions.create(['margin', 'width'], {
          easing: useTheme().transitions.easing.sharp,
          duration: useTheme().transitions.duration.leavingScreen,
        }),
        marginLeft: `-${sidebarWidth}px`,
        width: `100vw`,
        ...(open && {
          transition: useTheme().transitions.create(['margin', 'width'], {
            easing: useTheme().transitions.easing.easeOut,
            duration: useTheme().transitions.duration.enteringScreen,
          }),
          width: `calc(100vw - ${sidebarWidth}px)`,
          marginLeft: 0,
        }),
      }}
    >
      {/* <SidebarHeader
        open={open}
        openSidebar={openSidebar}
        sidebarWidth={sidebarWidth}
      /> */}
      <Card />
    </Box>
  );
};

export default Main;
