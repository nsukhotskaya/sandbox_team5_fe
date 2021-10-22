import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header, Main, Sidebar } from '../../components';

export default function Employee() {
  const [open, setOpen] = React.useState(false);
  const [sidebarWidth] = React.useState(300);
  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <Box display="flex" height="100vh">
      <CssBaseline />
      <Header
        open={open}
        openSidebar={openSidebar}
        sidebarWidth={sidebarWidth}
      />
      <Sidebar
        open={open}
        openSidebar={openSidebar}
        sidebarWidth={sidebarWidth}
      />
      <Main
        display="flex"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        open={open}
        openSidebar={openSidebar}
        sidebarWidth={sidebarWidth}
      />
    </Box>
  );
}
