import React, { useState } from 'react';
import { Box, TextField, Button, Typography } from '@mui/material';

const ContactForm = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm({
            ...form,
            [name]: value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aquí iría la lógica de envío de formulario (backend)
        console.log(form);
    };

    return (
        <Box
            component="form"
            sx={{
                width: '100% - 40px', // Ocupar todo el ancho
                margin: '0 auto',
                display: 'flex',
                flexDirection: 'column',
                gap: 2,
                p: 3, // Espaciado interno más cómodo
                boxShadow: '0px 2px 10px rgba(0, 0, 0, 0.05)', // Sombra sutil
                backgroundColor: '#f9f9f9', // Fondo claro
            }}
            onSubmit={handleSubmit}
        >
            <Typography variant="h5" sx={{ textAlign: 'center', marginBottom: 1, fontWeight: 'bold', color: '#333' }}>
                Contáctanos
            </Typography>

            {/* Campo de Nombre */}
            <TextField
                label="Nombre"
                name="name"
                value={form.name}
                onChange={handleChange}
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{ sx: { color: '#666' } }} // Color de etiqueta suave
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                    },
                }}
            />

            {/* Campo de Correo */}
            <TextField
                label="Correo"
                name="email"
                value={form.email}
                onChange={handleChange}
                type="email"
                fullWidth
                required
                variant="outlined"
                InputLabelProps={{ sx: { color: '#666' } }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                    },
                }}
            />

            {/* Campo de Mensaje */}
            <TextField
                label="Mensaje"
                name="message"
                value={form.message}
                onChange={handleChange}
                fullWidth
                required
                multiline
                rows={4}
                variant="outlined"
                InputLabelProps={{ sx: { color: '#666' } }}
                sx={{
                    '& .MuiOutlinedInput-root': {
                        borderRadius: '6px',
                    },
                }}
            />

            {/* Botón de Enviar */}
            <Button
                type="submit"
                variant="contained"
                color="primary"
                size="large"
                sx={{
                    padding: '10px 0',
                    fontWeight: 'bold',
                    backgroundColor: '#ff5722', // Color atractivo
                    '&:hover': {
                        backgroundColor: '#ff5722',
                    },
                    textTransform: 'none', // Mantener el texto sin capitalizar
                }}
            >
                Enviar
            </Button>
        </Box>
    );
};

export default ContactForm;
