import React from 'react';
import { Box, Card, CardContent, CardMedia, Button, Typography, ButtonGroup } from '@mui/material';
import './InternshipCard.sass';
import assets from '../../assets';
import { getFieldLabel } from '../../utils';


export const InternshipCard = ({data}) => {
    const {imageUrl, title, dateInterval, numberOfMembers} = data;
return <Card
            sx={{ borderRadius: 5 }}
            id="internshipCard"
        >
            <CardMedia
                component="img"
                height="140"
                image={assets[imageUrl]}
                alt="java script logo"
            />
            <CardContent>
                <Typography color="#0e518b" gutterBottom variant="h5" component="div">
                    {getFieldLabel(title)}
                </Typography>
                <Typography variant="body2" color="#4e4e4e">
                    {getFieldLabel(dateInterval)}
                </Typography>
                <Typography variant="body2" color="#4e4e4e">
                    {getFieldLabel(numberOfMembers)}
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
                <Button className="card-button" size="small">
                    {getFieldLabel('internships.btn.program.info')}
                </Button>
                <Button size="small">
                    {getFieldLabel('internships.btn.candidates.list')}
                </Button>
                </ButtonGroup>
            </Box>
        </Card>
}
export default InternshipCard;