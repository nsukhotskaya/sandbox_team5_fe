import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import './StarRating.sass'

const StarRating = ({title, grade, editMode}) => {
  const [starsCount, setStarsCount] = React.useState(grade);

  return (
      <Box className="starRating flexboxRow">
        {title && <Typography
          className="ratingTitle"
          variant="h6"
          color={editMode ? 'primary.main' : '#c0c0c0'}
        >
          {title}
        </Typography>}
        <Rating
          value={starsCount}
          precision={1}
          disabled={!editMode}
          onChange={(event, newValue) => {setStarsCount(newValue)}}
        />
      </Box>
  );
}

export default StarRating;
