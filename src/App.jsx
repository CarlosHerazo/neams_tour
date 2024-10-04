import Header from './components/Header'; // Asegúrate de que las rutas sean correctas
import RutasTuristicas from './components/RutasTuristicas';
import PreciosOfertas from './components/PreciosOfertas';
import Banner from './components/Banner';
import MompoxMap from './components/MompoxMap';
import ContactForm from './components/ContacForm';
import Footer from './components/Footer';
import { Box } from '@mui/material';
import BannerVinos from './components/BannerVinos';

import { ThemeProvider, createTheme } from '@mui/material/styles';
const theme = createTheme({
  typography: {
    fontFamily: 'Poppins, Arial, sans-serif',
  },
});
function App() {

  return (
    <ThemeProvider theme={theme}>
    <>
          <div>
            <Header />
            {/* Rutas Turísticas */}
    
            <Box id="rutas">
              <RutasTuristicas />
            </Box>
            <Box id="preciosOfertas">
              <PreciosOfertas />
            </Box>
             {/* Inicio */}
             <Box id="inicio">
              <Banner /> {/* O el componente que represente la sección de inicio */}
            </Box>
            <Box id="bannerVinos">
              <BannerVinos />
            </Box>
            <Box id="mompoxMap">
              <MompoxMap />
            </Box>
           
            {/* Contacto */}
            <Box id="contacto">
              <ContactForm />
            </Box>
       
            <Box id="footer">
              <Footer /> {/* O el componente que represente la sección de inicio */}
            </Box>
          </div>
        </>
    </ThemeProvider>
  )
}

export default App
