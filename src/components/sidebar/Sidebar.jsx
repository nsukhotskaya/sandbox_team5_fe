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
  <ListItem button key={Date.now()}>
    <ListItemIcon>
      <MoveToInbox />
    </ListItemIcon>
    <ListItemText primary={text} />
  </ListItem>
);

class Sidebar extends React.PureComponent {
  render() {
    const tabs1 = ['Internship programs'];
    const tabs2 = [
      ['Selection', ''],
      'Interviewing',
      'Admitted candidates',
      'Team distribution',
    ];
    const { isOpen, openSidebar, sidebarWidth } = this.props;
    return (
      <div>
        <Drawer
          flexshrink="0"
          variant="persistent"
          anchor="left"
          open={isOpen}
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
          <SidebarHeader isOpen={isOpen} openSidebar={openSidebar} />
          <Divider />
          <List>
            {tabs1.map((text) => (
              <TabsMapping text={text} key={text} />
            ))}
          </List>
          <Divider />
          <List>
            {tabs2.map((text) => (
              <TabsMapping text={text} key={text} />
            ))}
          </List>
        </Drawer>
      </div>
    );
  }
}

export default Sidebar;
