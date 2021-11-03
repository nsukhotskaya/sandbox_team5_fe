import React from 'react';
import {
  Popover,
  Box,
  Button,
  Typography,
  TextField,
} from '@mui/material';
import { getFieldLabel } from '../../utils';


export const InternshipAddButton = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

  return (
    <Box>
        <Button variant="outlined" size="medium" aria-describedby={id} onClick={handleClick}>
            {getFieldLabel('internships.btn.add.program')}
          </Button>
    <Popover
        id={id}
        open={open}
        onClose={handleClose}
        anchorEl={anchorEl}
        anchorOrigin={{
            vertical: 'top',
            horizontal: 'right',
        }}
        >
        <Box width="300px" margin="20px">
            <Typography
            variant="h6"
            component="div"
            marginLeft="50px"
            fontSize="18px"
            color="primary"
            >
                Add new Internship Program
            </Typography>
            <Box sx={{m: 1}}>
            <TextField sx={{m: 1}} label="Name" color="primary" focused fullWidth/>
            <TextField sx={{m: 1}} label="Dates" color="primary" focused fullWidth/>
            <TextField sx={{m: 1}} label="Location" color="primary" focused fullWidth/>
            <TextField sx={{m: 1}} label="Language" color="primary" focused fullWidth/>
            </Box>
            <Button variant="outlined">Save</Button>
        </Box>
    </Popover>
    </Box>
  );
}

export default InternshipAddButton;