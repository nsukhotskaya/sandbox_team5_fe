import * as React from 'react';
import { styled, useTheme } from '@mui/material/styles';
import {
  Box,
  Typography,
  Drawer,
  CssBaseline,
  Toolbar,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Divider,
  IconButton,
  AppBar,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { Footer } from '../../components';
import './Employee.sass';
import { headerLogo } from '../../assets';

const sidebarWidth = 300;

const Main = styled('main', { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    padding: theme.spacing(3),
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: `-${sidebarWidth}px`,
    width: `100vw`,
    ...(open && {
      transition: theme.transitions.create(['margin', 'width'], {
        easing: theme.transitions.easing.easeOut,
        duration: theme.transitions.duration.enteringScreen,
      }),
      width: `calc(100vw - ${sidebarWidth}px)`,
      marginLeft: 0,
    }),
  }),
);

const HeaderMain = styled(AppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  transition: theme.transitions.create(['margin', 'width'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${sidebarWidth}px)`,
    marginLeft: `${sidebarWidth}px`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const SidebarHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  backgroundColor: '#5898BB',
  color: '#8FC1DD',
  flexDirection: 'row',
  justifyContent: 'space-between',
}));

export default function Employee() {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  return (
    <Box sx={{ display: 'flex', height: '100vh' }}>
      <CssBaseline />
      <HeaderMain position="fixed" open={open} id="contentHeader">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={{ marginRight: 2, ...(open && { display: 'none' }) }}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </HeaderMain>
      <Drawer
        sx={{
          width: sidebarWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1B5B7E',
            color: '#ffffff',
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
      >
        <SidebarHeader>
          <img src={headerLogo} alt="exadel logo sidebar" />
          <Typography>HR Specialist</Typography>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? (
              <ChevronLeftIcon />
            ) : (
              <ChevronRightIcon />
            )}
          </IconButton>
        </SidebarHeader>
        <Divider />
        <List>
          {['Internship programs'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {[
            ['Selection', ''],
            'Interviewing',
            'Admitted candidates',
            'Team distribution',
          ].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <InboxIcon />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <Box id="rightContainer">
        <Main open={open} id="cardWrapper">
          <SidebarHeader />
          <Box id="card">
            <div className="content">This is content</div>
            <span className="pageGap" />
            <Footer />
          </Box>
        </Main>
      </Box>
    </Box>
  );
}
