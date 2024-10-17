import Welcome from './Welcome';
import Photo from './Photo';

const Header = () => {
  return (
    <div>
      <div className='flex items-center justify-center mt-10'>
        <Photo />
        <Welcome />
      </div>
    </div>
  );
};

export default Header;
