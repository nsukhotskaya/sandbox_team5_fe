import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import assets from '../../assets';

class SidebarHeader extends React.PureComponent {
  render() {
    const { headerLogo } = assets;
    const { isOpen, openSidebar } = this.props;
    return (
      <Box
        display="flex"
        alignItems="center"
        paddingX="4px"
        backgroundColor="#5898BB"
        color="#8FC1DD"
        flexDirection="row"
        justifyContent="space-between"
        height="64px"
      >
        <img src={headerLogo} alt="exadel logo sidebar" />
        <Typography>HR Specialist</Typography>
        <IconButton onClick={openSidebar}>
          {isOpen ? <ChevronLeft /> : <ChevronRight />}
        </IconButton>
      </Box>
    );
  }
}

export default SidebarHeader;
