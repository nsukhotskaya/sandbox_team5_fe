import React from 'react';
import { Typography, Card, Button, TextField, Stack, Box } from '@mui/material';
import './Login.sass';
import { Footer } from '../../components';
import { useMediaDown } from '../../components/utils';
import { getFieldLabel } from '../../utils';

const Login = () => {
  const smallScreen = useMediaDown('sm');
  return (
    <Box className="loginContainer">
      <Box className="loginCardWrapper">
        <Card
          variant="outlined"
          className={smallScreen ? 'loginCardMobile' : 'loginCard'}
        >
          <Typography
            m={smallScreen ? '10px' : '30px'}
            variant="h5"
            color="#1976d2"
            textAlign="center"
          >
            {getFieldLabel('loginTitle')}
          </Typography>
          <Stack
            m={smallScreen ? '10px auto' : '20px auto'}
            width={smallScreen ? '195px' : '250px'}
            spacing={2}
            direction="column"
          >
            <TextField
              id="outlinedBasic"
              label={getFieldLabel('loginEmail')}
              size="small"
            />
            <TextField
              id="outlinedPasswordInput"
              label={getFieldLabel('loginPassword')}
              type="password"
              autoComplete="current-password"
              size="small"
            />
            <Button variant="contained">Log In</Button>
          </Stack>
        </Card>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
