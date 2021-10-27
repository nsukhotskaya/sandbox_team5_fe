import React from "react";
import { Button, ButtonGroup } from '@mui/material';
import { getFieldLabel } from '../../utils';

class HeaderMenu extends React.Component{
  constructor(props){
    super(props);
    this.state={};
  }

  render(){
    return(
      <ButtonGroup variant="text" aria-label="text button group" >
        <Button>{getFieldLabel('header.menu.button.internships')}</Button>
        <Button>{getFieldLabel('header.menu.button.candidates')}</Button>
        <Button>{getFieldLabel('header.menu.button.letters')}</Button>
      </ButtonGroup>
    )
  }
}

export default HeaderMenu;