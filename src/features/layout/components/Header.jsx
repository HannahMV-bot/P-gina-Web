import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Box, TextField, 
  IconButton, Badge, Drawer, List, ListItem, ListItemButton, ListItemText
} from "@mui/material";

// Iconos
import MenuIcon from '@mui/icons-material/Menu';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AutoAwesomeTwoToneIcon from '@mui/icons-material/AutoAwesomeTwoTone';
import LocalOfferTwoToneIcon from '@mui/icons-material/LocalOfferTwoTone';
import PeopleAltTwoToneIcon from '@mui/icons-material/PeopleAltTwoTone';
import ArticleTwoToneIcon from '@mui/icons-material/ArticleTwoTone';
import FavoriteTwoToneIcon from '@mui/icons-material/FavoriteTwoTone';
import SearchRoundedIcon from '@mui/icons-material/SearchRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCartOutlined';

export const Header = () => {

  const [favCount, setFavCount] = useState(0);
  const [buyCount, setBuyCount] = useState(0);
  const [openMenu, setOpenMenu] = useState(false);

  const updateCounts = () => {
    const favorites = JSON.parse(localStorage.getItem("favorites")) || [];
    const buys = JSON.parse(localStorage.getItem("buys")) || [];

    setFavCount(favorites.length);
    setBuyCount(buys.length);
  };

  useEffect(() => {
    updateCounts();
    window.addEventListener("storageUpdated", updateCounts);
    return () => window.removeEventListener("storageUpdated", updateCounts);
  }, []);

  return (
    <AppBar position="static" sx={{ backgroundColor: "#000" }}>

      <Toolbar sx={{ display: "flex", gap: 2 }}>

        {/* MENU HAMBURGUESA (SOLO CELULAR) */}
        <IconButton
          color="inherit"
          sx={{ display: { xs: "flex", md: "none" } }}
          onClick={() => setOpenMenu(true)}
        >
          <MenuIcon />
        </IconButton>

        {/* LOGO */}
        <Typography variant="h6" sx={{ fontWeight: "bold" }}>
          CLEMONT
        </Typography>

        {/* MENU COMPUTADOR */}
        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>

          <IconButton color="inherit" component={NavLink} to="/">
            <HomeTwoToneIcon />
            <Typography sx={{ ml: 1 }}>Inicio</Typography>
          </IconButton>

          <IconButton color="inherit" component={NavLink} to="/articles">
            <ArticleTwoToneIcon />
            <Typography sx={{ ml: 1 }}>Artículos</Typography>
          </IconButton>

          <IconButton color="inherit" component={NavLink} to="/offers">
            <LocalOfferTwoToneIcon />
            <Typography sx={{ ml: 1 }}>Ofertas</Typography>
          </IconButton>

          <IconButton color="inherit" component={NavLink} to="/myaccount">
            <PeopleAltTwoToneIcon />
            <Typography sx={{ ml: 1 }}>Mi Cuenta</Typography>
          </IconButton>

          {/* FAVORITOS */}
          <IconButton color="inherit" component={NavLink} to="/Myfavorite">
            <Badge 
              badgeContent={favCount}
              color="error"
              sx={{ '& .MuiBadge-badge': { background: '#ED6C02', fontSize: 10, height: 18, minWidth: 18 } }}
            >
              <FavoriteTwoToneIcon />
            </Badge>
            <Typography sx={{ ml: 1 }}>Favoritos</Typography>
          </IconButton>

          {/* COMPRAS */}
          <IconButton color="inherit" component={NavLink} to="/Mybuys">
            <AutoAwesomeTwoToneIcon />
            <Typography sx={{ ml: 1 }}>Compras</Typography>
          </IconButton>

        </Box>

        {/* BUSCADOR */}
        <Box sx={{ display: "flex", alignItems: "center", ml: "auto" }}>
          <TextField
            size="small"
            variant="outlined"
            placeholder="Buscar..."
            sx={{
              backgroundColor: "white",
              borderRadius: 1,
              display: { xs: "none", md: "flex" }
            }}
          />
          <IconButton color="inherit">
            <SearchRoundedIcon />
          </IconButton>
        </Box>

        {/* CARRITO */}
        <IconButton color="inherit" component={NavLink} to="/Mycart">
          <Badge
            badgeContent={buyCount}
            color="error"
            sx={{ '& .MuiBadge-badge': { background: '#ED6C02', fontSize: 10, height: 18, minWidth: 18 } }}
          >
            <ShoppingCartIcon />
          </Badge>
          <Typography sx={{ ml: 1, display: { xs: "none", md: "flex" } }}>
            Carrito
          </Typography>
        </IconButton>

      </Toolbar>

      {/* MENU LATERAL CELULAR */}
      <Drawer
        anchor="left"
        open={openMenu}
        onClose={() => setOpenMenu(false)}
        PaperProps={{
          sx: {
            width: 250,
            backgroundColor: "#000",
            color: "white"
          }
        }}
      >
        <Box sx={{ width: 250 }}>

          {/* TITULO MENU */}
          <Typography
            sx={{
              p: 2,
              textAlign: "center",
              fontWeight: "bold",
              color: "#ED6C02",
              borderBottom: "1px solid #333"
            }}
          >
            CLEMONT
          </Typography>

          <List>

            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/" 
                onClick={() => setOpenMenu(false)}
                sx={{ "&:hover": { backgroundColor: "#111" } }}
              >
                <ListItemText primary="Inicio" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/articles" 
                onClick={() => setOpenMenu(false)}
                sx={{ "&:hover": { backgroundColor: "#111" } }}
              >
                <ListItemText primary="Artículos" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/offers" 
                onClick={() => setOpenMenu(false)}
                sx={{ "&:hover": { backgroundColor: "#111" } }}
              >
                <ListItemText primary="Ofertas" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/myaccount" 
                onClick={() => setOpenMenu(false)}
                sx={{ "&:hover": { backgroundColor: "#111" } }}
              >
                <ListItemText primary="Mi Cuenta" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/Myfavorite" 
                onClick={() => setOpenMenu(false)}
                sx={{ "&:hover": { backgroundColor: "#111" } }}
              >
                <ListItemText primary="Favoritos" />
              </ListItemButton>
            </ListItem>

            <ListItem disablePadding>
              <ListItemButton 
                component={NavLink} 
                to="/Mybuys" 
                onClick={() => setOpenMenu(false)}
                sx={{ "&:hover": { backgroundColor: "#111" } }}
              >
                <ListItemText primary="Compras" />
              </ListItemButton>
            </ListItem>

          </List>

        </Box>
      </Drawer>

    </AppBar>
  );
};

export default Header;