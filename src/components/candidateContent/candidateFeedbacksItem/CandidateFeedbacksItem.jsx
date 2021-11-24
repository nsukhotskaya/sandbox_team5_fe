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

const CandidateFeedbacksItem = ({ role }) => {
  const [isCriteriaShown, setIsCriteriaShown] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const handleButton = () => {
    setIsCriteriaShown(!isCriteriaShown);
  };
  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  return (
    <Box className="feedbackItem">
      <Box className="titleSection">
        <Box className="flexboxRow" width="400px">
          <Typography className="feedbackTitle" variant="h5">
            {role.name}
          </Typography>
          <Typography
            className="feedbackTitle roleTitle"
            variant="subtitle2"
            color="primary.main"
          >
            {role.role}
          </Typography>
        </Box>
        <Box className="flexboxRow">
          <Rating value={role.generalImpression} readOnly />
        </Box>
        <IconButton onClick={handleButton}>
          {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isCriteriaShown}>
        <Box className="collapseContainer" borderColor="background.default">
          {role.skillGrades.map((skill) => (
            <StarRating
              key={skill.name}
              title={skill.name}
              grade={skill.grade}
              editMode={editMode}
            />
          ))}
          <TextField
            defaultValue={role.textReview}
            multiline
            minRows="3"
            label={getFieldLabel('candidateFeedbacks.label.feedback')}
            InputProps={{ disabled: !editMode }}
          />
          <StarRating
            title={getFieldLabel('candidateFeedbacks.title.generalImpression')}
            grade={role.generalImpression}
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
