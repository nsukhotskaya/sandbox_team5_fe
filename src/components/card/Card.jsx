import React from 'react';
import { Box } from '@mui/material';
import './Card.sass';
import { Footer } from '../footer';

function Card() {
  return (
    <Box id="card">
      <Box className="content">This is content</Box>
      <span className="pageGap" />
      <Footer />
    </Box>
  );
}

export default Card;
