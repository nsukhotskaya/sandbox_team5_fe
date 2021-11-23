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
  Button,
} from '@mui/material';
import './InternshipInfo.sass';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import { getFieldLabel } from '../../utils';
import { useMediaDown } from '../utils';

const InternshipInfo = ({ internshipInfo }) => {
  const mobile = useMediaDown('md');

  const internshipMainInfo = ['requirements', 'languageType'];
  const internshipCandidatesInfo = [
    'candidatesCount',
    'declinedCandidatesCount',
    'acceptedCandidatesCount',
    'abandonedCandidatesCount',
    'successfullyFinishedCandidatesCount',
    'teamsCount',
  ];

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
          <Typography variant="h4" color="primary" textAlign="center">
            {internshipInfo.name}
          </Typography>
          <List>
            <ListItem disablePadding>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.date')}
                  </Typography>
                }
              />
              <Typography variant="body1">
                {dayjs(internshipInfo.startDate, internshipInfo.endDate).format(
                  'D.MM.YYYY - D.MM.YYYY',
                )}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.locations')}
                  </Typography>
                }
              />
              <Typography variant="body1">
                {internshipInfo.locations &&
                  internshipInfo.locations.map((item) => item.name)}
              </Typography>
            </ListItem>
            <ListItem disablePadding>
              <ListItemText
                primary={
                  <Typography variant="h6">
                    {getFieldLabel('internship.page.internshipStacks')}
                  </Typography>
                }
              />
              <Typography variant="body1">
                {internshipInfo.internshipStacks &&
                  internshipInfo.internshipStacks.map(
                    (item) => item.technologyStackType,
                  )}
              </Typography>
            </ListItem>
            {internshipMainInfo.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {getFieldLabel(`internship.page.${item}`)}
                    </Typography>
                  }
                />
                <Typography className="internshipInfoValue" variant="body1">
                  {internshipInfo[item]}
                </Typography>
              </ListItem>
            ))}
            <Typography variant="h6">
              {getFieldLabel('internship.page.candidates')}
            </Typography>
            {internshipCandidatesInfo.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {getFieldLabel(`internship.page.${item}`)}
                    </Typography>
                  }
                />
                <Typography className="internshipInfoValue" variant="body1">
                  {internshipInfo[item]}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Button variant="outlined" endIcon={<EditIcon />}>
            {getFieldLabel('common.edit')}
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InternshipInfo;
