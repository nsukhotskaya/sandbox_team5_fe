import React from 'react';
import { Box } from '@mui/material';
import { AddProgram } from '../addProgram';
import './SidePopUp.sass';

const SidePopUp = ({ active, setActive }) => {
  const closeModal = () => {
    setActive(false);
  };

  return (
    <Box
      className={active ? 'modal active' : 'modal'}
      onClick={closeModal}
    >
      <Box
        className={active ? 'modalContent active' : 'modalContent'}
        onClick={(event) => event.stopPropagation()}
        backgroundColor="background.paper"
      >
        <AddProgram closeModal={closeModal} />
      </Box>
    </Box>
  );
};
export default SidePopUp;
