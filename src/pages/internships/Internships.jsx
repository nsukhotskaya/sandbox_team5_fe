import React from 'react';
import { Box, Card, CardActions, CardContent, CardMedia, Button, Typography } from '@mui/material';
// import { Footer } from '../../components';
import { styled } from '@mui/styles';
import './Internships.sass';
import assets from '../../assets';

const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)',
  border: 0,
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
});


const { jsPrograms } = assets;
const mockedPrograms = [
    {
        title: 'Oct2021 Ex. JS&.Net&BA',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 120 members',
        imageUrl: jsPrograms,
        linkUrl: ''
    },
    {
        title: 'Oct2021 Ex. JS&.Net&BA',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 120 members',
        imageUrl: jsPrograms,
        linkUrl: ''
    },
    {
        title: 'Oct2021 Ex. JS&.Net&BA',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 120 members',
        imageUrl: jsPrograms,
        linkUrl: ''
    },
]

export const Internships = () => 
    <Box className="internshipsContainer">
        <Box className="internshipsWrapper">
            {mockedPrograms.map(p =>
                <Card sx={{ maxWidth: 345 }}>
                    <CardMedia
                        component="img"
                        height="140"
                        image={p.imageUrl}
                        alt="java script logo"
                    />
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="div">
                            {p.title}
                        </Typography>
                        <Typography variant="body2" color="main-font-color">
                            {p.dateInterval}
                        </Typography>
                        <Typography variant="body2" color="main-font-color">
                            {p.numberOfMembers}
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <MyButton size="small">Details</MyButton>
                    </CardActions>
                </Card>
            )}
        </Box>
    </Box>
        


export default Internships
