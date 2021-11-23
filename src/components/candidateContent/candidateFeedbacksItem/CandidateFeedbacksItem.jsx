import React from 'react';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, Typography, Rating, IconButton, Collapse, TextField, Button } from '@mui/material';
import './CandidateFeedbacksItem.sass'
import { StarRating } from '../index';

const CandidateFeedbacksItem = ({role}) => {
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
        <Box className="flexboxRow" width="400px">
          <Typography className="feedbackTitle" variant="h5">
            {role.name}
          </Typography>
          <Typography className="feedbackTitle roleTitle" variant="subtitle2" color="primary.main">
            {role.role}
          </Typography>
        </Box>
        <Box className="flexboxRow">
          <Rating value={role.generalImpression} readOnly/>
        </Box>
        <IconButton onClick={handleButton}>
          {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isCriteriaShown}>
        <Box className="collapseContainer" borderColor="background.default">
          {role.skillGrades.map((skill) => 
            <StarRating 
            key={skill.name} 
            title={skill.name} 
            grade={skill.grade} 
            editMode={editMode}/>
          )}
          <TextField
          sx={{margin: "0 20px 20px 20px"}}
          defaultValue={role.textReview}
          multiline
          minRows="3"
          label="Feedback"
          InputProps={{disabled: !editMode}}
          />
          <StarRating title="General Impression" grade={role.generalImpression} editMode={editMode}/>
          {editMode ? 
            <Button sx={{margin: "0 20px 20px 20px"}} variant="outlined" onClick={handleEditMode}>
              Save
            </Button>
            : 
            <Button sx={{margin: "0 20px 20px 20px"}} variant="outlined" onClick={handleEditMode}>
              Edit
            </Button>
          }
        </Box>
      </Collapse>
    </Box>
  )
};

export default CandidateFeedbacksItem;
