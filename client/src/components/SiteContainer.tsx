import Header from './Header';
import Footer from './Footer';
import MainContent from './MainContent';

const SiteContainer = () => {
  return (
    <div className='flex flex-col justify-between min-h-screen'>
      <Header />
      <MainContent />
      <div className='flex flex-col items-center justify-end flex-grow'>
        <Footer />
      </div>
    </div>
  );
};

export default SiteContainer;
