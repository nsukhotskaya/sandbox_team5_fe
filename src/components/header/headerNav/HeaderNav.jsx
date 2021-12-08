import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
import {
  Box,
  Avatar,
  Paper,
  MenuItem,
  Menu,
  Typography,
  Divider,
} from '@mui/material';
import './HeaderNav.sass';
import { deleteUserToken } from '../../../store/commands';
import { getFieldLabel } from '../../../utils';
import { useMediaDown } from '../../utils';
import { Confirm } from '../../confirm';
import { history } from '../../../store/store';

function HeaderNav() {
  const [openConfirm, setOpenConfirm] = useState(false);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const smallScreen = useMediaDown('sm');
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);

  const handleShowMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => {
    setAnchorEl(null);
  };

  const handleLogoutItemClick = () => {
    setOpenConfirm(true);
    handleCloseMenu();
  };

  const handleProfileItemClick = () => {
    history.push('/profile');
    handleCloseMenu();
  };

  const confirmLogOut = (value) => {
    if (value) {
      dispatch(deleteUserToken());
    }
    setOpenConfirm(false);
  };

  return (
    <Box position="relative">
      {openConfirm && (
        <Confirm
          confirmTitle={getFieldLabel('logout.confirm.message')}
          rejectButtonLabel={getFieldLabel('common.no')}
          acceptButtonLabel={getFieldLabel('common.yes')}
          callback={confirmLogOut}
        />
      )}
      <Box
        className="headerNav"
        mr={smallScreen ? '10px' : '24px'}
        onClick={handleShowMenu}
      >
        <Avatar alt={userInfo.userName} className="headerNavAvatar" />
      </Box>
      <Paper>
        <Menu anchorEl={anchorEl} open={!!anchorEl} onClose={handleCloseMenu}>
          <Typography variant="h6" className="dropDownTitle">
            {userInfo.userName}
          </Typography>
          <Divider component="li" />
          <Box className="menuItem">
            <MenuItem onClick={handleProfileItemClick}>
              <Typography>
                {getFieldLabel('header.dropdown.label.profile')}
              </Typography>
            </MenuItem>
          </Box>
          <Box className="menuItem">
            <MenuItem onClick={handleLogoutItemClick}>
              <Typography paddingRight="8px">
                {getFieldLabel('header.dropdown.label.logout')}
              </Typography>
              <LoginIcon color="action" fontSize="small" />
            </MenuItem>
          </Box>
        </Menu>
      </Paper>
    </Box>
  );
}

export default HeaderNav;
