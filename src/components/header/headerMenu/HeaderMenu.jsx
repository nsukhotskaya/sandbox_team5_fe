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
      {userInfo.roleType !== 'Interviewer' && (
        <Link
          to="/internships"
          className={
            path === '/internships'
              ? 'headerMenuLinkInternships activeLink'
              : 'headerMenuLinkInternships'
          }
        >
          {getFieldLabel('header.menu.link.internships')}
        </Link>
      )}
      <Link
        to="/profile"
        className={
          path === '/profile'
            ? 'headerMenuLinkProfile activeLink'
            : 'headerMenuLinkProfile'
        }
      >
        {getFieldLabel('header.menu.link.profile')}
      </Link>
    </Box>
  );
}

export default HeaderMenu;
