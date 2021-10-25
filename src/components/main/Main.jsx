import React from 'react';
import { Box } from '@mui/material';
import { MainContentWrapper } from '../mainContentWrapper';
import './Main.sass';

class Main extends React.PureComponent {
  render() {
    const { isOpen } = this.props;
    return (
      <Box>
        {!isOpen ? (
          <Box className="main mainExpanded">
            <MainContentWrapper />
          </Box>
        ) : (
          <Box className="main mainCompressed">
            <MainContentWrapper />
          </Box>
        )}
      </Box>
    );
  }
}

export default Main;
