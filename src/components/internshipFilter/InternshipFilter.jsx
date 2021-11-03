import React from 'react';
import {
  Popover,
  IconButton,
  Box,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Button,
  Checkbox,
  ListItemText,
  OutlinedInput,
} from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';


export const InternshipFilter = () => {
const [anchorEl, setAnchorEl] = React.useState();

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const [filterEl, setFilterEl] = React.useState([]);

  const handleChange = (event) => {
    const {
        target: { value },
    } = event;
    setFilterEl(typeof value === 'string' ? value.split(',') : value,
    );
  };

  const years = [
    '2022',
    '2021',
    '2020',
    '2019',
];

  const locations = [
    'Belarus',
    'Georgia',
    'Lithuania',
    'Poland',
    'Ukraine',
  ];

  return (
    <Box>
    <IconButton aria-describedby={id} onClick={handleClick}>
        <FilterListIcon fontSize="large" />
    </IconButton>
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
        <Box width="200px" margin="20px">
            {/* <FormControl sx={{m: 1}} variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Technology</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={value}
                    label="Technology"
                    onChange={handleChange}
                >
                    <MenuItem value="JavaScript">JavaScript</MenuItem>
                    <MenuItem value="Photoshop">Photoshop</MenuItem>
                </Select>
            </FormControl> */}
            <FormControl sx={{m: 1}} variant="standard" fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">Year</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={filterEl}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    // MenuProps={MenuProps}
                >
                    {years.map((year) => (
                        <MenuItem key={year} value={year}>
                        <Checkbox checked={filterEl.indexOf(year) > -1} />
                        <ListItemText primary={year} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{m: 1}} variant="standard" fullWidth>
                <InputLabel id="demo-multiple-checkbox-label">Location</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={filterEl}
                    onChange={handleChange}
                    input={<OutlinedInput label="Tag" />}
                    renderValue={(selected) => selected.join(', ')}
                    // MenuProps={MenuProps}
                >
                    {locations.map((location) => (
                        <MenuItem key={location} value={location}>
                        <Checkbox checked={filterEl.indexOf(location) > -1} />
                        <ListItemText primary={location} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
            <FormControl sx={{m: 1}} variant="standard" fullWidth>
                <InputLabel id="demo-simple-select-label">Language</InputLabel>
                <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    value={filterEl}
                    label="Language"
                    onChange={handleChange}
                >
                    <MenuItem value="English">English</MenuItem>
                    <MenuItem value="Russian">Russian</MenuItem>
                </Select>
            </FormControl> 
            <Button variant="outlined">Filter</Button>
        </Box>
    </Popover>
    </Box>
  );
}

export default InternshipFilter;