import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import {Box, Typography, Rating, TextField} from '@mui/material';
import { fetchSkillsByStackType } from '../../../store/commands';
import './CandidateFeedbacks.sass'
import {starLabels, roleTitle} from '../../../constants/feedback';

const CandidateFeedbacks = ({candidateInfo}) => {
  const [value, setValue] = React.useState(2);
  const [hover, setHover] = React.useState(-1);

  const skillsList = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    if(candidateInfo.stackType){dispatch(fetchSkillsByStackType(candidateInfo.stackType))};
  }, [candidateInfo.stackType]);
  
  if ( skillsList ) {
    Object.values(skillsList).map((skill) => console.log(skill.name));
  };
  

  return(
    <Box className="feedbackContainer">
      {roleTitle.map((item)=>(
        <Box className="feedbackItem" key={item}>
          <Typography>{item}</Typography>
          <Box display="flex" flexDirection="row">
            <Rating
              value={value}
              precision={1}
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
