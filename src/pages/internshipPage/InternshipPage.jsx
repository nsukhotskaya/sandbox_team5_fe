import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import './internshipPage.sass';
import ProfileTable from '../../components/feedbacks/ProfileTable';
import { fetchInternshipById } from '../../store/commands';
import InternshipInfo from '../../components/internshipInfo/InternshipInfo';
import { useMediaDown } from '../../components/utils';
import { getFieldLabel } from '../../utils';
import { columnDefsEmployees } from '../../constants';
import { rowDataEmployees } from '../../mocks/internshipEmployees.json';

const InternshipPage = () => {
  const { id } = useParams();
  const internship = useSelector((state) => state.internship.internship);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchInternshipById(id));
  }, []);
  const mobile = useMediaDown('md');
  return (
    <Box className={mobile ? 'flexContainerMobile' : 'flexContainer'}>
      <InternshipInfo internshipInfo={internship} />
      <Box className={mobile ? 'tableWrapperMobile' : 'tableWrapper'}>
        <Card
          className={
            mobile ? 'internshipDataEmployeesMobile' : 'internshipDataEmployees'
          }
        >
          <Typography variant="h4">
            {getFieldLabel('internship.page.employees')}
          </Typography>
          <ProfileTable
            rowData={rowDataEmployees}
            columnDefs={columnDefsEmployees}
          />
        </Card>
      </Box>
    </Box>
  );
};

export default InternshipPage;
