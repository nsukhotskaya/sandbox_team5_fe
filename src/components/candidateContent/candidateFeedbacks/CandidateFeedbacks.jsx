import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, Rating, IconButton, Collapse, TextField, Button } from '@mui/material';
import { fetchSkillsByStackType } from '../../../store/commands';
import './CandidateFeedbacks.sass'
import { skills } from '../../../mocks/candidateFeedbacks.json';

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

const CandidateFeedback = ({role}) => {
  const [isCriteriaShown , setIsCriteriaShown] = React.useState(false);
  const [editMode, setEditMode] = React.useState(false);
  const handleButton = () => {
    setIsCriteriaShown(!isCriteriaShown)
  }
  const handleEditMode = () => {
    setEditMode(!editMode)
  }

  return (
    <Box className="feedbackItem">
      <Box className="titleSection">
        <Typography variant="h5" width="400px" overflow="hidden" textOverflow="ellipsis" noWrap>
          {role.name} {role.role}
        </Typography>
        <Box display="flex" flexDirection="row" alignItems="center">
          <Rating value={role.generalImpression} readOnly/>
        </Box>
        <IconButton onClick={handleButton}>{isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}</IconButton>
      </Box>
      <Collapse in={isCriteriaShown}>
        <Box border="1px solid" borderColor="background.default" display="flex" flexDirection="column">
          {role.skillGrades.map((skill) => 
            <StarRating 
            key={skill.name} 
            title={skill.name} 
            grade={skill.grade} 
            editMode={editMode}/>
          )}
          <TextField
          sx={{margin: '0 20px 20px 20px'}}
          defaultValue={role.textReview}
          multiline
          minRows="3"
          label="Feedback"
          InputProps={{disabled: !editMode}}
          />
          <StarRating 
            title="General Impression" 
            grade={role.generalImpression}
            editMode={editMode}
          />
          {editMode ? <Button sx={{margin: '0 20px 20px 20px'}} variant="outlined" onClick={handleEditMode}>Save</Button>
          : 
          <Button sx={{margin: '0 20px 20px 20px'}} variant="outlined" onClick={handleEditMode}>Edit</Button>
          }
        </Box>
      </Collapse>
    </Box>
  )
};

const CandidateFeedbacks = ({candidateInfo}) => {
  const skillsList = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    if(candidateInfo.stackType){dispatch(fetchSkillsByStackType(candidateInfo.stackType))};
  }, [candidateInfo.stackType]);

  useEffect(() => {
    if ( skillsList ) {
      Object.values(skillsList).map((skill) => console.log(skill.name));
    };
  }, [skillsList]);

  return(
    <Box className="feedbackContainer" paddingRight="20px">
      { Object.values(skills).map((role) => <CandidateFeedback key={role.role} role={role}/>)}
    </Box>
  )
};

export default CandidateFeedbacks;
