import React from 'react';
import Photo from './Photo';

const Welcome = () => {
  return (
    <div className='ml-20 text-center'>
      <h1 className='text-xl font-bold underline'>Trevor Hilz</h1>
      <div>
        <li className='list-none hover:animate-pulse'>Software Engineer</li>
        <li className='list-none hover:animate-pulse'>Gamer Dad</li>
        <li className='list-none hover:animate-pulse'>Automotive Enthusiast</li>
      </div>
    </div>
  );
};

export default Welcome;
