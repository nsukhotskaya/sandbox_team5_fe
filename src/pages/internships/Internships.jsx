import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {
  Container,
  Box,
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
import { createNewInternship, fetchInternships } from '../../store/commands';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';
import { initialValues } from '../../mocks/createInternshipData.json';

export const Internships = () => {
  const [popUpActive, setPopUpActive] = useState(false);
  const [anchorEl, setAnchorEl] = useState();
  const [searchText, setSearchText] = useState();
  const open = !!anchorEl;
  const internships = useSelector((state) => state.internships.internships);
  const dispatch = useDispatch();

  const isLoading = useSelector(loadingSelector(['GET_INTERNSHIPS']));
  useEffect(() => {}, [isLoading]);

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

  return (
    <Container fixed maxWidth="1600px">
      <Box display="flex" flexDirection="column" padding="10px">
        <Box className="internshipsMenu">
          <Box className="menuItemsBox">
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
            <InternshipsFilter
              onFilter={(filters) => dispatch(fetchInternships(filters))}
            />
          </Box>
          <Button variant="outlined" onClick={openPopUpWindow}>
            {getFieldLabel('internships.button.add.program')}
          </Button>
        </Box>
        <Box>
          {isLoading ? (
            <LoadingIndicator />
          ) : (
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
          )}
        </Box>
      </Box>
      <SidePopUp
        updateFunction={fetchInternships()}
        active={popUpActive}
        setActive={setPopUpActive}
        initialData={initialValues}
        button="common.create"
        dispatchFunction={createNewInternship}
        title="addprogram.title"
      />
    </Container>
  );
};

export default Internships;
