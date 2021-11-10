import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
  Popper,
  Input,
} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Internships.sass';
import { getFieldLabel } from '../../utils';
import { InternshipCard } from '../../components';
import { fetchInternships } from '../../store/commands';

export const Internships = () => {
  const [anchorEl, setAnchorEl] = useState();
  const open = !!anchorEl;
  const internships = useSelector((state) => state.internships.internships);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInternships());
  }, []);

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  return (
    <Container fixed maxWidth="1400px">
      <Box display="flex" flexDirection="column" marginTop="20px">
        <Box className="internshipMenu">
          <Typography
            variant="h1"
            component="div"
            fontSize="35px"
            color="text"
            marginLeft="30px"
          >
            {getFieldLabel('internships.title')}
          </Typography>
          <Box
            width="280px"
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
          >
            <IconButton onClick={handleClick}>
              <ManageSearchIcon fontSize="large" />
            </IconButton>
            <Popper open={open} anchorEl={anchorEl} placement="left">
              <Input
                placeholder={getFieldLabel('candidates.popper.inputPlaceholder')}
              />
            </Popper>
            <IconButton>
              <FilterListIcon fontSize="large" />
            </IconButton>
            <Button variant="outlined" size="small">
              {getFieldLabel('internships.button.add.program')}
            </Button>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {internships.map((internshipItem) => (
              <Grid
                item
                xs={12}
                sm={12}
                md={6}
                lg={4}
                xl={3}
                key={internshipItem.id}
              >
                <InternshipCard data={internshipItem} />
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};
export default Internships;
