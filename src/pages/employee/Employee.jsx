import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { MainHeader, Main, Sidebar } from '../../components';

export default function Employee() {
  const [open, setOpen] = React.useState(false);
  const [sidebarWidth] = React.useState(300);
  const openSidebar = () => {
    setOpen(!open);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <MainHeader
        open={open}
        openSidebar={openSidebar}
        sidebarWidth={sidebarWidth}
        className="mainHeader"
      />
      <Sidebar
        open={open}
        openSidebar={openSidebar}
        sidebarWidth={sidebarWidth}
      />
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          flexGrow: '1',
          flexShrink: '1',
        }}
      >
        <Main
          open={open}
          openSidebar={openSidebar}
          sidebarWidth={sidebarWidth}
        />
      </Box>
    </Box>
  );
}
