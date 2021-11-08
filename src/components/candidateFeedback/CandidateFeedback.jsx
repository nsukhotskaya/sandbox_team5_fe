import React from 'react';
import { Box, Typography, TextField, Rating } from '@mui/material';

export function CandidateFeedback() {
  return (
    <Box>
      <Typography variant="h6">Unassigned HR</Typography>
      <Rating max={4} />
      <TextField
        placeholder="You can write comment here"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
      <Typography variant="h6">Unassigned tech interviewer</Typography>
      <Rating />
      <TextField
        placeholder="You can write comment here"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
      <Typography variant="h6">Unassigned mentor</Typography>
      <Rating max={4} />
      <TextField
        placeholder="You can write comment here"
        variant="outlined"
        fullWidth
        multiline
        rows={4}
      />
    </Box>
  );
}
