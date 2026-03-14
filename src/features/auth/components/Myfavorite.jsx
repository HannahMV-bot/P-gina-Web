import React, { useState, useEffect } from "react";
import { Grid, Card, CardMedia, CardContent, Typography, Button, Box, Container, Snackbar } 
from "@mui/material";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import DeleteOutlineIcon from "@mui/icons-material/DeleteOutline";
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

export const Myfavorite = () => {

  const [favorite, setFavorite] = useState([]);
  const [open, setOpen] = useState(false);
  const [message, setMessage] = useState("");
  const [refresh, setRefresh] = useState(false);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("favorites")) || [];
    setFavorite(saved);
  }, []);

  const isBuy = (id) => {
    const buys = JSON.parse(localStorage.getItem("buys")) || [];
    return buys.some(b => b.id === id);
  };

  const removeFavorite = (id) => {
    const updated = favorite.filter((fav) => fav.id !== id);
    setFavorite(updated);
    localStorage.setItem("favorites", JSON.stringify(updated));
    window.dispatchEvent(new Event("storageUpdated"));
    setMessage("Producto eliminado de favoritos");
    setOpen(true);
  };

  const addToCart = (product) => {
    const currentBuys = JSON.parse(localStorage.getItem("buys")) || [];

    if (!currentBuys.some((b) => b.id === product.id)) {
      const updatedBuys = [...currentBuys, { ...product, quantity: 1 }];
      localStorage.setItem("buys", JSON.stringify(updatedBuys));
      window.dispatchEvent(new Event("storageUpdated"));
      setRefresh(!refresh);
      setMessage(`${product.name} agregado al carrito 🛒`);
    } else {
      setMessage("Ya está en tu carrito");
    }

    setOpen(true);
  };

  // Vaciar favoritos
  const clearFavorites = () => {
    setFavorite([]);
    localStorage.setItem("favorites", JSON.stringify([]));
    window.dispatchEvent(new Event("storageUpdated"));
    setMessage("Todos los favoritos fueron eliminados");
    setOpen(true);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>

      <Typography 
        variant="h4" 
        textAlign="center" 
        sx={{ my: 5, fontWeight: "bold" }}
      >
        MIS FAVORITOS
      </Typography>

       {favorite.length === 0 ? (
 
         <Box 
           sx={{
             textAlign: "center",
             mt: 10,
             p: 5,
             border: "1px dashed #FFA726",
             borderRadius: "12px"
           }}
         >
 
           <Typography variant="h6" sx={{ mb: 3 }}>
             Tu carrito está vacío.
           </Typography>

          <Button
            variant="contained"
            href="#/articles"
            startIcon={<ArrowBackIcon />}
            sx={{
              backgroundColor: "#FFA726",
              "&:hover": { backgroundColor: "#fb8c00" }
            }}
          >
            Volver a la tienda
          </Button>

        </Box>

      ) : (

        <>
          <Grid container spacing={3} justifyContent="center">

            {favorite.map((product) => (

              <Grid item xs={12} sm={6} md={3} key={product.id}>

                <Card
                  sx={{
                    boxShadow: 3,
                    height: "100%",
                    border: "2px solid #FFA726",
                    borderRadius: "10px"
                  }}
                >

                  <CardMedia
                    component="img"
                    image={product.img}
                    alt={product.name}
                    sx={{ height: 260, objectFit: "cover" }}
                  />

                  <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>

                    <Typography sx={{ fontWeight: "bold" }}>
                      {product.name}
                    </Typography>

                    <Typography sx={{ mb: 2 }}>
                      {product.price}
                    </Typography>

                    <Box
                      sx={{
                        display: "flex",
                        gap: 1,
                        justifyContent: "center",
                        flexWrap: "wrap"
                      }}
                    >

                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          backgroundColor: isBuy(product.id) ? "#FFA726" : "black",
                          '&:hover': {
                            backgroundColor: isBuy(product.id) ? "#fb8c00" : "#333"
                          }
                        }}
                        startIcon={<ShoppingCartIcon />}
                        onClick={() => addToCart(product)}
                      >
                        Carrito
                      </Button>

                      <Button
                        size="small"
                        variant="contained"
                        sx={{
                          backgroundColor: "#FFA726",
                          '&:hover': { backgroundColor: "#fb8c00" }
                        }}
                        startIcon={<DeleteOutlineIcon />}
                        onClick={() => removeFavorite(product.id)}
                      >
                        Eliminar
                      </Button>

                    </Box>

                  </CardContent>

                </Card>

              </Grid>

            ))}

          </Grid> 

          {/* BOTON ABAJO */}
          <Box textAlign="center" sx={{ mt: 8 }}>
            <Button
              variant="contained"
              startIcon={<DeleteOutlineIcon />}
              onClick={clearFavorites}
              sx={{
                backgroundColor: "#ffa726",
                '&:hover': { backgroundColor: "#fb8c00" }
              }}
            >
              Vaciar favoritos
            </Button>
          </Box>
        </>
      )}

      <Snackbar
        open={open}
        autoHideDuration={2000}
        onClose={() => setOpen(false)}
        message={message}
      />

    </Container>
  );
};