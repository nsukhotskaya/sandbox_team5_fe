import React from 'react';
import { Box } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import { MainContentWrapper } from '../mainContentWrapper';

const Main = (props) => {
  const theme = useTheme();
  const { isOpen, sidebarWidth } = props;
  const transitionBoxStyles = {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${sidebarWidth}px`,
    width: `100vw`,
    ...(isOpen && {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: `calc(100vw - ${sidebarWidth}px)`,
      marginLeft: 0,
    }),
  };
  return (
    <Box
      open={isOpen}
      padding="0"
      backgroundColor="#CEDEE4"
      display="flex"
      overflow="hidden"
      flexDirection="column"
      flexGrow="1"
      sx={transitionBoxStyles}
    >
      <MainContentWrapper />
    </Box>
  );
};

export default Main;
