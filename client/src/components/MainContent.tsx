import React from 'react';
import Summary from './Summary';
import JobHistory from './JobHistory';
import { Box } from '@mui/material';

const MainContent = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        maxWidth: '50%',
        gap: '6em',
        margin: 'auto',
      }}
    >
      <JobHistory />
      <Summary />
    </Box>
  );
};

export default MainContent;
