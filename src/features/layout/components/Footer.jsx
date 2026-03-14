import React from 'react';
import { Box, Container, Grid, Typography, Link, IconButton } from '@mui/material';
import { Facebook, Instagram, YouTube, MusicNote } from '@mui/icons-material';

export const Footer = () => {
  return (
    <Box sx={{ bgcolor: '#000', color: '#fff', py: 8, mt: 5, borderTop: '1px solid #222' }}>
      <Container maxWidth="lg">
        
        <Grid container spacing={6}>
          {/* Columna 1: CLEMONT */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 'bold', mb: 2, borderBottom: '1px solid #fff', display: 'inline-block' }}>
              CLEMONT
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Brand', 'Colecciones', 'Nuestras Tiendas', 'Formulario PQRS'].map(text => (
                <Link href="#" key={text} color="inherit" underline="none" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Columna 2: INFORMATION */}
          <Grid item xs={12} md={3}>
            <Typography sx={{ fontWeight: 'bold', mb: 2, borderBottom: '1px solid #fff', display: 'inline-block' }}>
              INFORMATION
            </Typography>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
              {['Políticas de Cambios y Devoluciones', 'Políticas de Envíos', 'Políticas de Privacidad', 'Términos y Condiciones'].map(text => (
                <Link href="#" key={text} color="inherit" underline="none" sx={{ opacity: 0.7, '&:hover': { opacity: 1 } }}>
                  {text}
                </Link>
              ))}
            </Box>
          </Grid>

          {/* Columna 3: SLOGAN (Integrado y sin recuadro) */}
          <Grid item xs={12} md={6} sx={{ 
            display: 'flex', 
            flexDirection: 'column', 
            justifyContent: 'center', 
            alignItems: 'center',
            textAlign: 'center'
          }}>
            <Typography variant="h6" sx={{ fontWeight: 'bold', mb: 1 }}>
              CAMINA CON ELEGANCIA.
            </Typography>
            <Typography sx={{ opacity: 0.8, fontStyle: 'italic' }}>
              PERFECTO PARA CUALQUIER OCASIÓN.
            </Typography>
          </Grid>
        </Grid>

        {/* REDES SOCIALES */}
        <Box sx={{ mt: 5, pt: 3, borderTop: '1px solid #333' }}>
          {[Facebook, Instagram, YouTube, MusicNote].map((Icon, i) => (
            <IconButton key={i} sx={{ border: '1px solid #333', color: 'white', mr: 2 }}>
              <Icon fontSize="small" />
            </IconButton>
          ))}
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;