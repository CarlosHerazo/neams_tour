import React from 'react';
import { Box, Grid, Typography, ImageList, ImageListItem, Button } from '@mui/material';
import { Link } from 'react-scroll';

// Array de datos de imágenes (puedes personalizar los enlaces de las imágenes y los títulos)
const itemData = [
    {
        img: './assets/img/filigrana.webp',
        title: 'Filigrana',
    },
    {
        img: './assets/img/filigrana2.webp',
        title: 'Filigrana',
    },
    {
        img: './assets/img/vinos.png',
        title: 'Vinos Locales',
    },
    {
        img: './assets/img/vinos2.png',
        title: 'Vinos Locales',
    },
    {
        img: './assets/img/iglesias.avif',
        title: 'Iglesias',
    },
    {
        img: './assets/img/cementerio.jpg',
        title: 'Cementerio',
    },
    {
        img: './assets/img/plaza.webp',
        title: 'Plaza',
    },
    {
        img: './assets/img/mompox.jpg',
        title: 'Plaza',
    },
];

const RutasTuristicas = () => {
    return (
        <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f7f7f7' }}>
            <Grid container spacing={2} alignItems="center">
                {/* Columna Izquierda: Título y Descripción */}
                <Grid item xs={12} md={6}>
                    <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                        Rutas Turísticas
                    </Typography>
                    <Typography variant="body1" sx={{ fontSize: '1.2rem', color: '#555' }}>
                        Explora lo mejor de Mompox con nuestras rutas turísticas. Sumérgete en la tradición de la filigrana,
                        prueba vinos locales, visita majestuosas iglesias y descubre la historia única del cementerio más
                        famoso de la región. ¡Una experiencia inolvidable!
                    </Typography>
                    <Link to="contacto" smooth={true} duration={500}>
                        <Button
                            sx={{
                                fontSize: '1.2rem',
                                color: '#ff5722', // Puedes ajustar el color del texto si deseas
                                position: 'relative',
                                overflow: 'hidden',
                                '&:after': {
                                    content: '""',
                                    position: 'absolute',
                                    width: '0',
                                    height: '2px',
                                    bottom: '0',
                                    left: '50%',
                                    backgroundColor: '#ff5722', // Ajusta el color del subrayado
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
                </Grid>

            {/* Columna Derecha: Imágenes geométricas */}
            <Grid item xs={12} md={6}>
                <ImageList variant="masonry" cols={3} gap={8}>
                    {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                            <img
                                srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                                src={`${item.img}?w=248&fit=crop&auto=format`}
                                alt={item.title}
                                loading="lazy"
                            />
                        </ImageListItem>
                    ))}
                </ImageList>
            </Grid>
        </Grid>
        </Box >
    );
};

export default RutasTuristicas;
