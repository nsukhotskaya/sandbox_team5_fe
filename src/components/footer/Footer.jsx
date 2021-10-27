import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { ThemeProvider } from '@emotion/react';
import assets from '../../assets';

import { useMediaBetween } from '../utils';
import { getFieldLabel, theme } from '../../utils';

const Footer = () => {
  const { footerLogo } = assets;
  const phabletScreen = useMediaBetween('xs', 'md');
  return (
    <ThemeProvider theme={theme}>
      <Box
        width="auto"
        flexGrow="1"
        padding="10px"
        transition="margin 195ms cubic-bezier(0.4, 0, 0.6, 1) 0ms"
        backgroundColor={theme.palette.secondary.main}
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
          <Typography color="secondary.dark" component="p">
            {getFieldLabel('footer.title')}
          </Typography>
        </Box>
      </Box>
    </ThemeProvider>
  );
};
export default Footer;
