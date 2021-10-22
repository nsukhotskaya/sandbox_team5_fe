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

const TabsMapping = ({ text }) => (
  <ListItem button key={text}>
    <ListItemIcon>
      <MoveToInbox />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

const Sidebar = (props) => {
  const { open, openSidebar, sidebarWidth } = props;
  const tabs1 = ['Internship programs'];
  const tabs2 = [
    ['Selection', ''],
    'Interviewing',
    'Admitted candidates',
    'Team distribution',
  ];
  return (
    <div>
      <Drawer
        flexShrink="0"
        variant="persistent"
        anchor="left"
        open={open}
        sx={{
          width: sidebarWidth,
          '& .MuiDrawer-paper': {
            width: sidebarWidth,
            boxSizing: 'border-box',
            backgroundColor: '#1B5B7E',
            color: '#ffffff',
          },
        }}
      >
        <SidebarHeader open={open} openSidebar={openSidebar} />
        <Divider />
        <List>
          {tabs1.map((text) => (
            <TabsMapping text={text} />
          ))}
        </List>
        <Divider />
        <List>
          {tabs2.map((text) => (
            <TabsMapping text={text} />
          ))}
        </List>
      </Drawer>
    </div>
  );
};

export default Sidebar;
