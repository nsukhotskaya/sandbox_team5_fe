import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
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
import { updateCandidateInfo } from '../../../store/commands';
import { tableCandidateInfoFields } from '../../../constants/tableCandidateInfoFields';

const utc = require('dayjs/plugin/utc');

export const CandidateInfo = (props) => {
  const [isEditModeOn, setIsEditModeOn] = useState(false);
  const { candidateInfo } = props;
  const [newValues, setNewValues] = useState([]);
  const dispatch = useDispatch();
  dayjs.extend(customParseFormat);
  dayjs.extend(utc);

  const formatInfo = (info) => {
    const newInfo = { ...info };
    newInfo.registrationDate = dayjs(info.registrationDate).format(
      'DD.MM.YYYY HH:mm',
    );
    newInfo.bestContactTime = dayjs(info.bestContactTime).format('HH:mm');
    newInfo.isPlanningToJoin = newInfo.isPlanningToJoin ? 'Yes' : 'No';
    return newInfo;
  };

  const onButtonCancel = () => {
    setIsEditModeOn(false);
  };

  const handleChange = (index) => (e) => {
    const newArr = { ...newValues };
    newArr[index] = e.target.value;
    setNewValues(newArr);
  };

  const formatedInfo = formatInfo(candidateInfo);

  const onButtonEdit = () => {
    setNewValues({ ...formatedInfo });
    setIsEditModeOn(true);
  };

  const onButtonSave = () => {
    newValues.isPlanningToJoin = true;

    newValues.registrationDate = dayjs.utc(
      newValues.registrationDate,
      'DD/MM/YYYY HH:mm',
    );
    newValues.bestContactTime = dayjs.utc(newValues.bestContactTime, 'HH:mm');

    dispatch(updateCandidateInfo(newValues));

    setIsEditModeOn(false);
  };

  return (
    <Box>
      <Box display="flex" flexDirection="row" justifyContent="space-between">
        {!isEditModeOn && (
          <Typography paddingLeft="1%" variant="h4">
            {`${formatedInfo.firstName} ${formatedInfo.lastName}`}
          </Typography>
        )}
        {isEditModeOn && (
          <Input
            inputProps={{ style: { fontSize: 25 } }}
            variant="h4"
            defaultValue={`${formatedInfo.firstName} ${formatedInfo.lastName}`}
          />
        )}
        {!isEditModeOn && (
          <Box className="button1">
            <Button variant="outlined" onClick={() => onButtonEdit()}>
              {getFieldLabel('common.edit')}
            </Button>
          </Box>
        )}
        {isEditModeOn && (
          <Box className="button">
            <Button variant="outlined" onClick={() => onButtonSave()}>
              {getFieldLabel('common.save')}
            </Button>
            <Button variant="outlined" onClick={() => onButtonCancel()}>
              {getFieldLabel('common.cancel')}
            </Button>
          </Box>
        )}
      </Box>
      <Divider />
      <List>
        {tableCandidateInfoFields.map((item) => (
          <ListItem key={item}>
            <ListItemText primary={getFieldLabel(`candidate.info.${item}`)} />
            {!isEditModeOn && (
              <Typography variant="body1">{formatedInfo[item]}</Typography>
            )}
            {isEditModeOn && (
              <Input value={newValues[item]} onChange={handleChange(item)} />
            )}
          </ListItem>
        ))}
      </List>
    </Box>
  );
};

export default CandidateInfo;
