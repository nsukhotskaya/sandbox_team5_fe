import React from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { getFieldLabel } from '../../../utils';
import './HeaderMenu.sass';

function HeaderMenu() {
  return (
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
