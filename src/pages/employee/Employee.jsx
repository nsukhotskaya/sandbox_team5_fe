import React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header, Main, Sidebar } from '../../components';

export default class Employee extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false,
    };
  }

  openSidebar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;
    return (
      <Box display="flex" height="100vh">
        <CssBaseline />
        <Header isOpen={isOpen} openSidebar={this.openSidebar} />
        <Sidebar isOpen={isOpen} openSidebar={this.openSidebar} />
        <Main
          display="flex"
          flexDirection="column"
          flexGrow="1"
          flexShrink="1"
          isOpen={isOpen}
        />
      </Box>
    );
  }
}
