import React from 'react';
import LoginIcon from '@mui/icons-material/Login';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { Box, IconButton, Collapse, Avatar, Typography, Button } from '@mui/material';
import './HeaderNav.sass';
import { connect, useSelector } from 'react-redux';
import { deleteUserToken } from '../../../store/commands';

function HeaderNav(props) {
  const userInfo = useSelector((state) => state.userInfo.userInfo);
  const [isCriteriaShown, setIsCriteriaShown] = React.useState(false);
  const { deleteUserToken: logOut } = props;

  const handleShowButton = () => {
    setIsCriteriaShown(!isCriteriaShown);
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
          <Typography variant="h6" color="black" textAlign="center">{userInfo.userName}</Typography>
          <Button onClick={logOut} >
            <Typography variant="subtitle2" color="gray">LogOut</Typography>
            <LoginIcon color="action" />
          </Button>
        </Box>
      </Collapse>
    </Box>
  );
}

const mapDispatchToProps = (dispatch) => ({
  deleteUserToken: () => dispatch(deleteUserToken()),
});

export default connect(null, mapDispatchToProps)(HeaderNav);
