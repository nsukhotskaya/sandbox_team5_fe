import React from "react";
import { Button, ButtonGroup } from '@mui/material';

class HeaderMenu extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <ButtonGroup variant="text" aria-label="text button group" >
        <Button>Internships</Button>
        <Button>My Candidates</Button>
        <Button>Letter templates</Button>
      </ButtonGroup>
    )
  }
}

export default HeaderMenu;
