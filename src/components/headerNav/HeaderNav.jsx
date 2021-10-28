import * as React from 'react';
import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import SettingsIcon from '@mui/icons-material/Settings';
import LoginIcon from '@mui/icons-material/Login';
import { Box, IconButton, Avatar } from '@mui/material';
import './HeaderNav.sass';
import { connect } from 'react-redux';
import { userLogOut } from '../../store/actions';

// eslint-disable-next-line react/prefer-stateless-function
class HeaderNav extends React.Component {
  render() {
    const { LogOut } = this.props;
    return (
      <Box height="60px" width="300px">
        <Box className="headerNav">
          <IconButton>
            <ChatBubbleOutlineIcon />
          </IconButton>

          <IconButton>
            <WarningAmberIcon />
          </IconButton>

          <IconButton onClick={LogOut}>
            <LoginIcon />
          </IconButton>

          <IconButton>
            <SettingsIcon />
          </IconButton>

          <IconButton>
            <Avatar alt="Ivan Ivanov" />
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
