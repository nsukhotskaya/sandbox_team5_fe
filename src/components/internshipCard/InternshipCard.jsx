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

export const InternshipCard = ({ data }) => {
  const { imageUrl, title, dateInterval, numberOfMembers } = data;
  return (
    <Card sx={{ borderRadius: 5}}>
      <CardMedia
        component="img"
        height="120"
        image={assets[imageUrl]}
        alt="internship logo"
      />
      <CardContent>
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
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="center"
      >
        <Box>
          <Button className="internshipCardButton" size="small">
            {getFieldLabel('internships.btn.program.info')}
          </Button>
          <Button size="small">
            {getFieldLabel('internships.btn.candidates.list')}
          </Button>
        </Box>
      </Box>
    </Card>
  );
};
export default InternshipCard;
