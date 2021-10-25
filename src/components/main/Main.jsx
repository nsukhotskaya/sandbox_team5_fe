import React from 'react';
import { Box } from '@mui/material';
import { MainContentWrapper } from '../mainContentWrapper';

const Main = (props) => {
  const { isOpen } = props;
  return (
    <Box>
      {!isOpen ? (
        <Box
          padding="0"
          backgroundColor="#CEDEE4"
          display="flex"
          overflow="hidden"
          flexDirection="column"
          flexGrow="1"
          marginLeft="-300px"
          width="100vw"
          height="100vh"
        >
          <MainContentWrapper />
        </Box>
      ) : (
        <Box
          padding="0"
          backgroundColor="#CEDEE4"
          display="flex"
          overflow="hidden"
          flexDirection="column"
          flexGrow="1"
          width="calc(100vw - 300px)"
          marginLeft="0"
          height="100vh"
        >
          <MainContentWrapper />
        </Box>
      )}
    </Box>
  );
};

export default Main;
