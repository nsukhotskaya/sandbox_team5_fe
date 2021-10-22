import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { footerLogo } from '../../assets';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  render() {
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
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
          marginRight="10%"
          marginLeft="10%"
        >
          <Link href="https://exadel.com/" underline="none">
            <img src={footerLogo} alt="Exadel" />
          </Link>
          <Typography color="#929292" component="p">
            © 2021 [Team5] Exadel Internship JS&.NET&BA
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Footer;
