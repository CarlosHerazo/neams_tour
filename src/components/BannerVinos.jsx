import React from 'react';
import { Card, CardContent, CardMedia, Typography, Button, Grid, Box } from '@mui/material';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const bannerVinos = [
  {
    title: 'Vino de corozo',
    price: '$150.000',
    promotion: 'vino de corozo, ', 
    img: './src/assets/img/vino_1.jpg',
  },
  
];

const BannerVinos = () => {
  return (
    <Box sx={{ padding: '4rem 2rem', backgroundColor: '#f0f0f0' }}>
      <Typography
        variant="h3"
        sx={{ fontWeight: 'bold', marginBottom: '2rem', textAlign: 'center' }}
      >
        Nuestros vinos
      </Typography>
      <Carousel showThumbs={false} infiniteLoop autoPlay interval={5000}>
        {Array.from({ length: Math.ceil(bannerVinos.length / 3) }).map((_, carouselIndex) => (
          <Box key={carouselIndex}>
            <Grid container spacing={2} justifyContent="center">
              {bannerVinos.slice(carouselIndex * 3, carouselIndex * 3 + 3).map((oferta, index) => (
                <Grid item xs={12} sm={6} md={4} key={index} sx={{ display: 'flex', justifyContent: 'center' }}>
                  <Card
                    sx={{
                      width: '80%',
                    //   padding: '1rem',
                      marginTop: '2rem',
                      marginBottom: '2rem',
                    //   borderRadius: '12px',
                      boxShadow: '0 6px 12px rgba(0, 0, 0, 0.2)',
                      backgroundColor: '#fff',
                      textAlign: 'center',
                      transition: 'transform 0.3s ease',
                      '&:hover': {
                        transform: 'scale(1.05)',
                      },
                    }}
                  >
                    <CardMedia
                      component="img"
                      alt={oferta.title}
                      height="140"
                      image={oferta.img}
                      sx={{marginBottom: '1rem' }}
                    />
                    <CardContent>
                      <Typography variant="h5" sx={{ fontWeight: 'bold', marginTop: '1rem' }}>
                        {oferta.title}
                      </Typography>
                      <Typography variant="h6" sx={{ color: '#ff5722', margin: '0.5rem 0' }}>
                        {oferta.price}
                      </Typography>
                      <Typography variant="body1" sx={{ color: '#555', marginBottom: '1rem' }}>
                        {oferta.promotion}
                      </Typography>
                    </CardContent>
                    <Button
                      variant="contained"
                      sx={{
                        backgroundColor: '#ff5722',
                        color: '#fff',
                        '&:hover': {
                          backgroundColor: '#e64a19',
                        },
                        padding: '0.5rem 1.5rem',
                        marginBottom: '1rem',
                      }}
                    >
                      Más Información
                    </Button>
                  </Card>
                </Grid>
              ))}
            </Grid>
          </Box>
        ))}
      </Carousel>
    </Box>
  );
};

export default BannerVinos;
