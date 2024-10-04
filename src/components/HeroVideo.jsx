import React from 'react';
import { Box, Typography, Button } from '@mui/material';
import { keyframes } from '@mui/system'; // Para animaciones
import { Link } from 'react-scroll';
// Animaciones para el texto
const fadeIn = keyframes`
  0% {
    opacity: 0;
    transform: translateY(20px);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
`;

const HeroVideo = () => {
  return (
    <Box
      sx={{
        height: '100vh',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        overflow: 'hidden', // Esto evita que el video se salga del contenedor
      }}
    >
      {/* Video de fondo */}
      <video
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          width: '100%',
          height: '100%',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          objectFit: 'cover',
          zIndex: -1, // Colocamos el video detrás del contenido
        }}
      >
        <source src="./assets/img/header_video.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      {/* Contenido sobre el video */}
      <Box
        sx={{
          textAlign: 'center',
          animation: `${fadeIn} 2s ease-in-out`,
        }}
      >
        <Typography
          variant="h2"
          sx={{
            color: '#fff',
            fontWeight: 'bold',
            textShadow: '2px 2px 10px rgba(0, 0, 0, 0.8)',
            animation: `${fadeIn} 2s ease-in-out`,
          }}
        >
          Descubre Mompox
        </Typography>

        <Typography
          variant="h5"
          sx={{
            color: '#fff',
            fontWeight: '300',
            mt: 2,
            mb: 4,
            textShadow: '1px 1px 5px rgba(0, 0, 0, 0.5)',
            animation: `${fadeIn} 3s ease-in-out`,
          }}
        >
          Vive la historia, la cultura y la belleza de este lugar mágico
        </Typography>

        <Link to="contacto" smooth={true} duration={500}>
          <Button
            sx={{
              fontSize: '1.2rem',
              color: '#fff', // Cambia el color del texto a blanco
              backgroundColor: '#ff5722', // Fondo del botón en color vibrante
              padding: '10px 20px', // Espaciado adicional para un mejor aspecto
              borderRadius: '25px', // Bordes redondeados
              position: 'relative',
              overflow: 'hidden',
              '&:hover': {
                backgroundColor: '#e64a19', // Color más oscuro al pasar el cursor
                transform: 'scale(1.05)', // Efecto de zoom
              },
              '&:after': {
                content: '""',
                position: 'absolute',
                width: '0',
                height: '2px',
                bottom: '0',
                left: '50%',
                backgroundColor: '#fff', // Color del subrayado en blanco
                transition: 'width 0.3s ease, left 0.3s ease',
              },
              '&:hover:after': {
                width: '100%',
                left: '0',
              },
            }}
          >
            Más Información &gt;
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default HeroVideo;
