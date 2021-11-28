import React from 'react';
import {
  Box,
  Typography,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { createFeedback } from '../../../store/commands';
import './CreateFeedback.sass';
// import { getFieldLabel } from '../../../utils';

const CreateFeedback = ({ role, name, userId, candidateId, englishLevelType }) => {
  const dispatch = useDispatch();
  const now = new Date(Date.now());
  const createFeedbackRequestBody = () => ({
    userId,
    candidateId,
    englishLevelType,
    date: now.toISOString(),
    description: ".",
    finalEvaluation: 0
  });

  const handleClick = () => {
    dispatch(createFeedback(createFeedbackRequestBody()));
  }

  return(
    <Box className="titleSection">
      <Typography className="feedbackTitle" variant="h5">
      {name}
      </Typography>
      <Typography
        className="roleTitle"
        variant="subtitle2"
        color="primary.main"
      >
        {role}
      </Typography>
      <Button variant="outlined" onClick={handleClick}>Create feedback</Button>
    </Box>
  )
}


export default CreateFeedback;
