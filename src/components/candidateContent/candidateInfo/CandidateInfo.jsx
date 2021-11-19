import React, {useState} from 'react';
import dayjs from 'dayjs';
import {
  Box,
  Typography,
  Divider,
  List,
  ListItem,
  ListItemText,
  Button,
  Input,
} from '@mui/material';
import { getFieldLabel } from '../../../utils';

import { tableCandidateInfoFields } from '../../../constants/tableCandidateInfoFields';

export const CandidateInfo = (props) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const { candidateInfo } = props;

  const formatInfo = (info) => {
    const newInfo = { ...info };
    newInfo.fullName = `${info.firstName} ${info.lastName}`;
    newInfo.registrationDate = dayjs(info.registrationDate).format(
      'DD.MM.YYYY HH:mm',
    );
    newInfo.bestContactTime = dayjs(info.bestContactTime).format('HH:mm');
    newInfo.isPlanningToJoin = newInfo.isPlanningToJoin ? 'Yes' : 'No';
    return newInfo;
  };

  const onButtonEdit = () =>{
    setIsEditModeOn(true)
  }
  const onButtonCancel = () =>{
    setIsEditModeOn(false)
  }

  const formatedInfo = formatInfo(candidateInfo);

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        {!isEditModeOn && <Typography paddingLeft="1%" variant="h4">
          {formatedInfo.fullName}
        </Typography>}
        {isEditModeOn && <Input inputProps={{style: {fontSize: 25 }}}  variant="h4" defaultValue = {formatedInfo.fullName} >
        {/* {formatedInfo.fullName} */}
        </Input>}
        {!isEditModeOn && <Box className = "button1">
          <Button variant="outlined" onClick = {() => onButtonEdit()}>{getFieldLabel('common.edit')}</Button>
        </Box>}
        {isEditModeOn && <Box className = "button">
          <Button  variant="outlined">{getFieldLabel('common.save')}</Button>
          <Button variant="outlined" onClick = {() => onButtonCancel()}>{getFieldLabel('common.cancel')}</Button>
        </Box>}
       
      </Box>
      <Divider />

      <List>
        {tableCandidateInfoFields.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />
            {!isEditModeOn && <Typography variant="body1">
              {formatedInfo[item]}
            </Typography>}
            {isEditModeOn && <Input defaultValue = {formatedInfo[item]} >
              {/* {formatedInfo[item]} */}
            </Input>}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};
