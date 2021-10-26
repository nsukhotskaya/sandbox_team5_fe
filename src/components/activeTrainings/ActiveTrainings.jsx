import { Box, List, ListItem, ListItemText, ListItemButton } from "@mui/material";
import React from "react";

class ActiveTrainings extends React.Component{
  constructor(props) {
    super(props);
    this.state = {};
  }
  
  render(){
    return(
      <Box>
        <List>
          <ListItemButton>
          <ListItem>
            <ListItemText primary ="JS and .Net Training" />
          </ListItem>
          </ListItemButton>
          <ListItemButton>
          <ListItem>
            <ListItemText primary =".NET Automation QA Training" />
          </ListItem>
          </ListItemButton>
        </List>
      </Box>
    );
  }
}

export default ActiveTrainings;
