import React from 'react';
import {
  Box,
  TextField,
  Stack,
  Toolbar,
  Button,
} from '@mui/material';
import { CardTitle } from '../../components';
import { getFieldLabel } from '../../utils';
import messages from '../../utils/messages.json';

const addProgramFields = Object.keys(messages).filter((field) => field.includes('addprogram.field'));

const AddProgram = () => (
  <>
    <Box display="flex" flexDirection="column" padding="1%">
      <CardTitle width="100%" title={getFieldLabel('addprogram.title')} />
      <Stack spacing={2} direction="column">
        {addProgramFields.map((field) => (
          <TextField
            field={field}
            label={getFieldLabel(field)}
            key={field}
            size="small"
          />
        ))}
        {/* CTechnologi list  */}
        {/* Менторы  */}
        {/* Сотрудники  */}
      </Stack>
      <Toolbar
        aria-label="text button toolbar"
        color="primary"
        spacing={2}
      >
        <Button variant="outlined">{getFieldLabel('addprogram.button.reset')}</Button>
        <Button variant="outlined">{getFieldLabel('addprogram.button.add')}</Button>
      </Toolbar>
    </Box>
  </>
);

export default AddProgram;
