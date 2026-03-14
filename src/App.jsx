import { HashRouter, Routes, Route } from "react-router-dom";
import { CssBaseline, Box } from "@mui/material"; // Importamos CssBaseline y Box

// Componentes de Layout
import { Header } from "./features/layout/components/Header";
import { Footer } from "./features/layout/components/Footer";
import { Content } from "./features/layout/components/Content";

// Componentes de Auth
import { Myaccount } from "./features/auth/components/Myaccount";
import { Mycart } from "./features/auth/components/Mycart";
import { Myfavorite } from "./features/auth/components/Myfavorite";

// Componentes de Articles
import { Articles } from "./features/articles/components/Articles";
import { Offers } from "./features/articles/components/Offers";

function App() {
  return (
    <HashRouter>
      <CssBaseline /> {/* Normaliza los márgenes y paddings por defecto */}
      
      {/* Box contenedor para controlar el desbordamiento global */}
      <Box sx={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        width: '100%', 
        overflowX: 'hidden' // Esto evita el scroll horizontal no deseado
      }}>
        
        <Header />
        
        <main style={{ flex: 1, width: '100%' }}>
          <Routes>
            <Route path="/" element={<Content />} />
            <Route path="/articles" element={<Articles />} />
            <Route path="/offers" element={<Offers />} />
            <Route path="/myaccount" element={<Myaccount />} />
            <Route path="/mycart" element={<Mycart />} />
            <Route path="/myfavorite" element={<Myfavorite />} />
          </Routes>
        </main>

        <Footer />
      </Box>
    </HashRouter>
  );
}

export default App;