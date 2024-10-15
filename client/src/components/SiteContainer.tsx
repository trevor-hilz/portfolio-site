import Welcome from './Welcome';
import Footer from './Footer';
import MainContent from './MainContent';

const SiteContainer = () => {
  return (
    <div className='flex flex-col min-h-screen justify-between'>
      <Welcome />
      <MainContent />
      <div className='flex-grow flex flex-col items-center justify-end'>
        <Footer />
      </div>
    </div>
  );
};

export default SiteContainer;
