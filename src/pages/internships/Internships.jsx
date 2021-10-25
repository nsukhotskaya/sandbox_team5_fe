import React from 'react';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import assets from '../../assets';


const { internshipJavascript, internshipDesign, internshipGamedev } = assets;
const mockedPrograms = [
    {
        title: 'Oct2021 Ex. JS&.Net&BA',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 120 members',
        imageUrl: internshipJavascript,
        linkUrl: ''
    },
    {
        title: 'Feb2021 Ex. Design',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 100 members',
        imageUrl: internshipDesign,
        linkUrl: ''
    },
    {
        title: 'Oct2021 Game Dev',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 80 members',
        imageUrl: internshipGamedev,
        linkUrl: ''
    },
]

export const Internships = () => 
    <Box
        position="fixed"
        right="10px"
        top="50px"
        display="flex"
        flexDirection="column"
        background="white"
        border="0"
        borderRadius="5"
        boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
        color="#0082ca"
        padding="15px 15px"
        maxHeight="900px"
        marginTop="20px"
    >
        <Typography
            variant="h1"
            component="div"
            gutterBottom
            marginLeft="50px"
            fontSize="35px"
            color="#222"
        >
            Internship programs
        </Typography>
        <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            background="white"
            color="#0082ca"
            padding="30px 30px"
            
        >
            {mockedPrograms.map(product =>
                <Card
                    sx={{ margin: 1 }}
                    maxWidth="345px"
                    background="#F2F2F2"
                    boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
                    borderRadius="20px"
                    
                >
                    <CardMedia
                        component="img"
                        height="140"
                        image={product.imageUrl}
                        alt="java script logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {product.title}
                        </Typography>
                        <Typography variant="body2" color="main-font-color">
                            {product.dateInterval}
                        </Typography>
                        <Typography variant="body2" color="main-font-color">
                            {product.numberOfMembers}
                        </Typography>
                    </CardContent>
                    <Box
                        display="flex"
                        justifyContent="flex-end"
                        marginRight="10px"
                        marginBottom="10px"
                        
                    >
                        <Button
                            sx={{ border: 1 }}
                            
                            size="small"
                            background="white"
                            borderRadius="5"
                            height="40"
                            padding="0 15px"
                        >Details</Button>
                    </Box>
                </Card>
            )}
        </Box>
    </Box>
        


export default Internships
