import Header from './Header';
import Summary from './Summary';
import JobHistory from './JobHistory';

const MainContent = () => {
  return (
    <div className='flex flex-row flex-wrap justify-around mt-10 align-center'>
      <Summary />
      <JobHistory />
    </div>
  );
};

export default MainContent;
