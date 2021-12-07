import React from 'react';
import { useSelector } from 'react-redux';
import {
  Box,
  Card,
  CardMedia,
  CardContent,
  Typography,
  List,
  Link,
  ListItem,
  ListItemText,
  IconButton,
  Tooltip,
} from '@mui/material';
import './InternshipInfo.sass';
import dayjs from 'dayjs';
import EditIcon from '@mui/icons-material/Edit';
import { getFieldLabel } from '../../utils';
import { useMediaDown } from '../utils';

const InternshipInfo = (props) => {
  const mobile = useMediaDown('md');
  const authorizedUserRole = useSelector(
    (state) => state.userInfo.userInfo.roleType,
  );
  const internshipMainInfo = ['requirements'];
  const internshipHard = [
    { locations: 'name' },
    { internshipStacks: 'technologyStackType' },
    { languageTypes: 'language' },
  ];
  const { internshipInfo } = props;
  const { onChange } = props;
  const internshipCandidatesInfoWithLink = [
    { candidatesCount: 0 },
    { acceptedCandidatesCount: 2 },
    { declinedCandidatesCount: 1 },
  ];
  const internshipCandidatesInfo = [
    'refusedCandidatesCount',
    'graduatedCandidatesCount',
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
          <Box display="flex" justifyContent="space-between">
            <Typography variant="h5" color="primary" mt="5px">
              {internshipInfo.name}
            </Typography>

            {(authorizedUserRole === 'Admin' ||
              authorizedUserRole === 'Manager') && (
              <IconButton variant="outlined" onClick={onChange}>
                <EditIcon fontSize="medium" />
              </IconButton>
            )}
          </Box>
          <List>
            <ListItem disablePadding>
              <Typography
                width="120px"
                paddingBottom="10px"
                fontWeight="bold"
                variant="body1"
              >
                {getFieldLabel('internship.page.date')}
              </Typography>
              <Typography
                paddingBottom="10px"
                variant="body2"
                paddingLeft="10px"
              >
                {dayjs(internshipInfo.startDate).format('D.MM.YYYY')} -{' '}
                {dayjs(internshipInfo.endDate).format('D.MM.YYYY')}
              </Typography>
            </ListItem>
            {internshipHard.map((item) => (
              <ListItem key={Object.keys(item)} disablePadding>
                <Typography
                  width="120px"
                  paddingBottom="10px"
                  fontWeight="bold"
                  variant="body1"
                >
                  {getFieldLabel(`internship.page.${Object.keys(item)}`)}
                </Typography>
                <Typography
                  paddingBottom="10px"
                  paddingLeft="10px"
                  className="internshipInfoValue"
                  variant="body2"
                >
                  {internshipInfo[Object.keys(item)] &&
                    internshipInfo[Object.keys(item)].map((secondItem) =>
                      secondItem[Object.values(item)].concat(' '),
                    )}
                </Typography>
              </ListItem>
            ))}
            {internshipMainInfo.map((item) => (
              <ListItem key={item} disablePadding>
                <Typography
                  width="120px"
                  paddingBottom="10px"
                  fontWeight="bold"
                  variant="body1"
                >
                  {getFieldLabel(`internship.page.${item}`)}
                </Typography>

                <Typography
                  paddingBottom="10px"
                  paddingLeft="10px"
                  className="internshipInfoValue"
                  variant="body2"
                >
                  {internshipInfo[item]}
                </Typography>
              </ListItem>
            ))}
            <Typography fontWeight="bold" variant="h6">
              {getFieldLabel('internship.page.candidates')}
            </Typography>
            {internshipCandidatesInfoWithLink.map((item) => (
              <ListItem key={Object.keys(item)} disablePadding>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" variant="body1">
                      {getFieldLabel(`internship.page.${[Object.keys(item)]}`)}
                    </Typography>
                  }
                />
                <Typography className="internshipInfoValue" variant="body2">
                  {internshipInfo[Object.keys(item)] !== 0 ? (
                    <Tooltip title={getFieldLabel('download.tooltip')}>
                      <Link
                        href={`http://petrov2021-001-site1.btempurl.com/api/Report/getCandidatesReportByInternshipId?InternshipId=${
                          internshipInfo.id
                        }&ReportType=${[Object.values(item)]}`}
                      >
                        {internshipInfo[Object.keys(item)]}
                      </Link>
                    </Tooltip>
                  ) : (
                    internshipInfo[Object.keys(item)]
                  )}
                </Typography>
              </ListItem>
            ))}
            {internshipCandidatesInfo.map((item) => (
              <ListItem key={item} disablePadding>
                <ListItemText
                  primary={
                    <Typography fontWeight="bold" variant="body1">
                      {getFieldLabel(`internship.page.${item}`)}
                    </Typography>
                  }
                />
                <Typography className="internshipInfoValue" variant="body2">
                  {internshipInfo[item]}
                </Typography>
              </ListItem>
            ))}
          </List>
        </CardContent>
      </Card>
    </Box>
  );
};

export default InternshipInfo;
