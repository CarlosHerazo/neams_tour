import React from 'react';
import { Box, Typography, Button } from '@mui/material';

const Banner = () => {
    return (
        <Box
            sx={{
                position: 'relative',
                height: '500px', // Altura del banner
                backgroundImage: 'url(./src/assets/img/header_mompox.jpg)', // Ruta de la imagen de fondo
                backgroundSize: 'cover', // La imagen cubre todo el banner
                backgroundPosition: 'center', // Centra la imagen
                backgroundRepeat: 'no-repeat', // No repetir la imagen
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#fff', // Color del texto
                textAlign: 'center', // Alineación del texto centrada
                boxShadow: '0px 4px 15px rgba(0, 0, 0, 0.3)', // Sombra para darle más profundidad
            }}
        >
            {/* Fondo oscuro con degradado para mejorar la legibilidad del texto */}
            <Box
                sx={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    background: 'linear-gradient(180deg, rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.3))', // Degradado oscuro
                    zIndex: 0,
                }}
            />

            {/* Contenido del banner */}
            <Box sx={{ position: 'relative', zIndex: 1, p: 2 }}>
                <Typography
                    variant="h3"
                    sx={{
                        fontWeight: 'bold',
                        textShadow: '2px 2px 8px rgba(0, 0, 0, 0.7)', // Sombra del texto
                        animation: 'fadeIn 1.5s ease-in-out', // Animación de entrada
                    }}
                >
                    ¡Descubre las Rutas Más Hermosas de Mompox!
                </Typography>
                <Typography
                    variant="h6"
                    sx={{
                        mt: 2,
                        textShadow: '1px 1px 6px rgba(0, 0, 0, 0.6)',
                        animation: 'fadeIn 2s ease-in-out',
                    }}
                >
                    Aventura, historia y cultura te esperan en cada esquina.
                </Typography>

                {/* Botón de llamada a la acción */}
                <Button
                    variant="contained"
                    size="large"
                    sx={{
                        mt: 4,
                        backgroundColor: '#FF5722', // Color atractivo para el botón
                        color: '#fff',
                        padding: '10px 20px',
                        fontWeight: 'bold',
                        borderRadius: '30px', // Bordes redondeados
                        boxShadow: '0px 5px 15px rgba(255, 87, 34, 0.3)', // Sombra para el botón
                        transition: 'background-color 0.3s ease-in-out',
                        '&:hover': {
                            backgroundColor: '#E64A19',
                        },
                    }}
                >
                    ¡Explora Ahora!
                </Button>
            </Box>
        </Box>
    );
};

export default Banner;
