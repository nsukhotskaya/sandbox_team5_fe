import React from 'react';
import MoveToInbox from '@mui/icons-material/MoveToInbox';
import {
  Drawer,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from '@mui/material';
import { SidebarHeader } from '../sidebarHeader';
// import { SidebarHeaderContent } from '../sidebarHeaderContent';

const Sidebar = (props) => {
  const { open, openSidebar, sidebarWidth } = props;
  return (
    <div>
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
        <SidebarHeader open={open} openSidebar={openSidebar} />
        <Divider />
        <List>
          {['Internship programs'].map((text) => (
            <ListItem button key={text}>
              <ListItemIcon>
                <MoveToInbox />
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
                <MoveToInbox />
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
