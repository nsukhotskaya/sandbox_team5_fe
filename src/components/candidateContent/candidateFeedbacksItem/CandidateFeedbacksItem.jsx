import React, { useEffect } from 'react';
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
import EditIcon from '@mui/icons-material/Edit';
import { useDispatch, useSelector } from 'react-redux';
import './СandidateFeedbacksItem.sass';
import { StarRating } from '../index';
import { getFieldLabel } from '../../../utils';
import {
  updateFeedback,
  createFeedback,
  fetchEvaluationsByFeedbackId,
} from '../../../store/commands';

const CandidateFeedbacksItem = ({
  user,
  candidateInfo,
  handleEditClick,
  stacksSkills,
}) => {
  const dispatch = useDispatch();
  const [isCriteriaShown, setIsCriteriaShown] = React.useState(false);
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
  const candidateEvaluations = useSelector(
    (state) => state.candidateEvaluations.candidateEvaluations,
  );
  const [skillsEvaluations, setSkillsEvaluations] = React.useState([]);
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );
  useEffect(() => {
    if (
      user.roleType === 'Interviewer' &&
      candidateEvaluations.length === 0 &&
      !!feedbacks.length
    ) {
      dispatch(fetchEvaluationsByFeedbackId(feedback.id));
    } else if (candidateEvaluations.length !== 0) {
      setSkillsEvaluations(candidateEvaluations);
    }
  }, []);

  useEffect(() => {
    if (candidateEvaluations.length === 0 && stacksSkills) {
      setSkillsEvaluations(
        stacksSkills.map((skill) => ({
          feedbackId: feedback.id,
          skillId: skill.id,
          value: 0,
          skill,
        })),
      );
    } else setSkillsEvaluations(candidateEvaluations);
  }, [stacksSkills]);

  const updateToNewFeedback = () => {
    const newFeedback = {
      id: feedback.id,
      userId: feedback.userId,
      candidateId: feedback.candidateId,
      englishLevelType: feedback.englishLevelType,
      date: now.toISOString(),
      description,
      evaluations: skillsEvaluations,
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
    evaluations: skillsEvaluations,
    description: '.',
    finalEvaluation: 0,
  });

  const handleButton = () => {
    setIsCriteriaShown(!isCriteriaShown);
  };

  const handleEditMode = () => {
    setEditMode(!editMode);
  };

  const handleChangeFinalEvaluation = (value) => {
    setFinalEvaluation(value);
  };

  const handleAddEvaluations = (value, evaluationName) => {
    const newSkillsEvaluation = skillsEvaluations.map((skill) => {
      if (skill.skill.name === evaluationName) {
        const newSkill = { ...skill };
        newSkill.value = value;
        return newSkill;
      }
      return skill;
    });
    setSkillsEvaluations(newSkillsEvaluation);
  };

  const handleChange = (event) => {
    setDescription(event.target.value);
  };

  const handleSaveButton = () => {
    handleEditMode();
    const newFeedback = updateToNewFeedback();
    newFeedback.evaluations = newFeedback.evaluations.map((evaluation) => {
      const newEvaluation = { ...evaluation };
      delete newEvaluation.id;
      return newEvaluation;
    });
    dispatch(updateFeedback(newFeedback));
  };

  const handleClick = () => {
    dispatch(createFeedback(createFeedbackRequestBody()));
  };

  return (
    <Box className="feedbackItem">
      <Box className="createTitleSection flexBoxRow">
        <Box className="createTitles flexBoxRow">
          <Typography
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            variant="body1"
            fontWeight="bold"
            pr="20px"
          >
            {userName}
          </Typography>
          <Typography variant="body2" pr="20px">
            {roleType}
          </Typography>
          {(authorizedUserRole === 'Admin' ||
            authorizedUserRole === 'Manager' ||
            authorizedUserRole === 'Hr') && (
            <IconButton variant="outlined" onClick={handleEditClick}>
              <EditIcon fontSize="small" />
            </IconButton>
          )}
        </Box>
        {!feedbacks.length ? (
          (user.roleType === authorizedUserRole ||
            authorizedUserRole === 'Hr' ||
            authorizedUserRole === 'Interviewer' ||
            authorizedUserRole === 'Mentor') && (
            <Button variant="outlined" onClick={handleClick}>
              {getFieldLabel('candidateFeedbacks.button.createFeedback')}
            </Button>
          )
        ) : (
          <Box className="flexBoxRow">
            {!isCriteriaShown && (
              <Rating
                size="small"
                value={finalEvaluation}
                max={4}
                readOnly
                pl="200px"
              />
            )}
            <IconButton onClick={handleButton}>
              {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        )}
      </Box>
      {!!feedbacks.length && (
        <Collapse in={isCriteriaShown}>
          <Box className="collapseContainer">
            {user.roleType === 'Interviewer' &&
              skillsEvaluations.map((skill) => (
                <StarRating
                  key={skill.skillId}
                  title={skill.skill.name}
                  grade={skill.value}
                  editMode={editMode}
                  callbackFunction={handleAddEvaluations}
                />
              ))}
            <TextField
              className="feedbackForm"
              sx={{ marginTop: '10px' }}
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
            {(authorizedUserRole === user.roleType ||
              authorizedUserRole === 'Hr' ||
              authorizedUserRole === 'Interviewer' ||
              authorizedUserRole === 'Mentor') &&
              (editMode ? (
                <Button
                  variant="outlined"
                  onClick={handleSaveButton}
                  className="editFeedbackButton"
                >
                  {getFieldLabel('common.save')}
                </Button>
              ) : (
                <Button
                  variant="outlined"
                  onClick={handleEditMode}
                  className="editFeedbackButton"
                >
                  {getFieldLabel('common.edit')}
                </Button>
              ))}
          </Box>
        </Collapse>
      )}
    </Box>
  );
};

export default CandidateFeedbacksItem;
