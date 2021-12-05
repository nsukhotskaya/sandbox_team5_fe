import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { Box } from '@mui/material';
import { getFieldLabel } from '../../../utils';
import './HeaderMenu.sass';

function HeaderMenu() {
  const path = useLocation().pathname;
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  return (
    <Box>
      <Link
        to="/profile"
        className={
          path === '/profile' ? 'headerMenuLink profileHeaderLink activeLink' : 'headerMenuLink profileHeaderLink'
        }
      >
        {getFieldLabel('header.menu.link.profile')}
      </Link>
      {userInfo.roleType !== 'Interviewer' && (
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
      )}
    </Box>
  );
}

export default HeaderMenu;
