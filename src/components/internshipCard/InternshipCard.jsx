import React from 'react';
import { Link } from 'react-router-dom';
import {
  Box, Card, CardContent, CardMedia, Typography,
} from '@mui/material';
import dayjs from 'dayjs';
import './InternshipCard.sass';
import { getFieldLabel } from '../../utils';

export const InternshipCard = ({
  data: {
    imageLink,
    name,
    registrationStartDate,
    registrationFinishDate,
    maxCandidateCount,
    id,
  },
}) => (
  <Card raised className="internshipCard" sx={{ borderRadius: 5 }}>
    <CardMedia
      component="img"
      height="120"
      image={imageLink}
      alt="internship logo"
    />
    <CardContent className="cardContent">
      <Typography color="primary" gutterBottom variant="h6" component="div">
        {name}
      </Typography>
      <Typography variant="subtitle2" color="text">
        {getFieldLabel('internships.program.dates')}
        {dayjs(registrationStartDate, registrationFinishDate).format(
          'D.MM.YYYY - D.MM.YYYY',
        )}
      </Typography>
      <Typography variant="subtitle2" color="text">
        {getFieldLabel('internships.program.selection')}
        {maxCandidateCount}
        {getFieldLabel('internships.program.members')}
      </Typography>
    </CardContent>
    <Box textAlign="center" className="test">
      <Link to="/internshipPage" className="internshipCardButton">
        {getFieldLabel('internships.button.program.info')}
      </Link>
      <Link to={`/candidates/${id}`} className="internshipCandidatesLink">
        {getFieldLabel('internships.button.candidates.list')}
      </Link>
    </Box>
  </Card>
);

export default InternshipCard;
