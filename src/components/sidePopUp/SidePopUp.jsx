import React from 'react';
import { Box } from '@mui/material';
import { AddProgram } from '..';
import './SidePopUp.sass';

const SidePopUp = ({
  active,
  setActive,
  initialData,
  title,
  internshipData,
  dispatchFunction,
  button,
}) => {
  const closeModal = () => {
    setActive(false);
  };
  return (
    <Box className={active ? 'modal active' : 'modal'} >
      <Box
        className={active ? 'modalContent active' : 'modalContent'}
        onClick={(event) => event.stopPropagation()}
        backgroundColor="background.paper"
      >
        <AddProgram
          internshipData={internshipData}
          initialData={initialData}
          title={title}
          dispatchFunction={dispatchFunction}
          button={button}
          closeModal={closeModal}
        />
      </Box>
    </Box>
  );
};
export default SidePopUp;
