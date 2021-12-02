import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import './StarRating.sass';

const StarRating = ({ title, grade, editMode, callbackFunction }) => (
  <Box className="starRating flexboxRow">
    {title && (
      <Typography
        className="ratingTitle"
        variant="h6"
        color={editMode ? 'primary.main' : '#c0c0c0'}
      >
        {title}
      </Typography>
    )}
    <Rating
    max={4}
      defaultValue={grade}
      precision={1}
      disabled={!editMode}
      onChange={(event, newValue) => {
        callbackFunction(newValue);
      }}
    />
  </Box>
);

export default StarRating;
