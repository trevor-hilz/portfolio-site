import headshot from '../assets/headshot.jpg';
import charli from '../assets/me-and-charli.jpg';

const Photo = () => {
  return <img src={headshot} style={{ maxWidth: '22%', borderRadius: '50%' }} />;
};

export default Photo;
