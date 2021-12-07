import React, {
  useEffect
} from 'react';
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
import { useDispatch } from 'react-redux';
import './СandidateFeedbacksItem.sass';
import { StarRating } from '../index';
import { getFieldLabel } from '../../../utils';
import { updateFeedback, createFeedback, 
  // createEvaluation
 } from '../../../store/commands';

const CandidateFeedbacksItem = ({ user, candidateInfo, handleEditClick, skills }) => {
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
  const [skillsEvaluations, setSkillsEvaluations] = React.useState([]);

  useEffect(() => {
    if (skills) {
      setSkillsEvaluations(
        skills.map((skill)=>(
        {
          feedbackId: feedback.id, 
          skillId: skill.id,
          value: 0,
          skill,
        }
      )))
    //   skillsEvaluations=skills.map((skill)=>(
    //   {
    //     feedbackId: feedback.id, 
    //     skillId: skill.id,
    //     value: 0,
    //     skill,
    //   }
    // ))
    // skillsEvaluations.map((newEvaluation) => (dispatch(createEvaluation(newEvaluation))));
  }
  }, [skills]);

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

  const handleChangeEvaluations = (value, evaluationName) => {
    const newSkillsEvaluation = feedback.evaluations.map((skill) => {
      if (skill.skill.name === evaluationName) {
        const newSkill = {...skill}
        newSkill.value = value
        return newSkill
      }
      return skill
    });
    console.log(newSkillsEvaluation)
    setSkillsEvaluations(newSkillsEvaluation);
  };

  const handleAddEvaluations = (value, evaluationName) => {
    const newSkillsEvaluation = skillsEvaluations.map((skill) => {
      if (skill.skill.name === evaluationName) {
        const newSkill = {...skill}
        newSkill.value = value
        return newSkill
      }
      return skill
    });
    console.log(newSkillsEvaluation)
    setSkillsEvaluations(newSkillsEvaluation);
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
      <Box className="createTitleSection flexBoxRow">
        <Box className="createTitles flexBoxRow">
          <Typography
            overflow="hidden"
            textOverflow="ellipsis"
            whiteSpace="nowrap"
            variant="h6"
            pr="10px"
          >
            {userName}
          </Typography>
          <Typography variant="h6" fontWeight="300" pr="10px">
            {roleType}
          </Typography>
          <IconButton variant="outlined" onClick={handleEditClick}>
            <EditIcon fontSize="small" />
          </IconButton>
        </Box>
        {!feedbacks.length ? (
          <Button variant="outlined" onClick={handleClick}>
            {getFieldLabel('candidateFeedbacks.button.createFeedback')}
          </Button>
        ) : (
          <Box className="flexBoxRow">
            {!isCriteriaShown && <Rating value={finalEvaluation} max={4} readOnly pl="200px" />}
            <IconButton onClick={handleButton}>
              {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
            </IconButton>
          </Box>
        )}
      </Box>
      {!!feedbacks.length && (
        <Collapse in={isCriteriaShown}>
          <Box className="collapseContainer">
            {(user.roleType==="Interviewer" && skillsEvaluations.length!==0) &&
              (!feedback.evaluations.length ? 
                skillsEvaluations.map((skill) => (
                <StarRating
                  key={skill.skillId}
                  title={skill.skill.name}
                  grade={skill.value}
                  editMode={editMode}
                  callbackFunction={handleAddEvaluations}
                />))
                :
                feedback.evaluations.map((skill) => (
                <StarRating
                  key={skill.skillId}
                  title={skill.skill.name}
                  grade={skill.value}
                  editMode={editMode}
                  callbackFunction={handleChangeEvaluations}
                />
              )))
            }
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
