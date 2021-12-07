import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Tooltip } from '@mui/material';
import './LinkFormatter.sass';
import { getFieldLabel } from '../../utils';

const LinkFormatter = ({ value, data }) => {
  const { id } = data;
  const history = useHistory();
  const handleClick = () => {
    history.push(`/candidate/${id}`);
  };

  return (
    <Tooltip
      title={getFieldLabel('table.candidates.tooltip').replace(
        /%(\w*)%/,
        `${value}`,
      )}
    >
      <Box className="linkFormatterWrapper" onClick={handleClick}>
        {value}
      </Box>
    </Tooltip>
  );
};

export default LinkFormatter;
