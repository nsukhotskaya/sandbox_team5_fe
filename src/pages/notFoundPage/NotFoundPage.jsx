import React from 'react';
import { Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { getFieldLabel } from '../../utils';
import './NotFoundPage.sass'

const NotFoundPage = () => (
  <Box className="notFoundPageWrapper">
    <Box textAlign="center">
      <Typography variant="h1" >{getFieldLabel('notFoundPage.label.oops')}</Typography>
      <Typography variant="h5">{getFieldLabel('notFoundPage.label.description')}</Typography>
      <Box margin="40px">
        <Link to="/profile" className="homeLink">
          {getFieldLabel('notFoundPage.link.home')}
        </Link>
      </Box>
    </Box>
  </Box>
);

export default NotFoundPage;
