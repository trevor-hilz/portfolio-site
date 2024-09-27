import React from 'react';
import { Box } from '@mui/material';
import Photo from './Photo';

const Welcome = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Photo />
      <Box>
        <Box sx={{ fontSize: '2.5em', paddingLeft: '2em' }}>
          Trevor Hilz | Software Engineer
        </Box>
        <Box fontSize='1em' paddingLeft='6em'>
          Full-Stack . JavaScript . React . Node.js . RestAPI
        </Box>
      </Box>
    </Box>
  );
};

export default Welcome;
