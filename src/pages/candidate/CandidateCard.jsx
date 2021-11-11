import React from 'react';

import { Box } from '@mui/material';
import { CandidateInfo } from '../../components';

export function CandidateCard() {
  return (
    <Box display="flex" height="100%" sx={{ border: 1 }}>
      <Box
        borderColor="primary.main"
        width="50%"
        height="100%"
        overflow="auto"
        sx={{ border: 1 }}
      >
        <Box
          height="100%"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          backgroundColor="background.paper"
          maxHeight="100%"
        >
          <CandidateInfo />
        </Box>
      </Box>
    </Box>
  );
}
