import React, { Component } from 'react';
import { Box, TextField, Button } from '@mui/material';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <Box
        component="form"
        sx={{
          border: 3,
          borderColor: '#03a9f4',
          display: 'flex',
          flexDirection: 'column',
          width: 540,
          height: 340,
          alignItems: 'center',
        }}
      >
        <h1>Log in</h1>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            width: 325,
            height: 210,
            alignItems: 'center',
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          noValidate
          autoComplete="off"
        >
          <TextField id="outlined-basic" label="E-mail" variant="outlined" />
          <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" />
          <Button variant="contained">Log In</Button>
        </Box>
      </Box>
    );
  }
}

export default Login;
