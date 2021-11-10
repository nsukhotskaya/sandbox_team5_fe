import React from 'react';
import { Box } from '@mui/material';
import './SidePopUp.sass';
// import { getFieldLabel } from '../../utils';
// const SidePopUp = ({ active, setActive }) => <Box>Hi</Box>;

const SidePopUp = ({ active, setActive }) => {
  console.log(active);
  return (
    <Box
      className={active ? 'modal active' : 'modal'}
      onClick={() => setActive(false)}
    >
      <Box
        className="modal__content"
        onClick={(e) => e.stopPropagation()}
        backgroundColor="background.paper"
      >
        <Box backgroundColor="red" width="10px" height="10px" />
      </Box>
    </Box>
  );
};
export default SidePopUp;
