import React from 'react';
import { Chip } from '@mui/material';
import { getChipColorByStatus } from '../../utils';

const ChipFormatter = ({ value }) => (
  <Chip
    label={value.replace('_', " ")}
    color={getChipColorByStatus(value)}
    variant="outlined"
    size="small"
  />
);

export default ChipFormatter;
