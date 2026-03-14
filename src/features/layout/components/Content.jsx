import React from "react";
import { Typography, Box, Card, CardMedia, CardContent, Container, Button } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub'; // Asegúrate de tener instalado @mui/icons-material

export const Content = () => {

  const renderCarrusel = (titulo, items) => (
    <Box sx={{ mb: { xs: 6, md: 10 }, width: "100%" }}>
      
      <Typography
        variant="h4"
        sx={{
          textAlign: "center",
          fontSize: { xs: "1.5rem", md: "2.2rem" },
          mb: 3
        }}
      >
        {titulo}
      </Typography>

      <Box
        sx={{
          display: "flex",
          overflowX: "auto",
          gap: { xs: 2, md: 3 },
          pb: 2,
          scrollSnapType: "x mandatory",
          "&::-webkit-scrollbar": { display: "none" },
          px: { xs: 2, md: 0 } 
        }}
      >
        {items.map((cat) => (
          <Card
            key={cat.name}
            sx={{
              minWidth: { xs: 150, sm: 180, md: 230 },
              flexShrink: 0,
              scrollSnapAlign: "start",
              boxShadow: 3,
              border: "3px solid #ED6C02",
              borderRadius: "12px"
            }}
          >
            <CardMedia
              component="img"
              image={cat.img}
              alt={cat.name}
              sx={{
                height: { xs: 180, sm: 220, md: 250 },
                objectFit: "cover"
              }}
            />

            <CardContent>
              <Typography
                variant="h6"
                align="center"
                sx={{ fontSize: { xs: "0.9rem", md: "1rem" } }}
              >
                {cat.name}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </Box>
    </Box>
  );

  return (
    <Container maxWidth="lg" sx={{ px: { xs: 1, sm: 2 }, pb: 8 }}>

      {/* Banner con borde naranja */}
      <Box sx={{ textAlign: "center", mt: 4, mb: 6 }}>
        <Box
          sx={{
            position: "relative",
            width: "100%",
            height: { xs: 180, sm: 220, md: 300 },
            mb: 2,
            overflow: "hidden",
            borderRadius: "8px"
          }}
        >
          <img
            src="/img/fondo.png"
            alt="Tienda"
            style={{
              width: "100%",
              height: "125%",
              objectFit: "cover",
              borderRadius: "8px"
            }}
          />
        </Box>

        <Typography
          variant="h3"
          sx={{
            fontSize: { xs: "1.5rem", md: "2.8rem" },
            fontWeight: "bold"
          }}
        >
          TIENDA DE ROPA
        </Typography>
      </Box>

      {/* MEN */}
      {renderCarrusel("MEN", [
        { name: "CAMISETA", img: "/img/camiseta-oversized.png" },
        { name: "GAFAS", img: "/img/gafas.png" },
        { name: "PANTALÓN", img: "/img/pantalon.png" },
        { name: "GORRA", img: "/img/gorra-gris.png" },
        { name: "HOODIE", img: "/img/hoodie.png" },
        { name: "CALZADO", img: "/img/zapato.png" },
        { name: "BERMUDA", img: "/img/bermuda.png" }
      ])}

      {/* WOMEN */}
      {renderCarrusel("WOMEN", [
        { name: "BODY", img: "/img/body.png" },
        { name: "GAFAS", img: "/img/gafasw.png" },
        { name: "PANTS", img: "/img/jean.png" },
        { name: "SWEATERS", img: "/img/sweater.png" },
        { name: "SWIMWEAR", img: "/img/bikini.png" },
        { name: "TOP", img: "/img/top.png" },
        { name: "SHORT", img: "/img/short.png" }
      ])}

      {/* SECCIÓN GITHUB AL FINAL */}
      <Box sx={{ display: "flex", justifyContent: "center", mt: 5 }}>
        <Button
          variant="contained"
          startIcon={<GitHubIcon />}
          href="https://github.com/HannahMV-bot/P-gina-Web.git"
          target="_blank"
          rel="noopener noreferrer"
          sx={{
            backgroundColor: "black",
            color: "white",
            fontWeight: "bold",
            padding: "12px 24px",
            borderRadius: "50px",
            textTransform: "none",
            fontSize: "1rem",
            border: "2px solid #ED6C02",
            '&:hover': {
              backgroundColor: "#333",
              boxShadow: "0px 0px 15px #ED6C02",
              border: "2px solid white"
            }
          }}
        >
          Ver Proyecto en GitHub
        </Button>
      </Box>

    </Container>
  );
};

export default Content;