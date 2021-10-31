import * as React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';
import { connect } from 'react-redux';
import { userLogOut } from '../../../store/actions';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderNav extends React.Component {
  render() {
    const { LogOut } = this.props;
    return (
      <Box height="60px" width="120px">
        <Box className="headerNav">
          <IconButton>
            <Avatar alt="Ivan Ivanov" />
          </IconButton>
          <IconButton onClick={LogOut}>
            <LoginIcon />
          </IconButton>
        </Box>
      </Box>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  LogOut: () => dispatch(userLogOut()),
});

export default connect(null, mapDispatchToProps)(HeaderNav);
