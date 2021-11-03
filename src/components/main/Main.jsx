import React from 'react';
import { Box } from '@mui/material';
import { Footer } from '../footer';
import './Main.sass';

function Main() {
  return (
    <Box className="main">
      <Box id="content">
        <Box className="card" backgroundColor="background.paper">
          This is content
        </Box>
        <Footer />
      </Box>
    </Box>
  );
}

export default Main;
