import SiteContainer from './SiteContainer';
import { ThemeProvider } from '@mui/material/styles';
import Button from '@mui/material/Button';
import { Box, CssBaseline } from '@mui/material';
import theme from '../styles/theme';

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline>
        <Box
          sx={{
            bgcolor: 'primary.main',
            color: 'white',
            height: '100vh',
            width: '100vw',
          }}
        >
          <SiteContainer />
        </Box>
      </CssBaseline>
    </ThemeProvider>
  );
};

export default App;
