import React from 'react';
import Photo from './Photo';
import Summary from './Summary';
import { Box } from '@mui/material';

const SiteContainer = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Photo />
      <Summary />
    </Box>
  );
};

export default SiteContainer;
