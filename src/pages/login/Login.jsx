import React from 'react';
import { Typography, Card, Button, TextField, Stack, Box } from '@mui/material';
import './Login.sass';
import { Footer } from '../../components';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box className="login-container">
        <Box className="login-card-wrapper">
          <Card variant="outlined" className="loginCard">
            <Typography
              m="30px"
              variant="h5"
              color="#1976d2"
              textAlign="center"
            >
              Log in to ...
            </Typography>
            <Stack m="20px auto" width="250px" spacing={2} direction="column">
              <TextField id="outlined-basic" label="E-mail" size="small" />
              <TextField
                id="outlined-password-input"
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
