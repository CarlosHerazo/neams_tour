import React from 'react';
import CardMedia from '@mui/material/CardMedia';
import { Typography } from '@mui/material';

const VideoTour = () => {
    return (
        <div
            style={{
                textAlign: 'center',
                MaxWidth: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                flexDirection: 'column',
                background: 'url(./assets/img/fondoAnimado.avif) center center', // Ruta del fondo
                backgroundSize: 'cover', // Ajusta la imagen de fondo para cubrir todo el div
                padding: '2rem', // Agrega un poco de espacio interno
            }}
        >
            <Typography variant="h3" sx={{ fontWeight: 'bold', marginBottom: '2rem' }}>
                Video Tour
            </Typography>

            <CardMedia
                component="video"
                controls
                src="./assets/img/videoTour.mp4"
                alt="Tour video"
                style={{ width: '80%', height: 'auto' }}
            />
        </div>

    );
};

export default VideoTour;
