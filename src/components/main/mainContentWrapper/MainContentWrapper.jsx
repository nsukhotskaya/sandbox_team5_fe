import React from 'react';
import { Box } from '@mui/material';
import './MainContentWrapper.sass';
import { Footer } from '../../footer';
import { Card } from '../../card';

class MainContentWrapper extends React.PureComponent {
  render() {
    return (
      <Box id="content">
        <Card className="card" />
        <span className="pageGap" />
        <Footer />
      </Box>
    );
  }
}

export default MainContentWrapper;
