import React from 'react';
import { IconButton, Box, Typography } from '@mui/material';
import { ChevronRight, ChevronLeft } from '@mui/icons-material';
import assets from '../../assets';
import './SidebarHeader.sass';

class SidebarHeader extends React.PureComponent {
  render() {
    const { headerLogo } = assets;
    const { isOpen, openSidebar } = this.props;
    return (
      <Box className="sidebarHeader">
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
