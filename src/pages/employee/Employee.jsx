import * as React from 'react';
import { Box, CssBaseline } from '@mui/material';
import { Header, Main, Sidebar } from '../../components';

export default class Employee extends React.PureComponent {
  constructor() {
    super();
    this.state = {
      isOpen: false,
      sidebarWidth: 300,
    };
  }

  openSidebar = () => {
    this.setState((prevState) => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen, sidebarWidth } = this.state;
    return (
      <Box display="flex" height="100vh">
        <CssBaseline />
        <Header
          isOpen={isOpen}
          openSidebar={this.openSidebar}
          sidebarWidth={sidebarWidth}
        />
        <Sidebar
          isOpen={isOpen}
          openSidebar={this.openSidebar}
          sidebarWidth={sidebarWidth}
        />
        <Main
          display="flex"
          flexDirection="column"
          flexGrow="1"
          flexShrink="1"
          isOpen={isOpen}
          sidebarWidth={sidebarWidth}
        />
      </Box>
    );
  }
}
