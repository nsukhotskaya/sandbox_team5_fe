import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import './StarRating.sass';

const StarRating = ({ title, grade, editMode, callbackFunction }) => (
  <Box className="starRating flexboxRow">
    {title && (
      <Typography
        variant="h6"
        className={editMode ? 'ratingTitle' : 'ratingTitle ratingDisabled'}
      >
        {title}
      </Typography>
    )}
    <Rating
      max={4}
      defaultValue={grade}
      precision={1}
      readOnly={!editMode}
      className={editMode ? '' : 'ratingDisabled'}
      onChange={(event, newValue) => {
        callbackFunction(newValue);
      }}
    />
  </Box>
);

export default StarRating;
