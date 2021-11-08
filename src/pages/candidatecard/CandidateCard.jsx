import React from 'react';
import { Box } from '@mui/material';
import {
  CandidateFeedback,
  CandidateHistory,
  CandidateInfo,
} from '../../components';

export function CandidateCard() {
  return (
    // коробка фон
    <Box display="flex" height="100vh" backgroundColor="background.paper">
      <Box
        boxSizing="border-box"
        backgroundColor="background.default"
        padding="1%"
        width="50%"
        height="100%"
      >
        <Box
          height="100%"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          padding="2%"
          backgroundColor="background.paper"
          boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
        >
          <CandidateInfo />
        </Box>
      </Box>

      <Box
        boxSizing="border-box"
        display="flex"
        flexDirection="column"
        padding="1% 1% 1% 0"
        width="50%"
        height="100%"
        backgroundColor="background.default"
      >
        <Box
          padding="2%"
          height="75%"
          backgroundColor="background.paper"
          boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
        >
          <CandidateFeedback />
        </Box>
        <Box
          boxSizing="border-box"
          marginTop="2%"
          padding="2%"
          height="25%"
          backgroundColor="background.paper"
          boxShadow="0 0 20px rgba(0, 0, 0, 0.1)"
        >
          <CandidateHistory />
        </Box>
      </Box>
    </Box>
  );
}
