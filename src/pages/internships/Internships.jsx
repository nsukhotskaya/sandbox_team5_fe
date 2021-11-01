import React from 'react';
import { Container, Box, Button, Typography, IconButton, Grid } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Internships.sass';
import { getFieldLabel } from '../../utils';
import { InternshipCard } from '../../components';
import { internshipMocks } from '../../mocks/internshipInfo.json';



export const Internships = () => 
  <Container fixed>
        <Box
            display="flex"
            flexDirection="column"
            marginTop="80px"
        >
            <Box
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
            >
                <Typography
                    variant="h1"
                    component="div"
                    marginLeft="50px"
                    fontSize="35px"
                    color="#222"
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
                        <ManageSearchIcon
                        fontSize="large"
                        /> 
                    </IconButton>
                    <IconButton>
                        <FilterListIcon
                        fontSize="large"
                        />
                    </IconButton>
                    <Button 
                        variant="outlined"
                        size="small"
                        >
                        {getFieldLabel('internships.btn.add.program')}
                    </Button>
                </Box>
            </Box>
            <Grid>
            <Grid sx={{ flexGrow: 2 }}
            container justifyContent="center"
            >
                {internshipMocks.map(internshipItem => <InternshipCard key={internshipItem.id} data={internshipItem}/>)}
            </Grid>
            </Grid>
        </Box>
    </Container>
       


export default Internships
