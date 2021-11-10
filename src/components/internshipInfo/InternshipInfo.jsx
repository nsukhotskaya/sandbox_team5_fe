import React from 'react';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  ListItem,
  ListItemText,
} from '@mui/material';
import './InternshipInfo.sass';
import dayjs from 'dayjs';
import { getFieldLabel, getLanguage, getStackType } from '../../utils';
import { useMediaDown } from '../utils';

const InternshipInfo = ({
  data: {
    name,
    imageLink,
    startDate,
    endDate,
    languageType,
    internshipStacks,
    locations,
    candidatesCount,
    declinedCandidatesCount,
    acceptedCandidatesCount,
    abandonedCandidatesCount,
    successfullyFinishedCandidatesCount,
    teamsCount,
  },
}) => {
  const mobile = useMediaDown('md');
  return (
    <Box
      className={
          mobile ? 'internshipContentWrapperMobile' : 'internshipContentWrapper'
        }
    >
      <Card
        raised
        className={mobile ? 'internshipDataTextMobile' : 'internshipDataText'}
      >
        <CardMedia component="img" image={imageLink} />
        <CardContent className="cardContent">
          <Typography variant="h4">{name}</Typography>
          <List>
            <ListItem>
              <ListItemText primary={getFieldLabel('internship.page.date')} />
              <Typography variant="body1">{dayjs(startDate, endDate).format('D MMMM YYYY - D MMMM YYYY')}</Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.technology')}
              />
              <Typography variant="body1">
                {getStackType(internshipStacks && internshipStacks[0].technologyStackType)}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.language')}
              />
              <Typography variant="body1">
                {getLanguage(languageType)}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.location')}
              />
              <Typography variant="body1">
                {locations}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.number.applicants')}
              />
              <Typography variant="body1">
                {candidatesCount}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.number.rejected')}
              />
              <Typography variant="body1">
                {declinedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.number.approve')}
              />
              <Typography variant="body1">
                {acceptedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.number.refused')}
              />
              <Typography variant="body1">
                {abandonedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.number.graduated')}
              />
              <Typography variant="body1">
                {successfullyFinishedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem>
              <ListItemText
                primary={getFieldLabel('internship.page.number.teams')}
              />
              <Typography variant="body1">{teamsCount}</Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InternshipInfo;
