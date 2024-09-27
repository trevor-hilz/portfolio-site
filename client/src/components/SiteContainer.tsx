import Summary from './Summary';
import Welcome from './Welcome';
import Footer from './Footer';
import MainContent from './MainContent';
import { Box } from '@mui/material';

const SiteContainer = () => {
  return (
    <Box display='flex' flexDirection='column'>
      <Box margin='auto' paddingTop='5vh' paddingBottom='5vh' marginTop='8em'>
        <Welcome />
      </Box>
      <MainContent />
      <Footer />
    </Box>
  );
};

export default SiteContainer;
