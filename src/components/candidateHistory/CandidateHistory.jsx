import React from 'react';
import { Box, Typography, TextField } from '@mui/material';

export function CandidateHistory() {
  return (
    <Box>
      <Typography variant="h6">Action history</Typography>
      <TextField
        variant="outlined"
        fullWidth
        multiline
        rows={4}
        defaultValue="Some history"
        InputProps={{
          readOnly: true,
        }}
      />
    </Box>
  );
}
