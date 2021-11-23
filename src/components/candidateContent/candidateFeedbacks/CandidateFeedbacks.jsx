import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Box } from '@mui/material';
import { fetchSkillsByStackType } from '../../../store/commands';
import './CandidateFeedbacks.sass'
import { skills } from '../../../mocks/candidateFeedbacks.json';
import { CandidateFeedbacksItem } from '../index';

const CandidateFeedbacks = ({candidateInfo}) => {
  const skillsList = useSelector((state) => state.skills.skills);
  const dispatch = useDispatch();

  useEffect(() => {
    if (candidateInfo.stackType) {
      dispatch(fetchSkillsByStackType(candidateInfo.stackType));
    }
  }, [candidateInfo.stackType]);

  useEffect(() => {
    if ( skillsList ) {
      Object.values(skillsList).map((skill) => console.log(skill.name));
    };
  }, [skillsList]);

  return(
    <Box className="feedbacksContainer">
      { Object.values(skills).map((role) => <CandidateFeedbacksItem key={role.role} role={role}/>)}
    </Box>
  );
};

export default CandidateFeedbacks;
