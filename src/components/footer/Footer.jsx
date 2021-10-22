import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { footerLogo } from '../../assets';
import { useMediaBetween } from '../utils';

const Footer = () => {
  const phabletScreen = useMediaBetween('xs', 'md');
  return (
    <Box
      width="auto"
      flexGrow="1"
      padding="10px"
      transition="margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
      backgroundColor="#f2f2f2"
    >
      <Box
        height="100%"
        display="flex"
        justifyContent={phabletScreen ? 'center' : 'space-between'}
        alignItems="center"
        flexWrap="wrap"
        m={phabletScreen ? '0.5% 0 0 0' : '0 10% 0 10%'}
        flexDirection={phabletScreen ? 'column' : 'null'}
      >
        <Link href="https://exadel.com/" underline="none">
          <img src={footerLogo} alt="Exadel" />
        </Link>
        <Typography color="#929292" component="p">
          © 2021 [Team5] Exadel Internship JS&.NET
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
