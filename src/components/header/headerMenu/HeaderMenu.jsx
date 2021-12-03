import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { Box } from '@mui/material';
import { getFieldLabel } from '../../../utils';
import './HeaderMenu.sass';

function HeaderMenu() {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  return (
    <Box>
      {userInfo.roleType !== 'Interviewer' && (
        <Link to="/internships" className="hederMenuLinkInternships">
          {getFieldLabel('header.menu.link.internships')}
        </Link>
      )}
      <Link to="/profile" className="hederMenuLinkProfile">
        {getFieldLabel('header.menu.link.profile')}
      </Link>
    </Box>
  );
}

export default HeaderMenu;
