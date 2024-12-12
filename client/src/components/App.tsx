import SiteContainer from './SiteContainer';
import '../styles/index.css';
import space from '../assets/space.jpg';

const App = () => {
  return (
    <div className='bg-[rgb(248,216,216)] max-w-screen-lg m-auto min-h-screen animate-slide-in-left'>
      <SiteContainer />
    </div>
  );
};

export default App;
