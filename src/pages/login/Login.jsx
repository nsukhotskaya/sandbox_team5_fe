import React from 'react';
import { Typography, Card, Button, TextField, Stack, Box } from '@mui/material';
import './Login.sass';
import { Footer } from '../../components';
import { MessageData } from '../../utils';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box className="loginContainer">
        <Box className="loginCardWrapper">
          <Card variant="outlined" className="loginCard">
            <Typography
              m="30px"
              variant="h5"
              color="#1976d2"
              textAlign="center"
            >
              {MessageData.loginMsg}
            </Typography>
            <Stack m="20px auto" width="250px" spacing={2} direction="column">
              <TextField id="outlinedBasic" label="E-mail" size="small" />
              <TextField
                id="outlinedPasswordInput"
                label="Password"
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
  }
}

export default Login;
