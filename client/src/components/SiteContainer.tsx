import React from 'react';
import Photo from './Photo';
import Summary from './Summary';
import Welcome from './Welcome';
import Footer from './Footer';
import MainContent from './MainContent';
import { Box } from '@mui/material';

const SiteContainer = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box margin='auto' paddingTop='10vh' paddingBottom='10vh'>
        <Welcome />
      </Box>
      <Photo />
      <MainContent />
      <Footer />
    </Box>
  );
};

export default SiteContainer;
