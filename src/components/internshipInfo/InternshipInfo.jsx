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
import { getFieldLabel } from '../../utils';
import { useMediaDown } from '../utils';

const InternshipInfo = (props) => {
  const { internshipInfo } = props;
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
        <CardMedia component="img" image={internshipInfo.imageLink} />
        <CardContent className="cardContent">
          <Typography variant="h4">{internshipInfo.name}</Typography>
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
                {dayjs(internshipInfo.startDate, internshipInfo.endDate).format(
                  'D.MM.YYYY - D.MM.YYYY',
                )}
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
              <Typography variant="body1">
                {internshipInfo.requirements}
              </Typography>
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
                {
                  internshipInfo.internshipStacks
                    && internshipInfo.internshipStacks.map((item) => item.technologyStackType)
                }
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
                {internshipInfo.languageType}
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
              <Typography variant="body1">
                {
                  internshipInfo.locations
                  && internshipInfo.locations.map((item) => item.name)
                }
              </Typography>
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
              <Typography variant="body1">
                {internshipInfo.candidatesCount}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.rejected')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {internshipInfo.declinedCandidatesCount}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={(
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.number.approve')}
                  </Typography>
                )}
              />
              <Typography variant="body1">
                {internshipInfo.acceptedCandidatesCount}
              </Typography>
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
                {internshipInfo.abandonedCandidatesCount}
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
                {internshipInfo.successfullyFinishedCandidatesCount}
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
              <Typography variant="body1">
                {internshipInfo.teamsCount}
              </Typography>
            </ListItem>
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InternshipInfo;
