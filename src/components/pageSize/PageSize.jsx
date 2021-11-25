import React from 'react';
import { MenuItem, Box, InputLabel, FormControl, Select } from '@mui/material';
import { valueMenuItem } from '../../constants';
import { getFieldLabel } from '../../utils';

const PageSize = ({ gridApi }) => {
  const createMenuItem = valueMenuItem.map((item) => (
    <MenuItem value={item} key={item}>
      {item}
    </MenuItem>
  ));

  const onPageSizeChanged = (newPageSize) => {
    const { value } = newPageSize.target;
    gridApi.paginationSetPageSize(Number(value));
  };

  return (
    <Box width="80px">
      <FormControl fullWidth size="small">
        <InputLabel>{getFieldLabel('candidates.form.inputLabel')}</InputLabel>
        <Select
          defaultValue="20"
          label={getFieldLabel('candidates.form.inputLabel')}
          onChange={onPageSizeChanged}
        >
          {createMenuItem}
        </Select>
      </FormControl>
    </Box>
  );
};

export default PageSize;
