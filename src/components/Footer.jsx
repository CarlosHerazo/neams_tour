import React from 'react';
import { Box, Typography, IconButton } from '@mui/material';
import { Facebook, Instagram, Twitter } from '@mui/icons-material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                width: '100% - 40px', // Ocupar todo el ancho
                backgroundColor: '#fff', // Fondo oscuro
                color: '#000', // Texto blanco
                p: 4, // Espaciado interno
                display: 'flex',
                flexDirection: { xs: 'column', md: 'row' }, // Columna en pantallas pequeñas, fila en pantallas grandes
                justifyContent: 'space-between',
                alignItems: 'center',
                gap: 3, // Espaciado entre elementos
            }}
        >
            {/* Información de contacto */}
            <Box>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    Contacto
                </Typography>
                <Typography variant="body1">Tel: +57 3003778168</Typography>
                <Typography variant="body1">Email: namstours5@gmail.com</Typography>
                <Typography variant="body1">Dirección: Cartagena, Colombia</Typography>
            </Box>

            {/* Redes Sociales */}
            <Box sx={{ textAlign: 'center' }}>
                <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 1 }}>
                    Síguenos en
                </Typography>
                <IconButton
                    href="https://facebook.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#000', marginRight: 1 }}
                >
                    <Facebook />
                </IconButton>
                <IconButton
                    href="https://www.instagram.com/namstours?igsh=dzhwMzVybGduNjY0"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#000', marginRight: 1 }}
                >
                    <Instagram />
                </IconButton>
                <IconButton
                    href="https://twitter.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    sx={{ color: '#000' }}
                >
                    <Twitter />
                </IconButton>
            </Box>

            {/* Derechos de autor */}
            <Box sx={{ textAlign: { xs: 'center', md: 'right' } }}>
                <Typography variant="body2">
                    &copy; {new Date().getFullYear()} Neams Tour. Todos los derechos reservados.
                </Typography>
            </Box>
        </Box>
    );
};

export default Footer;
