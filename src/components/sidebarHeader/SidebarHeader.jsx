import React from 'react';
import { useTheme } from '@mui/material/styles';
import { IconButton, Box, Typography } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import { headerLogo } from '../../assets';
import './SidebarHeader.sass';

const SidebarHeader = (props) => {
  const { open, openSidebar } = props;
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        padding: useTheme().spacing(0, 1),
        // necessary for content to be below app bar
        // ...useTheme().mixins.toolbar,
        backgroundColor: '#5898BB',
        color: '#8FC1DD',
        flexDirection: 'row',
        justifyContent: 'space-between',
        height: '64px',
      }}
    >
      <img src={headerLogo} alt="exadel logo sidebar" />
      <Typography>HR Specialist</Typography>
      <IconButton onClick={openSidebar}>
        {open ? <ChevronLeft /> : <ChevronRight />}
      </IconButton>
    </Box>
  );
};

export default SidebarHeader;
