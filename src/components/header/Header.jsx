import * as React from 'react';
import { AppBar, Box, Toolbar, Button, IconButton } from '@mui/material';
import {
  ChatBubbleOutlineRoundedIcon,
  NotificationsNoneRoundedIcon,
  SettingsRoundedIcon,
} from '@mui/icons-material';
// import ChatBubbleOutlineIcon from '@mui/icons-material/ChatBubbleOutline';
// import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
// import SettingsIcon from '@mui/icons-material/Settings';

export default function ButtonAppBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar style={{ background: '#F2F2F2' }} position="static" elevation={0}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <IconButton
            size="large"
            edge="end"
            style={{ color: 'black' }}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <ChatBubbleOutlineRoundedIcon />
          </IconButton>
          <IconButton
            style={{ color: 'black' }}
            size="large"
            edge="end"
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <NotificationsNoneRoundedIcon />
          </IconButton>
          <IconButton
            size="large"
            edge="end"
            style={{ color: 'black' }}
            aria-label="menu"
            sx={{ mr: 2 }}
          >
            <SettingsRoundedIcon />
          </IconButton>
          <Button style={{ color: 'black' }}>Login</Button>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
