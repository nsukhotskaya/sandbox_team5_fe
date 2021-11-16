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

  const internshipMainInfo = {};
  const internshipCandidatesInfo = {};
  const fieldsMainInfo = [
    'locations',
    'internshipStacks',
    'startDate',
    'requirements',
    'languageType',
  ];
  const fieldsCandidatesInfo = [
    'candidatesCount',
    'declinedCandidatesCount',
    'acceptedCandidatesCount',
    'abandonedCandidatesCount',
    'successfullyFinishedCandidatesCount',
    'teamsCount',
  ];

  Object.keys(internshipInfo)
    .filter((item) => fieldsMainInfo.includes(item))
    .forEach((key) => {
      if (key === 'internshipStacks') {
        internshipMainInfo.internshipStacks =
          internshipInfo.internshipStacks &&
          internshipInfo.internshipStacks.map(
            (item) => item.technologyStackType,
          );
      } else if (key === 'locations') {
        internshipMainInfo.location =
          internshipInfo.locations &&
          internshipInfo.locations.map((item) => item.name);
      } else if (key === 'startDate' || key === 'endDate')
        internshipMainInfo.date = dayjs(
          internshipInfo.startDate,
          internshipInfo.endDate,
        ).format('D.MM.YYYY - D.MM.YYYY');
      else {
        internshipMainInfo[key] = internshipInfo[key];
      }
    });

  Object.keys(internshipInfo)
    .filter((item) => fieldsCandidatesInfo.includes(item))
    .forEach((key) => {
      internshipCandidatesInfo[key] = internshipInfo[key];
    });

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
            {Object.keys(internshipMainInfo).map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {getFieldLabel(`internship.page.${item}`)}
                    </Typography>
                  }
                />
                <Typography className="internshipInfoValue" variant="body1">
                  {internshipMainInfo[item]}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Typography variant="h6">
            {getFieldLabel('internship.page.candidates')}
          </Typography>
          <List>
            {Object.keys(internshipCandidatesInfo).map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={
                    <Typography variant="h6">
                      {getFieldLabel(`internship.page.${item}`)}
                    </Typography>
                  }
                />
                <Typography className="internshipInfoValue" variant="body1">
                  {internshipCandidatesInfo[item]}
                </Typography>
              </ListItem>
            ))}
          </List>
          <Button
            variant="outlined"
            endIcon={<EditIcon />}
          >
            Edit
          </Button>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InternshipInfo;
