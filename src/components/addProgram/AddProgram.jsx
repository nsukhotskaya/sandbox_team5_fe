import React from 'react';
import {
  Box, TextField, Stack, Button,
} from '@mui/material';
import { CardTitle } from '../cardTitle';
import { getFieldLabel } from '../../utils';
import messages from '../../utils/messages.json';
import './AddProgram.sass';

const addProgramFields = Object.keys(messages).filter((field) => field.includes('addprogram.field'));

const AddProgram = ({ closeModal }) => (
  <>
    <Box className="container">
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
    </Box>
    <Box className="buttonWrapper">
      <Button variant="contained" disabled>
        {getFieldLabel('addprogram.button.add')}
      </Button>
      <Button variant="outlined" onClick={closeModal}>
        {getFieldLabel('addprogram.button.cancel')}
      </Button>
    </Box>
  </>
);

export default AddProgram;
