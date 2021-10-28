import React from 'react';
import { Container, Box, Card, CardContent, CardMedia, Button, Typography, IconButton, ButtonGroup } from '@mui/material';
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import FilterListIcon from '@mui/icons-material/FilterList';
import './Internships.sass';
import assets from '../../assets';
import { getFieldLabel } from '../../utils';




const { internshipJavascript, internshipDesign, internshipGamedev } = assets;
const mockedPrograms = [
    {
        title: getFieldLabel('internships.program.title.javascript'),
        dateInterval: getFieldLabel('internships.program.date.javascript'),
        numberOfMembers: getFieldLabel('internships.program.members.javascript'),
        imageUrl: internshipJavascript,
        linkUrl: ''
    },
    {
        title: getFieldLabel('internships.program.title.design'),
        dateInterval: getFieldLabel('internships.program.date.design'),
        numberOfMembers: getFieldLabel('internships.program.members.design'),
        imageUrl: internshipDesign,
        linkUrl: ''
    },
    {
        title: getFieldLabel('internships.program.title.gamedev'),
        dateInterval: getFieldLabel('internships.program.date.gamedev'),
        numberOfMembers: getFieldLabel('internships.program.members.gamedev'),
        imageUrl: internshipGamedev,
        linkUrl: ''
    },
    {
        title: getFieldLabel('internships.program.title.gamedev'),
        dateInterval: getFieldLabel('internships.program.date.gamedev'),
        numberOfMembers: getFieldLabel('internships.program.members.gamedev'),
        imageUrl: internshipGamedev,
        linkUrl: ''
    },
]

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
                        href="#"
                        >
                        {getFieldLabel('internships.btn.add-program')}
                    </Button>
                </Box>
            </Box>
            <Box
                className="internshipsCards"
                background="white"
                color="#0082ca"
                padding="30px 30px"
            >
                {mockedPrograms.map(product =>
                    <Card
                        sx={{ borderRadius: 5 }}
                        className="internshipCard"
                        maxWidth="345px"
                        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    >
                        <CardMedia
                            component="img"
                            height="140"
                            image={product.imageUrl}
                            alt="java script logo"
                        />
                        <CardContent>
                            <Typography color="#0e518b" gutterBottom variant="h5" component="div">
                                {product.title}
                            </Typography>
                            <Typography variant="body2" color="#4e4e4e">
                                {product.dateInterval}
                            </Typography>
                            <Typography variant="body2" color="#4e4e4e">
                                {product.numberOfMembers}
                            </Typography>
                        </CardContent>
                        <Box
                            display="flex"
                            flexDirection="row"
                            alignItems="center"
                            marginRight="10px"
                            marginBottom="10px"
                            paddingLeft="50px"
                        >
                            <ButtonGroup variant="text" aria-label="text button group">
                            <Button 
                                size="small"
                                >
                                {getFieldLabel('internships.btn.program-info')}
                            </Button>
                            <Button
                                size="small"
                                >
                                {getFieldLabel('internships.btn.candidates-list')}
                            </Button>
                            </ButtonGroup>
                        </Box>
                    </Card>
                )}
            </Box>
        </Box>
    </Container>
        


export default Internships
