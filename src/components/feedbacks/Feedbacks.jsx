import { Box, List, ListItem, ListItemButton, ListItemText, Rating } from "@mui/material";
import React from "react";

class Feedbacks extends React.Component{
  constructor(props) {
    super(props);
    this.state ={ starsRating: 2 }
    this.handleChange = this.handleChange.bind(this)
  }

handleChange = ( e, newValue) => {
  this.setState ({starsRating: newValue })
}

  render(){
    const { starsRating } = this.state;
    return(
      <Box>
        <List>
          <ListItem>
            <ListItemButton>
            <ListItemText primary ="Johnathan Smith" />
            </ListItemButton>
            <ListItemButton>
            <Rating
            name="simple-controlled"
            value={starsRating}
            onChange={this.handleChange}
            />
            </ListItemButton>
          </ListItem>
        </List>
      </Box>
    );
  }
}

export default Feedbacks;
