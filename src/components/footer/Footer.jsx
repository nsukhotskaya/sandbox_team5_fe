import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import assets from '../../assets';
import MessageData from '../../utils/messages.json';

const { footerLogo } = assets;

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  render() {
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
          justifyContent="space-between"
          flexWrap="wrap"
          alignItems="center"
          mr="10%"
          ml="10%"
        >
          <Link href="https://exadel.com/" underline="none">
            <img src={footerLogo} alt="Exadel" />
          </Link>
          <Typography color="#929292" component="p">
            {/* © 2021 [Team5] Exadel Internship JS&.NET&BA */}
            {MessageData.footerMsg}
          </Typography>
        </Box>
      </Box>
    );
  }
}

export default Footer;
