import React from 'react';
import {
  Typography, Card, Button, TextField, Stack,
} from '@mui/material';
import './Login.sass';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Card className="loginCard">
        <Typography m="15px" variant="h3" textAlign="center">Log in</Typography>
        <Stack m="20px auto" width="350px" height="200px" spacing={2} direction="column">
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
          <Button variant="contained">Log In</Button>
        </Stack>
      </Card>
    );
  }
}

export default Login;
