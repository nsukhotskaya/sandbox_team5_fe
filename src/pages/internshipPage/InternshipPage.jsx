import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Card, Typography } from '@mui/material';
import './internshipPage.sass';
import { fetchInternshipById } from '../../store/commands';
import { InternshipInfo } from '../../components/internshipInfo';
import { useMediaDown } from '../../components/utils';
import { getFieldLabel } from '../../utils';
import { columnDefsEmployees } from '../../constants';
import { rowDataEmployees } from '../../mocks/internshipEmployees.json';
import { TableTemplate } from '../../components/tableTemplate';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';

const InternshipPage = () => {
  const { id } = useParams();
  const internship = useSelector((state) => state.internship.internship);
  const dispatch = useDispatch();

  const isLoading = useSelector(loadingSelector(['GET_INTERNSHIP_BY_ID']));
  useEffect(() => {}, [isLoading]);

  useEffect(() => {
    dispatch(fetchInternshipById(id));
  }, []);
  const mobile = useMediaDown('md');
  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Box className={mobile ? 'flexContainerMobile' : 'flexContainer'}>
          <InternshipInfo internshipInfo={internship} />
          <Box className={mobile ? 'tableWrapperMobile' : 'tableWrapper'}>
            <Card
              className={
                mobile
                  ? 'internshipDataEmployeesMobile'
                  : 'internshipDataEmployees'
              }
            >
              <Typography variant="h4">
                {getFieldLabel('internship.page.employees')}
              </Typography>
              <TableTemplate
                rowData={rowDataEmployees}
                columnDefs={columnDefsEmployees}
              />
            </Card>
          </Box>
        </Box>
      )}
    </>
  );
};

export default InternshipPage;
