import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import LoginIcon from '@mui/icons-material/Login';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  Collapse,
  Avatar,
  Paper,
  MenuItem,
  MenuList,
  Typography,
} from '@mui/material';
import './HeaderNav.sass';
import { deleteUserToken } from '../../../store/commands';
import { getFieldLabel } from '../../../utils';
import { useMediaDown } from '../../utils';

function HeaderNav() {
  const smallScreen = useMediaDown('sm');
  const dispatch = useDispatch();
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [isCriteriaShown, setIsCriteriaShown] = React.useState(false);

  const handleShowButton = () => {
    setIsCriteriaShown(!isCriteriaShown);
  };

  const logOut = () => {
    dispatch(deleteUserToken());
  };

  return (
    <Box position="relative">
      <Box
        className="headerNav"
        mr={smallScreen ? '10px' : '60px'}
        onClick={handleShowButton}
      >
        <Avatar alt="Ivan Ivanov" className="headerNavAvatar" />
        {!smallScreen && (
          <>
            {isCriteriaShown ? (
              <ExpandLessIcon color="action" />
            ) : (
              <ExpandMoreIcon color="action" />
            )}
          </>
        )}
      </Box>
      <Collapse in={isCriteriaShown}>
        <Box className="dropDownContainer">
          <Paper>
            <MenuList>
              <Typography variant="h6" className="dropDownTitle">
                {userInfo.userName}
              </Typography>
              <Link to="/profile" className="dropDownLink">
                <MenuItem>
                  {getFieldLabel('header.dropdown.label.myprofile')}
                </MenuItem>
              </Link>
              <MenuItem onClick={logOut}>
                {getFieldLabel('header.dropdown.label.logout')}
                <LoginIcon color="action" />
              </MenuItem>
            </MenuList>
          </Paper>
        </Box>
      </Collapse>
    </Box>
  );
}

export default HeaderNav;
