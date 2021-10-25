import React from 'react';
import { Box } from '@mui/material';
import { MainContentWrapper } from '../mainContentWrapper';
import './Main.sass';

const Main = (props) => {
  const { isOpen } = props;
  return (
    <Box>
      {!isOpen ? (
        <Box className="main main__unclenched">
          <MainContentWrapper />
        </Box>
      ) : (
        <Box className="main main__compressed">
          <MainContentWrapper />
        </Box>
      )}
    </Box>
  );
};

export default Main;
