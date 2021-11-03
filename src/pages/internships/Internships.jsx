import React from 'react';
import {
  Container,
  Box,
  Typography,
  IconButton,
  Grid,
  Button,
} from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import './Internships.sass';
import { getFieldLabel } from '../../utils';
import { InternshipCard, InternshipFilter } from '../../components';
import { internshipsMocks } from '../../mocks/internshipInfo.json';

export const Internships = () => (
  <Container fixed maxWidth="1400px">
    <Box 
      display="flex" 
      flexDirection="column" 
      maxWidth="1400px" 
      marginTop="80px">
      <Box 
        display="flex" 
        flexDirection="row" 
        justifyContent="space-between" 
        marginBottom="20px" 
        marginLeft="25px" 
        marginRight="25px">
          <Typography
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
            marginRight="50px"
          >
            <IconButton>
              <ManageSearchIcon fontSize="large" />
            </IconButton>
            <InternshipFilter />
            <Button variant="outlined" size="small">
              {getFieldLabel('internships.btn.add.program')}
            </Button>
          </Box>
      </Box>
      <Box>
        <Grid container rowSpacing={0} columnSpacing={{ xs: 0, sm: 0, md: 0, lg: 0 }}>
          {internshipsMocks.map((internshipItem) => (
          <Grid item p="0" xs={12} sm={6} md={4} lg={3}>
            <InternshipCard key={internshipItem.id} data={internshipItem} />
          </Grid>
          ))}
        </Grid>
      </Box>
    </Box>
  </Container>
);

export default Internships;
