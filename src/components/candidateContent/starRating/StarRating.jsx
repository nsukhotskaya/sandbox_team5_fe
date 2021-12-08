import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import './StarRating.sass';

const StarRating = ({ title, grade, editMode, callbackFunction }) => (
  <Box
    width="100%"
    paddingLeft="40px"
    paddingRight="40px"
    marginTop="10px"
    marginBottom="10px"
    justifyContent="space-between"
    className="flexboxRow"
  >
    {title && (
      <Typography
        variant="body2"
        fontWeight="bold"
        className={editMode ? 'ratingTitle' : 'ratingTitle ratingDisabled'}
      >
        {title}
      </Typography>
    )}
    <Rating
      size="small"
      max={4}
      defaultValue={grade}
      precision={1}
      readOnly={!editMode}
      className={editMode ? '' : 'ratingDisabled'}
      onChange={(event, newValue) => {
        callbackFunction(newValue, title);
      }}
    />
  </Box>
);

export default StarRating;
