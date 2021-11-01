import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box } from '@mui/material';
import { Footer } from '../footer';
import './Main.sass';

const Main = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box className="main">
      <Box id="content">
        <Box className="cardMain">This is content</Box>
        <Footer />
      </Box>
    </Box>
  );
};

export default Main;
