import React from 'react';
import { Box } from '@mui/material';
import { Footer } from '../../footer';
import './Main.sass';

class Main extends React.PureComponent {
  render() {
    return (
      <Box className="main">
        <Box id="content">
          <Box className="card">This is content</Box>
          <Footer />
        </Box>
      </Box>
    );
  }
}

export default Main;
