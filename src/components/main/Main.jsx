import React from 'react';
import './Main.sass';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
// import { SidebarHeader } from '../sidebarHeader';
import { ContentWrapper } from '../contentWrapper';

const Main = (props) => {
  const theme = useTheme();
  const { open, sidebarWidth } = props;
  return (
    <Box
      open={open}
      id="main"
      sx={{
        padding: theme.spacing(3),
        transition: theme.transitions.create(['margin', 'width'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        marginLeft: `-${sidebarWidth}px`,
        width: `100vw`,
        ...(open && {
          transition: theme.transitions.create(['margin', 'width'], {
            easing: theme.transitions.easing.easeOut,
            duration: theme.transitions.duration.enteringScreen,
          }),
          width: `calc(100vw - ${sidebarWidth}px)`,
          marginLeft: 0,
        }),
      }}
    >
      <ContentWrapper />
    </Box>
  );
};

export default Main;
