import React from 'react';
import { Link } from 'react-router-dom';
import { Button, ButtonGroup } from '@mui/material';
import { getFieldLabel } from '../../../utils';

function HeaderMenu() {
  return (
    <ButtonGroup variant="text" aria-label="text button group" color="primary">
      <Button>
        <Link to="/internships">
          {getFieldLabel('header.menu.button.internships')}
        </Link>
      </Button>
      <Button>
        <Link to="/candidates">
          {getFieldLabel('header.menu.button.candidates')}
        </Link>
      </Button>
    </ButtonGroup>
  );
}

export default HeaderMenu;
