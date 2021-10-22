import React from 'react';
import { Box } from '@mui/material';
import './ContentWrapper.sass';
import { Footer } from '../footer';
import { Card } from '../card';

function ContentWrapper() {
  return (
    <Box id="content">
      <Card className="card" />
      <span className="pageGap" />
      <Footer />
    </Box>
  );
}

export default ContentWrapper;
