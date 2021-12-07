import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';
import './LinkFormatter.sass';
import { getFieldLabel } from '../../utils';

const LinkFormatterInternships = ({ value, data }) => {
  const { id } = data;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/internshipPage/${id}`);
  };

  return (
    <Tooltip title={getFieldLabel('table.internships.tooltip')
    .replace(
      /%(\w*)%/,
      `${value}`,
    )}>
    <Box className="linkFormatterWrapper" onClick={handleClick}>
      {value}
    </Box>
    </Tooltip>
  );
};

export default LinkFormatterInternships;
