import React, { useState, useEffect } from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Container,
  IconButton,
  Paper
} from "@mui/material";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

export const Mycart = () => {

  const [cart, setCart] = useState([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("buys")) || [];
    setCart(saved);
  }, []);

  const updateQuantity = (id, delta) => {

    const updated = cart.map(item => {

      if (item.id === id) {
        const newQty = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQty };
      }

      return item;
    });

    setCart(updated);
    localStorage.setItem("buys", JSON.stringify(updated));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  const removeItem = (id) => {

    const updated = cart.filter(item => item.id !== id);

    setCart(updated);
    localStorage.setItem("buys", JSON.stringify(updated));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  const clearCart = () => {

    setCart([]);
    localStorage.setItem("buys", JSON.stringify([]));
    window.dispatchEvent(new Event("storageUpdated"));
  };

  const calculateTotal = () => {

    return cart.reduce((acc, item) => {

      const price = parseInt(item.price.replace(/[$.]/g, ""));
      return acc + price * item.quantity;

    }, 0);
  };

  return (

    <Container maxWidth="lg" sx={{ mt: 5, mb: 5 }}>

      <Typography
        variant="h4"
        textAlign="center"
        sx={{ mb: 5, fontWeight: "bold" }}
      >
        MI CARRITO
      </Typography>

      {cart.length === 0 ? (

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

        <Grid container spacing={3}>

          {/* PRODUCTOS */}
          <Grid item xs={12} md={8}>

            {cart.map((product) => (

              <Card
                key={product.id}
                sx={{
                  display: "flex",
                  mb: 2,
                  border: "2px solid #FFA726",
                  borderRadius: "10px"
                }}
              >

                <CardMedia
                  component="img"
                  sx={{
                    width: 120,
                    height: 120,
                    objectFit: "cover"
                  }}
                  image={product.img}
                  alt={product.name}
                />

                <CardContent
                  sx={{
                    flex: 1,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >

                  <Box>

                    <Typography variant="h6" sx={{ fontWeight: "bold" }}>
                      {product.name}
                    </Typography>

                    <Typography color="text.secondary">
                      {product.price}
                    </Typography>

                  </Box>

                  {/* CONTROLES */}
                  <Box display="flex" alignItems="center">

                    <IconButton
                      onClick={() => updateQuantity(product.id, -1)}
                    >
                      <RemoveIcon />
                    </IconButton>

                    <Typography sx={{ mx: 2, fontWeight: "bold" }}>
                      {product.quantity}
                    </Typography>

                    <IconButton
                      onClick={() => updateQuantity(product.id, 1)}
                    >
                      <AddIcon />
                    </IconButton>

                    <IconButton
                      sx={{ color: "#FFA726" }}
                      onClick={() => removeItem(product.id)}
                    >
                      <DeleteForeverIcon />
                    </IconButton>

                  </Box>

                </CardContent>

              </Card>

            ))}

          </Grid>

          {/* RESUMEN */}
          <Grid item xs={12} md={4}>

            <Paper
              sx={{
                p: 3,
                border: "2px solid #FFA726",
                borderRadius: "10px"
              }}
            >

              <Typography
                variant="h5"
                sx={{ mb: 2, fontWeight: "bold" }}
              >
                PEDIDO
              </Typography>

              <Typography
                variant="h4"
                sx={{ mb: 3, fontWeight: "bold" }}
              >
                Total: ${calculateTotal().toLocaleString("es-ES")}
              </Typography>

              <Button
                fullWidth
                variant="contained"
                sx={{
                  backgroundColor: "#000",
                  mb: 1,
                  "&:hover": { backgroundColor: "#fb8c00" }
                }}
              >
                Pagar ahora
              </Button>

              <Button
                fullWidth
                variant="contained"
                onClick={clearCart}
                sx={{
                  backgroundColor: "#000",
                  mb: 1,
                  "&:hover": { backgroundColor: "#fb8c00" }
                }}
              >
                Vaciar Carrito
              </Button>

              <Button
                fullWidth
                variant="contained"
                href="#/articles"
                sx={{
                  backgroundColor: "#000",
                  "&:hover": { backgroundColor: "#fb8c00" }
                }}
              >
                Seguir comprando
              </Button>

            </Paper>

          </Grid>

        </Grid>

      )}

    </Container>
  );
};