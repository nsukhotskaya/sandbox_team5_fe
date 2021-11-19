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
import './Internships.sass';
import { getFieldLabel } from '../../utils';
import { InternshipCard, InternshipsFilter, SidePopUp } from '../../components';
import { fetchInternships } from '../../store/commands';
import { ProgressIndicator } from '../../components/progressIndicator';

export const Internships = () => {
  const [popUpActive, setPopUpActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const [searchText, setSearchText] = useState();
  const open = !!anchorEl;
  const internships = useSelector((state) => state.internships.internships);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchInternships());
  }, []);

  const openPopUpWindow = () => {
    setPopUpActive(true);
  };

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };

  const onInputChange = (event) => {
    setSearchText(event.target.value);
  };

  if (!internships.length) return <ProgressIndicator />;

  return (
    <Container fixed maxWidth="1400px">
      <Box display="flex" flexDirection="column" marginTop="20px">
        <Box className="internshipMenu">
          <Typography
            className="internshipsTitle"
            variant="h1"
            component="div"
            fontSize="35px"
            color="text"
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
                onChange={onInputChange}
                type="text"
                placeholder={getFieldLabel('common.search')}
              />
            </Popper>
            <InternshipsFilter />
            <Button variant="outlined" size="small" onClick={openPopUpWindow}>
              {getFieldLabel('internships.button.add.program')}
            </Button>
          </Box>
        </Box>
        <Box>
          <Grid container spacing={3}>
            {internships
              .filter((internship) => {
                if (!searchText) return true;
                return (
                  `${internship.name}`
                    .toLowerCase()
                    .indexOf(`${searchText}`.toLowerCase()) !== -1
                );
              })
              .map((internshipItem) => (
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
      <SidePopUp active={popUpActive} setActive={setPopUpActive} />
    </Container>
  );
};

export default Internships;
