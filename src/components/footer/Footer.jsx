import React from 'react';
import { Box, Link, Typography } from '@mui/material';
import FooterLogo from '../../assets/index';

// eslint-disable-next-line react/prefer-stateless-function
class Footer extends React.Component {
  render() {
    return (
      <Box sx={{
        height: 55, width: '100%', position: 'absolute', bottom: 0, left: 0, background: '#F2F2F2', boxShadow: '0px 4.85333px 9.70667px rgba(44, 101, 77, 0.08)',
      }}
      >
        <Box sx={{
          height: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          flexWrap: 'wrap',
          alignItems: 'center',
          marginRight: '10%',
          marginLeft: '10%',
        }}
        >
          <Link
            href="https://exadel.com/"
            underline="none"
          >
            <img
              src={FooterLogo}
              alt="Exadel"
            />
          </Link>
          <Typography color="#929292" component="p">© 2021 [Team5] Exadel Internship JS&.NET&BA</Typography>
        </Box>
      </Box>
    );
  }
}

export default Footer;
