import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { useLocation } from 'react-router-dom';
import { Header, Main } from '../../components';

function Home() {
  return (
    <Box display="flex" height="100vh">
      <CssBaseline />
      <Header />
      <Main
        display="flex"
        flexDirection="column"
        flexGrow="1"
        flexShrink="1"
        location={useLocation()}
      />
    </Box>
  );
}

export default Home;
