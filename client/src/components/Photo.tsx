import React from 'react';
import unicorn from '../assets/unicorn.jpg';

const Photo = () => {
  return (
    <img
      src={unicorn}
      style={{ width: '18%', borderRadius: '15%', margin: 'auto' }}
    />
  );
};

export default Photo;
