import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header, Main } from '../../components';

class Home extends React.PureComponent {
  constructor() {
    super();
    this.state = {};
  }

  render() {
    return (
      <Box display="flex" height="100vh">
        <CssBaseline />
        <Header />
        <Main
          display="flex"
          flexDirection="column"
          flexGrow="1"
          flexShrink="1"
        />
      </Box>
    );
  }
}

export default Home;
