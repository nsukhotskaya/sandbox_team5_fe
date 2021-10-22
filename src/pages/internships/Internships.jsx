import React from 'react';
import { Box, Card, CardContent, CardMedia, Button, Typography } from '@mui/material';
import { styled } from '@mui/styles';
import assets from '../../assets';

const InternshipsBox = styled(Box)({
maxWidth: '1100px',
  display: 'flex',
  flexDirection: 'column',
  background: 'white',
  border: 0,
  borderRadius: 5,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  color: '#0082ca',
  padding: '15px 15px',
  maxHeight: '900px',
  marginTop: '20px',
});

const InternshipsTypography = styled(Typography)({
  marginLeft: '50px',
  fontSize: '35px',
  color: '#222',
});

const CardsBox = styled(Box)({
  
  display: 'flex',
  justifyContent: 'space-between',
  background: 'white',
  color: '#0082ca',
  padding: '30px 30px',
});

const InternshipCard = styled(Card)({
    background: '#F2F2F2',
    boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
    borderRadius: '20px',
});

const ButtonBox = styled(Box)({
    display: 'flex',
    justifyContent: 'flex-end',
    marginRight: '10px',
    marginBottom: '10px',
});

const MyButton = styled(Button)({
  background: 'white',
  borderRadius: 5,
  boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.15)',
  color: '#0082ca',
  height: 40,
  padding: '0 15px',
});


const { jsImg, psImg, plImg } = assets;
const mockedPrograms = [
    {
        title: 'Oct2021 Ex. JS&.Net&BA',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 120 members',
        imageUrl: jsImg,
        linkUrl: ''
    },
    {
        title: 'Feb2021 Ex. Design',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 100 members',
        imageUrl: psImg,
        linkUrl: ''
    },
    {
        title: 'Oct2021 Game Dev',
        dateInterval: 'Dates: 12.10.2020 - 12.12.2020',
        numberOfMembers: 'Selection: 80 members',
        imageUrl: plImg,
        linkUrl: ''
    },
]

export const Internships = () => 
    <InternshipsBox>
        <InternshipsTypography variant="h1" component="div" gutterBottom>
            Internship programs
        </InternshipsTypography>
        <CardsBox>
            {mockedPrograms.map(p =>
                <InternshipCard sx={{ maxWidth: 345 }}>
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
                    <ButtonBox>
                        <MyButton size="small">Details</MyButton>
                    </ButtonBox>
                </InternshipCard>
            )}
        </CardsBox>
    </InternshipsBox>
        


export default Internships
