import React from 'react';
import { Box, Typography, Rating } from '@mui/material';
import './StarRating.sass'

const StarRating = ({title, grade, editMode}) => {
  const [starsCount, setStarsCount] = React.useState(grade);

  return (
    <Box display="flex" flexDirection="row" alignItems="center" m="20px">
      <Box display="flex" flexDirection="row" alignItems="center" width="350px" justifyContent="space-between">
        {title && <Typography
          variant="h6"
          width="200px"
          overflow="hidden"
          textOverflow="ellipsis"
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
    </Box>
  );
}

export default StarRating;
