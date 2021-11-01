import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Button, ButtonGroup } from '@mui/material';
import { getFieldLabel } from '../../utils';

function HeaderMenu() {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();

  return (
    <ButtonGroup variant="text" aria-label="text button group">
      <Button color="primary">
        {getFieldLabel('header.menu.button.internships')}
      </Button>
      <Button color="secondary">
        {getFieldLabel('header.menu.button.candidates')}
      </Button>
      <Button color="secondary">
        {getFieldLabel('header.menu.button.letters')}
      </Button>
    </ButtonGroup>
  );
}
// }

export default HeaderMenu;
