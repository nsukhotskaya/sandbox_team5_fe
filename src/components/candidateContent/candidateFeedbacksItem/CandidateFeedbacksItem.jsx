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
import './CandidateFeedbacksItem.sass';
import { StarRating } from '../index';
import { getFieldLabel } from '../../../utils';
import { hrSkillGrades } from '../../../mocks/candidateFeedbacks.json';

const CandidateFeedbacksItem = ({ feedback, users }) => {
  const [isCriteriaShown, setIsCriteriaShown] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const handleButton = () => {
    setIsCriteriaShown(!isCriteriaShown);
  };
  const handleEditMode = () => {
    setEditMode(!editMode);
  };
  const skillGrades = !feedback.evaluations.length ? hrSkillGrades : feedback.evaluations;
  const feedbackUser = users.find(({id})=> id === feedback.userId);

  return (
    <Box className="feedbackItem">
      <Box className="titleSection">
        <Box className="flexboxRow" width="400px">
          <Typography className="feedbackTitle" variant="h5">
            {feedbackUser.userName}
          </Typography>
          <Typography
            className="feedbackTitle roleTitle"
            variant="subtitle2"
            color="primary.main"
          >
            {feedbackUser.roleType}
          </Typography>
        </Box>
        <Box className="flexboxRow">
          <Rating value={feedback.finalEvaluation} readOnly />
        </Box>
        <IconButton onClick={handleButton}>
          {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isCriteriaShown}>
        <Box className="collapseContainer" borderColor="background.default">
          {skillGrades.map((skill) => (
            <StarRating
              key={skill.name}
              title={skill.name}
              grade={skill.grade}
              editMode={editMode}
            />
          ))}
          <TextField
            defaultValue={feedback.description}
            multiline
            minRows="3"
            label={getFieldLabel('candidateFeedbacks.label.feedback')}
            InputProps={{ disabled: !editMode }}
          />
          <StarRating
            title={getFieldLabel('candidateFeedbacks.title.generalImpression')}
            grade={feedback.finalEvaluation}
            editMode={editMode}
          />
          {editMode ? (
            <Button
              variant="outlined"
              onClick={handleEditMode}
            >
              {getFieldLabel('common.save')}
            </Button>
          ) : (
            <Button
              variant="outlined"
              onClick={handleEditMode}
            >
              {getFieldLabel('common.edit')}
            </Button>
          )}
        </Box>
      </Collapse>
    </Box>
  );
};

export default CandidateFeedbacksItem;
