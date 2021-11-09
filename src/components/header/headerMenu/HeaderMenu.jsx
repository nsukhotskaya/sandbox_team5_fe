import React from 'react';
import { Button, ButtonGroup } from '@mui/material';
import { getFieldLabel } from '../../../utils';

function HeaderMenu() {
  return (
    <ButtonGroup variant="text" aria-label="text button group" color="primary">
      <Button href="/internships">
        {getFieldLabel('header.menu.button.internships')}
      </Button>
      <Button href="/profile">
        {getFieldLabel('header.menu.button.profile')}
      </Button>
      <Button href="/candidates">
        {getFieldLabel('header.menu.button.candidates')}
      </Button>
    </ButtonGroup>
  );
}

export default HeaderMenu;
