import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import LoginIcon from '@mui/icons-material/Login';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import {
  Box,
  IconButton,
  Collapse,
  Avatar,
  Typography,
  Button,
} from '@mui/material';
import './HeaderNav.sass';
import { deleteUserToken } from '../../../store/commands';
import { getFieldLabel } from '../../../utils';

function HeaderNav() {
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
      <Box className="headerNav">
        <IconButton>
          <Avatar alt="Ivan Ivanov" />
        </IconButton>
        <IconButton onClick={handleShowButton}>
          {isCriteriaShown ? <ExpandLessIcon /> : <ExpandMoreIcon />}
        </IconButton>
      </Box>
      <Collapse in={isCriteriaShown}>
        <Box className="collapseContainer">
          <Typography variant="h6" color="black" textAlign="center">
            {userInfo.userName}
          </Typography>
          <Button onClick={logOut}>
            <Typography variant="subtitle2" color="gray">
              {getFieldLabel('header.button.logout')}
            </Typography>
            <LoginIcon color="action" />
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

export default HeaderNav;
