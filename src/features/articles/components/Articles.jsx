import React from "react";
import {
  Grid,
  Card,
  CardMedia,
  CardContent,
  Typography,
  Button,
  Box,
  Snackbar,
  Container,
  Fab,
  Zoom,
  useScrollTrigger
} from "@mui/material";

import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';

/* --- LISTA MEN --- */
const menList = [
  { id: 1, name: "CAMISETA PASSAGGIO", price: "$470.000", img: "/img/negro.png" },
  { id: 2, name: "CAMISETA TATTILE", price: "$390.000", img: "/img/tattile.png" },
  { id: 3, name: "CAMISETA RIFIORIRE", price: "$470.000", img: "/img/rifiorire.png" },
  { id: 4, name: "CAMISETA EUFORIA", price: "$390.000", img: "/img/euforia.png" },
  { id: 5, name: "BUZO SPERGIURO", price: "$700.000", img: "/img/buzo1.png" },
  { id: 6, name: "HOODIE RADUNARE", price: "$580.000", img: "/img/hoodie2.png" },
  { id: 7, name: "HOODIE BURGUNDY", price: "$600.000", img: "/img/mens.png" },
  { id: 8, name: "SWEATER ARGINA", price: "$470.000", img: "/img/argina.png" },
  { id: 9, name: "SUDADERA ALBA", price: "$500.000", img: "/img/alba.png" },
  { id: 10, name: "SUDADERA RESPIRO", price: "$450.000", img: "/img/respiro.png" },
  { id: 11, name: "SUDADERA RICAMO", price: "$500.000", img: "/img/sudadera.png" },
  { id: 12, name: "SUDADERA SAFARI", price: "$500.000", img: "/img/ricamo.png" },
  { id: 13, name: "GORRA BOSCHETTO", price: "$300.000", img: "/img/nude.png" },
  { id: 14, name: "GORRA AMICIZIA", price: "$270.000", img: "/img/amicizia.png" },
  { id: 15, name: "GORRA PENDIO", price: "$300.000", img: "/img/pendio.png" },
  { id: 16, name: "GORRA SOLCO", price: "$270.000", img: "/img/solco.png" },
  { id: 17, name: "TENIS SCARPON", price: "$1.300.000", img: "/img/tenis.png" },
  { id: 18, name: "ZAPATO PROVVIDENZA", price: "$1.200.000", img: "/img/zapat.png" },
  { id: 19, name: "SNEAKERS QUASAR", price: "$1.300.000", img: "/img/quasar.png" },
  { id: 20, name: "ZAPATO PROVVIDENZA", price: "$1.200.000", img: "/img/znegro.png" },
];

/* --- LISTA WOMEN --- */
const womenList = [
  { id: 21, name: "UNDERWEAR", price: "$300.000", img: "/img/mujer.png" },
  { id: 22, name: "VESTIDO BAÑO", price: "$350.000", img: "/img/bano.png" },
  { id: 23, name: "BIKINI RESILIENZA", price: "$350.000", img: "/img/bikin.png" },
  { id: 24, name: "SWIM SUIT", price: "$350.000", img: "/img/green.png" },
  { id: 25, name: "BODY RIPIANTO", price: "$350.000", img: "/img/bod.png" },
  { id: 26, name: "BODY RIPIANTO", price: "$350.000", img: "/img/rojo.png" },
  { id: 27, name: "BODYSUITS CRUDELE", price: "$38.000", img: "/img/verde.png" },
  { id: 28, name: "BODY RIPIANTO", price: "$350.000", img: "/img/body.png" },
  { id: 29, name: "FALDA KARMICO", price: "$400.000", img: "/img/falda.png" },
  { id: 30, name: "SHORT ESTASI", price: "$250.000", img: "/img/short2.png" },
  { id: 31, name: "PANTALÓN RADIOSO", price: "$580.000", img: "/img/panta.png" },
  { id: 32, name: "SUDADERA SENTIERO", price: "$450.000", img: "/img/suda.png" },
  { id: 33, name: "OVEROL BETELGEUSE", price: "$325.000", img: "/img/overol.png" },
  { id: 34, name: "BLUSA LUNARE", price: "$290.000", img: "/img/blusa.png" },
  { id: 35, name: "CROP TOP", price: "$300.000", img: "/img/crop.png" },
  { id: 36, name: "TANK TOP", price: "$250.000", img: "/img/tank.png" },
  { id: 37, name: "VESTIDO OPULENTIA", price: "$380.000", img: "/img/vestido.png" },
  { id: 38, name: "SWEATER SPIRITO", price: "$390.000", img: "/img/swe.png" },
  { id: 39, name: "VESTIDO OPULENTIA", price: "$380.000", img: "/img/ves.png" },
  { id: 40, name: "SWEATER CROPPED", price: "$470.000", img: "/img/b.png" },
];

