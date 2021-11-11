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
    requirements,
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
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.date')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {dayjs(startDate, endDate).format('D.MM.YYYY - D.MM.YYYY')}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.requirements')}
                  </Typography>
                )}
              />
              <Typography variant="body1">{requirements}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.technology')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {getStackType(
                  internshipStacks && internshipStacks[0].technologyStackType,
                )}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.language')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {getLanguage(languageType)}
              </Typography>
            </ListItem>
            <ListItem disablePadding divider>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.location')}
                  </Typography>
                )}
              />
              <Typography variant="body1">{locations}</Typography>
            </ListItem>
            <Typography variant="h6" gutterBottom>
              {getFieldLabel('internship.page.candidates')}
            </Typography>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.applicants')}
                  </Typography>
                )}
              />
              <Typography variant="body1">{candidatesCount}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.rejected')}
                  </Typography>
                )}
              />
              <Typography variant="body1">{declinedCandidatesCount}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.approve')}
                  </Typography>
                )}
              />
              <Typography variant="body1">{acceptedCandidatesCount}</Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.refused')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {abandonedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.graduated')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {successfullyFinishedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.teams')}
                  </Typography>
                )}
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
