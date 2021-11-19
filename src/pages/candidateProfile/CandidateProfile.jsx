import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchCandidate } from '../../store/commands';
import { CandidateInfo, CandidateFeedbacks } from '../../components';
import './CandidateProfile.sass';

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = useSelector((state) => state.candidate.candidate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandidate(id));
  }, []);

  return (
    <Box
      borderColor="primary.main"
      backgroundColor="background.paper"
      className="candidateProfileWrapper"
    >
      <Box className="candidateProfileCardWrapper" border="1px solid #e0e0e0">
        <CandidateInfo candidateInfo={candidate} />
      </Box>
      <Box className="candidateProfileCardWrapper">
        <CandidateFeedbacks candidateInfo={candidate} />
      </Box>
    </Box>
  );
};

export default CandidateProfile;
