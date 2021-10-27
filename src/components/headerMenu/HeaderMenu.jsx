import React from 'react';
import { ThemeProvider } from '@emotion/react';
import { Button, ButtonGroup } from '@mui/material';
import { getFieldLabel, theme } from '../../utils';

class HeaderMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <ButtonGroup variant="text" aria-label="text button group">
          <Button color="secondary">
            {getFieldLabel('header.menu.button.internships')}
          </Button>
          <Button color="secondary">
            {getFieldLabel('header.menu.button.candidates')}
          </Button>
          <Button color="secondary">
            {getFieldLabel('header.menu.button.letters')}
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    );
  }
}

export default HeaderMenu;
