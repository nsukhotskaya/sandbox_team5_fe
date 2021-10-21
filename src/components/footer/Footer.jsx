import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import { footerLogo } from '../../assets';
import './Footer.sass';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  render() {
    return (
      <Box className="box-one">
        <Box className="box-two">
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
