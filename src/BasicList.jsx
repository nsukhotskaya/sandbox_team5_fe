import * as React from 'react';
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import HoverRating from './HoverRating';

export default function BasicList() {
    return (
    <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
        
        <nav aria-label="secondary mailbox folders">
            <List>
            <ListItem disablePadding>
                <ListItemButton>
                <ListItemText primary="HR review" />
                </ListItemButton>
                <ListItemButton>
                <HoverRating></HoverRating>
                </ListItemButton>
            </ListItem>
            <ListItem disablePadding>
                <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Technical skills" />
            </ListItemButton>
            <ListItemButton>
            <HoverRating></HoverRating>
            </ListItemButton>
            </ListItem>
            </List>
        </nav>
    </Box>
);
}