import React from 'react';
import { Box, FormControl, Select, MenuItem, Typography } from '@mui/material';
import { getFieldLabel } from '../../utils';
import { valueMenuItem } from '../../constants';

const PaginationStatusBar = ({ api }) => {
  const createMenuItem = valueMenuItem.map((item) => (
    <MenuItem value={item} key={item}>
      {item}
    </MenuItem>
  ));

  const onPageSizeChanged = (newPageSize) => {
    const { value } = newPageSize.target;
 api.paginationSetPageSize(Number(value));
api.paginationGetPageSize(valueMenuItem);
  };

  return (
      <Box display="flex" alignItems="center">
      <Typography fontSize="13px" mr="5px">
          {getFieldLabel ("paginationStatusBar.select.show")}
        </Typography>
        <Box display="flex" alignItems="center" width="65px">
        <FormControl fullWidth raised className="paginationStatusBarFormControlWidth">
          <Select
          raised
            className="paginationStatusBarSelect"
            defaultValue="20"
            onChange={onPageSizeChanged}
          >
            {createMenuItem}
          </Select>
        </FormControl>
        </Box>
        <Typography fontSize="13px" ml="5px">
        {getFieldLabel ("paginationStatusBar.select.entries")}
        </Typography>
      </Box>
      
  );
};

export default PaginationStatusBar;

