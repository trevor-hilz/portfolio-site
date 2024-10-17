import headshot from '../assets/headshot.jpg';
import charli from '../assets/me-and-charli.jpg';

const Photo = () => {
  return (
    <img
      src={charli}
      style={{ width: '22%', borderRadius: '50%' }}
      className='hover:animate-spin'
    />
  );
};

export default Photo;
