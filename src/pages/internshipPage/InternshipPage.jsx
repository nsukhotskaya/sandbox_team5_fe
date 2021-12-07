import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { Box, Card } from '@mui/material';
import './internshipPage.sass';
import { fetchInternshipById, updateInternship } from '../../store/commands';
import { InternshipInfo } from '../../components/internshipInfo';
import { SidePopUp } from '../../components';
import { useMediaDown } from '../../components/utils';
import { TableTemplate } from '../../components/tableTemplate';
import { loadingSelector } from '../../store/selectors';
import { LoadingIndicator } from '../../components/loadingIndicator';
import { InternshipData, tableFillerAllUsers } from '../../utils';

const InternshipPage = () => {
  const { id } = useParams();
  const [popUpActive, setPopUpActive] = useState(false);
  const internship = useSelector((state) => state.internship.internship);
  const dispatch = useDispatch();
  const allUsers = useSelector((state)=> state.allUsers.allUsers);
  const isLoading = useSelector(loadingSelector(['GET_INTERNSHIP_BY_ID']));
  const mobile = useMediaDown('md');
  const openPopUpWindow = () => {
    setPopUpActive(true);
  };
  const initialData = InternshipData(internship);
  useEffect(() => {}, [isLoading]);
  useEffect(() => {
    dispatch(fetchInternshipById(id));
  }, []);

  return (
    <>
      {isLoading ? (
        <LoadingIndicator />
      ) : (
        <Box className={mobile ? 'flexContainerMobile' : 'flexContainer'}>
          <InternshipInfo
            onChange={openPopUpWindow}
            internshipInfo={internship}
          />
          <Box className={mobile ? 'tableWrapperMobile' : 'tableWrapper'}>
            <Card
              className={
                mobile
                  ? 'internshipDataEmployeesMobile'
                  : 'internshipDataEmployees'
              }
            >
              <TableTemplate rowData={tableFillerAllUsers(allUsers)}/>
            </Card>
          </Box>
          {initialData && (
            <SidePopUp
              active={popUpActive}
              setActive={setPopUpActive}
              initialData={initialData}
              internshipData={internship}
              button="common.edit"
              dispatchFunction={updateInternship}
              title="internship.page.update"
            />
          )}
        </Box>
      )}
    </>
  );
};

export default InternshipPage;
