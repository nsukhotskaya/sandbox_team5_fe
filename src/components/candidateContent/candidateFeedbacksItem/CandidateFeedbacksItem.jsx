import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Typography,
  Rating,
  IconButton,
  Collapse,
  TextField,
  Button,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import './CandidateFeedbacksItem.sass';
import { StarRating } from '../index';
import { getFieldLabel } from '../../../utils';
import { updateFeedback, createFeedback } from '../../../store/commands';

const CandidateFeedbacksItem = ({ user, candidateInfo }) => {
  const dispatch = useDispatch();
  const [isCriteriaShown, setIsCriteriaShown] = React.useState(true);
  const now = new Date(Date.now());
  const { feedbacks, userName, roleType } = user;
  const feedback = feedbacks.length ? feedbacks[0] : {};
  const [description, setDescription] = React.useState(
    feedback.description === '.' ? '' : feedback.description,
  );
  const [finalEvaluation, setFinalEvaluation] = React.useState(
    feedbacks.length ? feedback.finalEvaluation : 0,
  );
  const [editMode, setEditMode] = React.useState(false);

  const updateToNewFeedback = () => {
    const newFeedback = {
      id: feedback.id,
      userId: feedback.userId,
      candidateId: feedback.candidateId,
      englishLevelType: feedback.englishLevelType,
      date: now.toISOString(),
      description,
      evaluations: [],
      finalEvaluation,
    };
    if (!newFeedback.description) {
      newFeedback.description = '.';
    }
    return newFeedback;
  };

  const createFeedbackRequestBody = () => ({
    userId: user.id,
    candidateId: candidateInfo.id,
    englishLevelType: candidateInfo.englishLevelType,
    date: now.toISOString(),
    description: '.',
    finalEvaluation: 0,
  });

  const handleButton = () => {
    setIsCriteriaShown(!isCriteriaShown);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChangeFinalEvaluation = (newEvaluation) => {
    setFinalEvaluation(newEvaluation);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveButton = () => {
    handleEditMode();
    dispatch(updateFeedback(updateToNewFeedback()));
  };

  const handleClick = () => {
    dispatch(createFeedback(createFeedbackRequestBody()));
  };

  return (
    <Box className="feedbackItem">
      <Box className="createTitleSection flexboxRow" p="10px">
        <Box className="createTitles flexboxRow">
          <Typography
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            variant="h5"
            pr="10px"
          >
            {userName}
          </Typography>
          <Typography variant="subtitle2">{roleType}</Typography>
        </Box>
        {!feedbacks.length ? (
          <Button variant="outlined" onClick={handleClick}>
            {getFieldLabel('candidateFeedbacks.button.createFeedback')}
          </Button>
        ) : (
          <Box className="flexboxRow">
            <Rating value={finalEvaluation} max={4} readOnly pl="200px" />
            <IconButton onClick={handleButton}>
              {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        )}
      </Box>
      {!!feedbacks.length && (
        <Collapse in={isCriteriaShown}>
          <Box className="collapseContainer">
            {console.log(feedback.evaluations)}
            {!!feedback.evaluations &&
              feedback.evaluations.map((skill) => (
                <StarRating
                  key={skill.skill.name}
                  title={skill.skill.name}
                  grade={skill.value}
                  editMode={editMode}
                />
              ))}
            <TextField
              value={description}
              multiline
              minRows="3"
              label={getFieldLabel('candidateFeedbacks.label.feedback')}
              InputProps={{ disabled: !editMode }}
              onChange={handleChange}
            />
            <StarRating
              title={getFieldLabel(
                'candidateFeedbacks.title.generalImpression',
              )}
              grade={feedback.finalEvaluation}
              editMode={editMode}
              callbackFunction={handleChangeFinalEvaluation}
            />
            {editMode ? (
              <Button variant="outlined" onClick={handleSaveButton}>
                {getFieldLabel('common.save')}
              </Button>
            ) : (
              <Button variant="outlined" onClick={handleEditMode}>
                {getFieldLabel('common.edit')}
              </Button>
            )}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default CandidateFeedbacksItem;
