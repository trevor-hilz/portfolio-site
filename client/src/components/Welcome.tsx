import React from 'react';
import { Box } from '@mui/material';
import Photo from './Photo';

const Welcome = () => {
  return (
    <Box sx={{display: 'flex', justifyContent: 'center'}}>
      <Photo />
    <Box >
      <Box fontSize='2.5em'>Trevor Hilz | Software Engineer</Box>
      <Box fontSize='1em' paddingLeft='1em'>Full-Stack . JavaScript . Java . React . Node.js . RestAPI / gRPC</Box>
    </Box>
    </Box>
  );
};

export default Welcome;
