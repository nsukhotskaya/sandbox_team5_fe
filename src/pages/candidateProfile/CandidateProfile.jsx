import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box } from '@mui/material';
import { fetchCandidate } from '../../store/commands';
import { CandidateInfo, CandidateUsersAndFeedbacks } from '../../components';
import './CandidateProfile.sass';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';
import { useMediaDown } from '../../components/utils';

const CandidateProfile = () => {
  const { id } = useParams();
  const candidate = useSelector((state) => state.candidate.candidate);
  const dispatch = useDispatch();
  const smallScreen = useMediaDown('sm');

  const isLoading = useSelector(loadingSelector(['GET_CANDIDATE']));

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
          className={
            smallScreen
              ? 'candidateProfileWrapper gridColumn smallScreenScroll'
              : 'candidateProfileWrapper'
          }
        >
          <Box className="candidateInfoCardWrapper" boxShadow="5">
            <CandidateInfo candidateInfo={candidate} />
          </Box>
          <Box className="candidateFeedbacksCardWrapper" boxShadow="5">
            <CandidateUsersAndFeedbacks candidateInfo={candidate} />
          </Box>
        </Box>
      )}
    </>
  );
};

export default CandidateProfile;
