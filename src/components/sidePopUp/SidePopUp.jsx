import React from 'react';
import { Box } from '@mui/material';
import './SidePopUp.sass';

const SidePopUp = ({ active, setActive, content }) => {
  console.log(content());
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
        {content()}
      </Box>
    </Box>
  );
};
export default SidePopUp;
