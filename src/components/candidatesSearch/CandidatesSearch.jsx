import React from 'react';
import { useDispatch } from 'react-redux';
import { Input } from '@mui/material';
import { fetchCandidateSearch } from '../../store/commands';
import { getFieldLabel } from '../../utils';

const CandidatesSearch = ({ id }) => {
  const dispatch = useDispatch();
  const candidateSearch = (event) => {
    const { value } = event.target;
    dispatch(
      fetchCandidateSearch({
        skip: 0,
        take: 50,
        searchText: `${value}`,
        sortBy: 'string',
        isDesc: true,
        internshipId: id,
      }),
    );
  };

  return (
    <Input
      placeholder={getFieldLabel('common.search')}
      onChange={candidateSearch}
    />
  );
};
export default CandidatesSearch;
