import SiteContainer from './SiteContainer';
import '../styles/index.css';
import space from '../assets/space.jpg';

const App = () => {
  return (
    <div className='bg-[#090827] max-w-screen-lg m-auto min-h-screen'>
      {/* // <div className='max-w-screen-lg bg-center bg-cover bg-space'> */}
      <SiteContainer />
    </div>
  );
};

export default App;
