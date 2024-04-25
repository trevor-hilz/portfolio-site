import React from 'react';
import unicorn from '../assets/unicorn.jpg';
import theme from '../styles/theme';
import { ThemeProvider } from '@mui/material/styles';

const photo = () => {
  return (
    <ThemeProvider theme={theme}>
      <img
        src={unicorn}
        style={{ width: '18%', borderRadius: '15%', margin: 'auto' }}
      />
    </ThemeProvider>
  );
};

export default photo;
