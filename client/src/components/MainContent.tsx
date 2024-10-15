import Header from './Header';
import Summary from './Summary';
import JobHistory from './JobHistory';

const MainContent = () => {
  return (
    <div className='flex flex-col justify-center'>
      <Summary />
      <JobHistory />
    </div>
  );
};

export default MainContent;
