import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import assets from '../../assets';
import { useMediaBetween } from '../utils';

const Footer = () => {
  const { footerLogo } = assets;
  const phabletScreen = useMediaBetween('xs', 'md');

  return (
    <Box
      height="55px"
      width="100%"
      position="absolute"
      bottom="0"
      left="0"
      bgcolor="#F2F2F2"
      boxShadow="0 5px 10px rgba(44, 101, 77, 0.08)"
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
