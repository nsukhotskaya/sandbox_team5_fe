import React from 'react';
import { Rating } from '@mui/material';

const StarFormatter = ({ value }) =>
  !!value && (
    <Rating
      className="starFormatterWrapper"
      name="read-only"
      size="small"
      defaultValue={value}
      max={4}
      readOnly
    />
  );

export default StarFormatter;
