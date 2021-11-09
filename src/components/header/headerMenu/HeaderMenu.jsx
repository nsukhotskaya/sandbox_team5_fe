import React from 'react';
import { Button } from '@mui/material';
import { getFieldLabel } from '../../../utils';

function HeaderMenu() {
  return (

    <Button href="/internships">
      {getFieldLabel('header.menu.button.internships')}
    </Button>

  );
}

export default HeaderMenu;
