import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import './InternshipCard.sass';
import assets from '../../assets';
import { getFieldLabel } from '../../utils';

export const InternshipCard = ({
  data: { imageUrl, title, dateInterval, numberOfMembers },
}) => (
  <Card sx={{ borderRadius: 5 }}>
    <CardMedia
      component="img"
      height="120"
      image={assets[imageUrl]}
      alt="internship logo"
    />
    <CardContent className="cardContent">
      <Typography color="primary" gutterBottom variant="h6" component="div">
        {getFieldLabel(title)}
      </Typography>
      <Typography variant="subtitle2" color="text">
        {getFieldLabel(dateInterval)}
      </Typography>
      <Typography variant="subtitle2" color="text">
        {getFieldLabel(numberOfMembers)}
      </Typography>
    </CardContent>
    <Box display="flex" flexDirection="row" justifyContent="center">
      <Button className="internshipCardButton" size="small">
        {getFieldLabel('internships.button.program.info')}
      </Button>
      <Button size="small">
        {getFieldLabel('internships.button.candidates.list')}
      </Button>
    </Box>
  </Card>
);

export default InternshipCard;
