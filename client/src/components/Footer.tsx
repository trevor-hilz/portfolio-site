import React from 'react';
import { Box } from '@mui/material';

const Footer = () => {
  return (
    <Box
      sx={{
        position: 'absolute',
        bottom: '.5em',
        left: '1em',
        right: 0,
        display: 'flex',
        // justifyContent: 'center',
        fontSize: '.85em'
        // alignItems: 'center',
        // height: 100,
      }}
    >
      &#169; Trevor Hilz 2024
    </Box>
  );
};

export default Footer;
