import React from 'react';
import {
  Box,
  Card,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import './Internships.sass';
import assets from '../../assets';
import { getFieldLabel } from '../../utils';

const { internshipJavascript, internshipDesign, internshipGamedev } = assets;
const mockedPrograms = [
  {
    title: getFieldLabel('internships.program.title.javascript'),
    dateInterval: getFieldLabel('internships.program.date.javascript'),
    numberOfMembers: getFieldLabel('internships.program.members.javascript'),
    imageUrl: internshipJavascript,
    linkUrl: '',
  },
  {
    title: getFieldLabel('internships.program.title.design'),
    dateInterval: getFieldLabel('internships.program.date.design'),
    numberOfMembers: getFieldLabel('internships.program.members.design'),
    imageUrl: internshipDesign,
    linkUrl: '',
  },
  {
    title: getFieldLabel('internships.program.title.gamedev'),
    dateInterval: getFieldLabel('internships.program.date.gamedev'),
    numberOfMembers: getFieldLabel('internships.program.members.gamedev'),
    imageUrl: internshipGamedev,
    linkUrl: '',
  },
];

export const Internships = () => {
  // eslint-disable-next-line no-unused-vars
  const theme = useTheme();
  return (
    <Box
      position="fixed"
      right="10px"
      top="50px"
      display="flex"
      flexDirection="column"
      background="white"
      border="0"
      borderRadius="5"
      boxShadow="0px 4px 4px rgba(0, 0, 0, 0.15)"
      color="#0082ca"
      padding="15px 15px"
      maxHeight="900px"
      marginTop="20px"
    >
      <Typography
        variant="h1"
        component="div"
        gutterBottom
        marginLeft="50px"
        fontSize="35px"
        color="#222"
      >
        {getFieldLabel('internships.title')}
      </Typography>
      <Box
        display="flex"
        alignItems="center"
        background="white"
        color="#0082ca"
        padding="30px 30px"
        spacing="(2)"
      >
        {mockedPrograms.map((product) => (
          <Card
            className="internshipCard"
            maxWidth="345px"
            background="#F2F2F2"
            boxShadow="0px 4px 4px rgba(0, 0, 0, 0.25)"
            borderRadius="20px"
          >
            <CardMedia
              component="img"
              height="140"
              image={product.imageUrl}
              alt="java script logo"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {product.title}
              </Typography>
              <Typography variant="body2" color="main-font-color">
                {product.dateInterval}
              </Typography>
              <Typography variant="body2" color="main-font-color">
                {product.numberOfMembers}
              </Typography>
            </CardContent>
            <Box
              display="flex"
              justifyContent="flex-end"
              marginRight="10px"
              marginBottom="10px"
            >
              <Button
                variant="outlined"
                size="small"
                background="white"
                borderRadius="5"
                height="40"
                padding="0 15px"
              >
                {getFieldLabel('internships.btn-details')}
              </Button>
            </Box>
          </Card>
        ))}
      </Box>
    </Box>
  );
};

export default Internships;