/* --- LÓGICA DE FAVORITOS Y COMPRAS --- */
const isFavorite = (id) => {
  const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
  return favorites.some(f => f.id === id);
};

const isBuy = (id) => {
  const buys = JSON.parse(localStorage.getItem("buys")) || [];
  return buys.some(b => b.id === id);
};

const addToFavorites = (product, setMessage, setOpen) => {
  const current = JSON.parse(localStorage.getItem('favorites')) || [];
  
  if (!current.some(f => f.id === product.id)) {
    localStorage.setItem('favorites', JSON.stringify([...current, product]));
    window.dispatchEvent(new Event("storageUpdated")); 
    setMessage(`${product.name} agregado a favoritos `);
  } else {
    setMessage("Ya está en tus favoritos");
  }
  setOpen(true);
};

// Lógica de compra enlazada con Mycart
const addToBuys = (product, setMessage, setOpen) => {
  const currentBuys = JSON.parse(localStorage.getItem("buys")) || [];
  
  if (!currentBuys.some((b) => b.id === product.id)) {
    // Se agrega quantity: 1 para compatibilidad con Mycart
    const productWithQty = { ...product, quantity: 1 };
    localStorage.setItem('buys', JSON.stringify([...currentBuys, productWithQty]));
    window.dispatchEvent(new Event("storageUpdated"));
    setMessage(`${product.name} agregado a compras `);
  } else {
    setMessage("Ya está en tus compras");
  }
  setOpen(true);
};

export const Articles = () => {
  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const trigger = useScrollTrigger({
    disableHysteresis: true,
    threshold: 100,
  });

  const handleClick = (event) => {
    const anchor = (event.target.ownerDocument || document).querySelector('#back-to-top-anchor');
    if (anchor) anchor.scrollIntoView({ behavior: 'smooth', block: 'center' });
  };

  const ProductCard = ({ product }) => (
    <Grid item xs={12} sm={6} md={3}>
      <Card sx={{
        boxShadow: 3,
        height: "100%",
        display: "flex",
        flexDirection: "column",
        border: "2px solid #FFA726",
        borderRadius: "10px"
      }}>
        <CardMedia component="img" image={product.img} alt={product.name} sx={{ height: 260, objectFit: "cover" }} />
        <CardContent sx={{ textAlign: "center", flexGrow: 1 }}>
          <Typography sx={{ fontWeight: "bold" }}>{product.name}</Typography>
          <Typography sx={{ mb: 2 }}>{product.price}</Typography>
          <Box sx={{ display: "flex", gap: 1, justifyContent: "center", flexWrap: "wrap" }}>
            <Button size="small" variant="contained"
              sx={{ backgroundColor: isBuy(product.id) ? "#FFA726" : "black", color: "white", '&:hover': { backgroundColor: isBuy(product.id) ? "#FFA726" : "#333" } }}
              startIcon={<ShoppingCartIcon />}
              onClick={() => addToBuys(product, setMessage, setOpen)}
            >Carrito</Button>
            <Button size="small" variant="contained"
              sx={{ backgroundColor: isFavorite(product.id) ? "#FFA726" : "black", color: "white", '&:hover': { backgroundColor: isFavorite(product.id) ? "#FFA726" : "#333" } }}
              startIcon={isFavorite(product.id) ? <FavoriteIcon /> : <FavoriteBorderIcon />}
              onClick={() => addToFavorites(product, setMessage, setOpen)}
            >Favorito</Button>
          </Box>
        </CardContent>
      </Card>
    </Grid>
  );

  return (
    <Container maxWidth="lg">
      <div id="back-to-top-anchor" />
      <Typography variant="h4" textAlign="center" sx={{ my: 5, fontWeight: "bold" }}>MEN</Typography>
      <Grid container spacing={3} justifyContent="center">
        {menList.map(p => <ProductCard key={p.id} product={p} />)}
      </Grid>
      <Box sx={{ my: 6, height: 350 }}>
        <img src="/img/Match.png" alt="Banner" style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: "8px" }} />
      </Box>
      <Typography variant="h4" textAlign="center" sx={{ my: 5, fontWeight: "bold" }}>WOMEN</Typography>
      <Grid container spacing={3} justifyContent="center">
        {womenList.map(p => <ProductCard key={p.id} product={p} />)}
      </Grid>
      <Snackbar open={open} autoHideDuration={2000} onClose={() => setOpen(false)} message={message} />
      <Zoom in={trigger}>
        <Box onClick={handleClick} role="presentation" sx={{ position: 'fixed', bottom: 32, right: 32, zIndex: 1000 }}>
          <Fab sx={{ backgroundColor: 'white', color: '#FFA726', '&:hover': { backgroundColor: '#000' } }} size="small">
            <KeyboardArrowUpIcon />
          </Fab>
        </Box>
      </Zoom>
    </Container>
  );
};

export default Articles;