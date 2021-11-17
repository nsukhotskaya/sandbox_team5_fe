import React from 'react';
import {Box, Typography, Rating, TextField} from '@mui/material';
import './CandidateFeedbacks.sass'
import {starLabels, roleTitle} from '../../../constants/feedback';

const CandidateFeedbacks = () => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);
  
  return(
    <Box className="feedbackContainer">
      {roleTitle.map((item)=>(
        <Box className="feedbackItem" key={item}>
          <Typography>{item}</Typography>
          <Box display="flex" flexDirection="row">
            <Rating
              value={value}
              precision={0.5}
              onChange={(event, newValue) => {setValue(newValue)}}
              onChangeActive={(event, newHover) => {setHover(newHover)}}
            />
              {value !== null && (<Box ml="8px">{starLabels[hover !== -1 ? hover : value]}</Box>)}
          </Box>
          <TextField className="feedbackText" multiline minRows="3" label="Feedback"/>
        </Box>
      ))}
    </Box>
  )
};

export default CandidateFeedbacks;
