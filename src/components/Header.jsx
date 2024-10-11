import React, { useState, useEffect } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Button, Drawer, List, ListItem, ListItemText } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import HeroVideo from './HeroVideo'; // Importar tu componente de video
import { Link } from 'react-scroll'; // Importar Link desde react-scroll
import { useMediaQuery, useTheme } from '@mui/material';

const Header = () => {
  const [navBackground, setNavBackground] = useState('transparent');
  const [textColor, setTextColor] = useState('#fff');
  const [drawerOpen, setDrawerOpen] = useState(false); // Estado para controlar el Drawer

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setNavBackground('#fff'); // Cambia el fondo a blanco
        setTextColor('#000'); // Cambia el texto a negro
      } else {
        setNavBackground('transparent'); // Vuelve a transparente
        setTextColor('#fff'); // Vuelve el texto a blanco
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Función para abrir y cerrar el Drawer
  const toggleDrawer = (open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }
    setDrawerOpen(open);
  };

  // Contenido del menú lateral
  const sideMenu = (
    <List sx={{ width: 250 }}>
      <ListItem button onClick={toggleDrawer(false)}>
        <Link to="inicio" smooth={true} duration={500}>
          <ListItemText primary="Inicio" />
        </Link>
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <Link to="rutas" smooth={true} duration={500}>
          <ListItemText primary="Rutas" />
        </Link>
      </ListItem>
      <ListItem button onClick={toggleDrawer(false)}>
        <Link to="contacto" smooth={true} duration={500}>
          <ListItemText primary="Contacto" />
        </Link>
      </ListItem>
    </List>
  );

  return (
    <>
      <AppBar position="fixed" sx={{ background: navBackground, boxShadow: 'none', transition: 'background-color 0.3s ease' }}>
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ color: textColor, display: { xs: 'flex', md: 'none' } }} // Mostrar solo en pantallas pequeñas
            onClick={toggleDrawer(true)} // Abre el Drawer al hacer clic en el icono
          >
            <MenuIcon />
          </IconButton>

          <Typography variant="h6" sx={{ flexGrow: 1, fontSize: '1.5rem', color: textColor }}>
            Nams Tour
          </Typography>

          {/* Botones para pantallas grandes */}
          <Link to="inicio" smooth={true} duration={500}>
            <Button
              sx={{
                fontSize: '1.2rem',
                color: textColor,
                position: 'relative',
                overflow: 'hidden',
                display: { xs: 'none', md: 'inline-flex' }, // Ocultar en pantallas pequeñas
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '0',
                  left: '50%',
                  backgroundColor: textColor,
                  transition: 'width 0.3s ease, left 0.3s ease',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
              }}
            >
              Inicio
            </Button>
          </Link>

          <Link to="rutas" smooth={true} duration={500}>
            <Button
              sx={{
                fontSize: '1.2rem',
                color: textColor,
                position: 'relative',
                overflow: 'hidden',
                display: { xs: 'none', md: 'inline-flex' }, // Ocultar en pantallas pequeñas
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '0',
                  left: '50%',
                  backgroundColor: textColor,
                  transition: 'width 0.3s ease, left 0.3s ease',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
              }}
            >
              Rutas
            </Button>
          </Link>

          <Link to="contacto" smooth={true} duration={500}>
            <Button
              sx={{
                fontSize: '1.2rem',
                color: textColor,
                position: 'relative',
                overflow: 'hidden',
                display: { xs: 'none', md: 'inline-flex' }, // Ocultar en pantallas pequeñas
                '&:after': {
                  content: '""',
                  position: 'absolute',
                  width: '0',
                  height: '2px',
                  bottom: '0',
                  left: '50%',
                  backgroundColor: textColor,
                  transition: 'width 0.3s ease, left 0.3s ease',
                },
                '&:hover:after': {
                  width: '100%',
                  left: '0',
                },
              }}
            >
              Contacto
            </Button>
          </Link>
        </Toolbar>
      </AppBar>

      {/* Drawer para pantallas pequeñas */}
      <Drawer anchor="left" open={drawerOpen} onClose={toggleDrawer(false)}>
        {sideMenu}
      </Drawer>

      <HeroVideo /> {/* Aquí usamos el componente de la imagen o video */}
    </>
  );
};

export default Header;
