import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { fetchSkillsByStackType, fetchFeedbacksByCandidateId } from '../../../store/commands';
import './CandidateFeedbacks.sass';
import { skills } from '../../../mocks/candidateFeedbacks.json';
import { CandidateFeedbacksItem, CreateFeedback } from '../index';

const CandidateFeedbacks = ({ candidateInfo }) => {
  const dispatch = useDispatch();
  const skillsList = useSelector((state) => state.skills.skills);
  const feedbacksList = useSelector((state) => state.feedbacks.feedbacks);

  useEffect(() => {
    if (!feedbacksList.length && candidateInfo.id) {
      dispatch(fetchFeedbacksByCandidateId(candidateInfo.id));
    }
  }, [feedbacksList]);

  useEffect(() => {
    if (!skillsList.length && candidateInfo.stackType) {
      dispatch(fetchSkillsByStackType(candidateInfo.stackType));
    }
  }, [skillsList]);

  const lineUpFeedback = (role, roleName, roleCriteria) => ({
    name: roleName,
    role,
    skillGrades: roleCriteria.map((criterion) => 
      ({
        name: criterion.name,
        grade: 0
      })),
    textReview: "" ,
    generalImpression: 0
  });

  return (
    <Box className="feedbacksContainer">
      {console.log(candidateInfo)}
      {!!candidateInfo.users && candidateInfo.users.map((user) => (
        <Box key={user.userName}>
          {!user.feedbacks.length ?
            <CreateFeedback role={user.roleType} name={user.userName} userId={user.id} englishLevelType={candidateInfo.englishLevelType} candidateId={candidateInfo.id}/>
            :
            user.feedbacks.map((feedback) => (
            <CandidateFeedbacksItem key={feedback.id} role={lineUpFeedback(user.roleType, user.userName, skills.hr.skillGrades)}/>
            ))
          }
        </Box>
      ))}
    </Box>
  );
};

export default CandidateFeedbacks;
