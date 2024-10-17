import About from './About';
import Summary from './Summary';
import JobHistory from './JobHistory';

const MainContent = () => {
  return (
    <div className='flex flex-row flex-wrap justify-around mt-10 align-center'>
      <Summary />
      <About />
    </div>
  );
};

export default MainContent;
