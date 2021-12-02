import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchCandidate } from '../../store/commands';
import { CandidateInfo, CandidateFeedbacks } from '../../components';
import './CandidateProfile.sass';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = useSelector((state) => state.candidate.candidate);
  const dispatch = useDispatch();

  const isLoading = useSelector(loadingSelector(['GET_CANDIDATE']));
  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    dispatch(fetchCandidate(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Box
          borderColor="primary.main"
          backgroundColor="background.paper"
          className="candidateProfileWrapper"
        >
          <Box className="candidateInfoCardWrapper" boxShadow="5">
            <CandidateInfo candidateInfo={candidate} />
          </Box>
          <Box className="candidateProfileCardWrapper">
            <CandidateFeedbacks candidateInfo={candidate} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CandidateProfile;
