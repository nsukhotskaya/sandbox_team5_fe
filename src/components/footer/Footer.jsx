import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import assets from '../../assets';
import { useMediaBetween } from '../utils';
import { getFieldLabel } from '../../utils';

const Footer = () => {
  const { footerLogo } = assets;
  const phabletScreen = useMediaBetween('xs', 'md');
  return (
    <Box
      width="auto"
      flexGrow="1"
      padding="10px"
      transition="margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
      backgroundColor="#f9f9f9"
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
          <img src={footerLogo} alt={getFieldLabel('footer.sign')} />
        </Link>
        <Typography color="#929292929292929292" component="p">
          {getFieldLabel('footer.title')}
        </Typography>
      </Box>
    </Box>
  );
};
export default Footer;
