import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchCandidate } from '../../store/commands';
import { CandidateInfo } from '../../components';

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = useSelector((state) => state.candidate.candidate);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCandidate(id));
  }, []);

  return (
    <Box display="flex" height="100%" padding="1% 1% 0 1%">
      <Box
        borderColor="primary.main"
        width="50%"
        height="100%"
        padding="1%"
        sx={{ border: 1 }}
        overflow="auto"
      >
        <Box
          height="100%"
          padding="1%"
          boxSizing="border-box"
          display="flex"
          flexDirection="column"
          backgroundColor="background.paper"
        >
          <CandidateInfo candidateInfo={candidate} />
        </Box>
      </Box>
    </Box>
  );
};

export default CandidateProfile;
