import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box,
} from '@mui/material';
import { getFieldLabel } from '../../../utils';
import './HeaderMenu.sass';

function HeaderMenu() {
  return (
    // <ButtonGroup variant="text" aria-label="text button group" color="primary">
    //   <Button href="/internships">
    //     {getFieldLabel('header.menu.button.internships')}
    //   </Button>
    //   <Button href="/profile">
    //     {getFieldLabel('header.menu.button.profile')}
    //   </Button>
    // </ButtonGroup>
    <Box>
      <Link to="/internships" className="hederMenuLinkInternships">
        {getFieldLabel('header.menu.link.internships')}
      </Link>
      <Link to="/profile" className="hederMenuLinkProfile">
        {getFieldLabel('header.menu.link.profile')}
      </Link>
    </Box>

  );
}

export default HeaderMenu;
