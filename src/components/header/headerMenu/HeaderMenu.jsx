import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Box } from '@mui/material';
import { getFieldLabel } from '../../../utils';
import './HeaderMenu.sass';

function HeaderMenu() {
  const path = useLocation().pathname;

  return (
    <Box>
      <Link
        to="/profile"
        className={
          path === '/profile'
            ? 'headerMenuLink profileHeaderLink activeLink'
            : 'headerMenuLink profileHeaderLink'
        }
      >
        {getFieldLabel('header.menu.link.profile')}
      </Link>
      <Link
        to="/internships"
        className={
          path === '/internships'
            ? 'headerMenuLink activeLink'
            : 'headerMenuLink'
        }
      >
        {getFieldLabel('header.menu.link.internships')}
      </Link>
    </Box>
  );
}

export default HeaderMenu;
