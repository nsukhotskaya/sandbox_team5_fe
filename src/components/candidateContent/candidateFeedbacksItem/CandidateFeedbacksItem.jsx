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
        <Box className="feedbackTitle" display="flex" flexDirection="row" width="400px" alignItems="center">
          <Typography variant="h5" overflow="hidden" textOverflow="ellipsis" noWrap width="50%" >
            {role.name}
          </Typography>
          <Typography variant="subtitle2" width="50%" overflow="hidden" textAlign="right" textOverflow="ellipsis" color="primary.main" noWrap>
            {role.role}
          </Typography>
        </Box>
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

export default CandidateFeedbacksItem;
