import React from 'react';

import { Box } from '@mui/material';
import { CandidateInfo } from '../../components';

export function CandidateCard() {
  return (
    <Box display="flex" height="100%" padding="1% 1% 0 1%">
      <Box
        borderColor="primary.main"
        width="50%"
        height="100%"
        padding="1%"
        sx={{ border: 1 }}
        overflow="auto"
      >
        <Box
          height="100%"
          padding="1%"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          backgroundColor="background.paper"
        >
          <CandidateInfo />
        </Box>
      </Box>
    </Box>
  );
}
