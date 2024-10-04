import React, { useEffect, useState } from 'react';
import { Box, Typography } from '@mui/material';
import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';

const MompoxMap = () => {
    const [position, setPosition] = useState([9.1434, -74.2572]); // Posición predeterminada de Mompox
    const [route, setRoute] = useState([]); // Estado para la ruta

    useEffect(() => {
        // Verifica si el navegador admite geolocalización
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(
                (pos) => {
                    const { latitude, longitude } = pos.coords;
                    setPosition([latitude, longitude]); // Establece la posición actual

                    // Obtener la ruta desde la ubicación actual hasta Mompox
                    fetch(`http://router.project-osrm.org/route/v1/driving/${longitude},${latitude};-74.2572,9.1434?overview=full&geometries=geojson`)
                        .then(response => {
                            if (!response.ok) {
                                throw new Error(`HTTP error! status: ${response.status}`);
                            }
                            return response.json();
                        })
                        .then(data => {
                            // Validar que la respuesta contiene rutas y que la geometría está presente
                            if (data.routes && data.routes.length > 0 && data.routes[0].geometry) {
                                const routeCoordinates = data.routes[0].geometry.coordinates.map(coord => [coord[1], coord[0]]);
                                setRoute(routeCoordinates); // Establece la ruta
                            } else {
                                console.error("No se encontraron rutas o la geometría en la respuesta.");
                            }
                        })
                        .catch(err => console.error("Error obteniendo la ruta: ", err));
                },
                (error) => {
                    console.error("Error obteniendo la ubicación: ", error);
                }
            );
        } else {
            console.error("La geolocalización no es soportada por este navegador.");
        }
    }, []); // Este useEffect se ejecuta una vez, cuando se monta el componente

    return (
        <div style={{ textAlign: 'center', margin: '2rem auto', maxWidth: '100%' }}>
            <Typography
                variant="h3"
                sx={{ fontWeight: 'bold', marginBottom: '2rem' }}
            >
                Nuestra ubicación
            </Typography>
            <MapContainer center={position} zoom={13} style={{ height: '400px', width: '100%' }} scrollWheelZoom={false}>
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                />

                {/* Marcador de la ubicación actual */}
                <Marker position={position}>
                    <Popup>
                        Tu ubicación actual
                    </Popup>
                </Marker>

                {/* Marcador de la ubicación de Mompox */}
                <Marker position={[9.1434, -74.2572]}>
                    <Popup>
                        Mompox
                    </Popup>
                </Marker>

                {/* Dibuja la ruta si existe */}
                {route.length > 0 && (
                    <Polyline positions={route} color="blue" />
                )}
            </MapContainer>
        </div>
    );
};

export default MompoxMap;
