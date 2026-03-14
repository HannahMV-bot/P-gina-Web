import React, { useState } from "react";
import { 
  Box, Typography, TextField, Button, Paper, Divider, Snackbar, 
  Alert, IconButton, InputAdornment, Dialog, DialogTitle, DialogContent, DialogActions 
} from "@mui/material";

import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LoginIcon from '@mui/icons-material/Login';

export const Myaccount = () => {
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: "", email: "", password: "" });
  const [alert, setAlert] = useState({ open: false, message: "", severity: "success" });

  const [openReset, setOpenReset] = useState(false);
  const [resetEmail, setResetEmail] = useState("");
  const [newPassword, setNewPassword] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const togglePasswordVisibility = () => setShowPassword(!showPassword);

  const handleSubmit = (e) => {
    e.preventDefault();
    setAlert({ open: true, message: isLogin ? "Intentando iniciar sesión..." : "Registrando usuario...", severity: "info" });
  };

  const handleUpdatePassword = () => {
    if (!resetEmail || !newPassword) {
      setAlert({ open: true, message: "Completa todos los campos", severity: "warning" });
      return;
    }
    setAlert({ open: true, message: `Contraseña actualizada con éxito`, severity: "success" });
    setOpenReset(false);
  };

  return (
    <Box sx={{ 
      display: 'flex', 
      justifyContent: 'center', 
      alignItems: 'center', 
      minHeight: '80vh', 
      px: 2 // Padding lateral para que no toque los bordes en móviles
    }}>
      <Paper elevation={4} sx={{ 
        p: { xs: 3, md: 4 }, 
        borderRadius: 3, 
        width: "100%", 
        maxWidth: 400, // Hace que el formulario nunca sea demasiado ancho
        textAlign: "center" 
      }}>
        
        <Box sx={{ mb: 2, color: 'Primary' }}>
          {isLogin ? <LoginIcon sx={{ fontSize: 40 }} /> : <PersonAddIcon sx={{ fontSize: 40 }} />}
        </Box>
        <Typography variant="h5" sx={{ fontWeight: "bold", mb: 2 }}>
          {isLogin ? "Iniciar Sesión" : "Crear Cuenta"}
        </Typography>

        <form onSubmit={handleSubmit}>
          {!isLogin && (
            <TextField fullWidth size="small" label="Nombre" name="name" margin="dense" onChange={handleInputChange} required />
          )}

          <TextField fullWidth size="small" label="Email" name="email" type="email" margin="dense" onChange={handleInputChange} required />

          <TextField
            fullWidth size="small" label="Contraseña" name="password" margin="dense"
            type={showPassword ? "text" : "password"}
            onChange={handleInputChange} required
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={togglePasswordVisibility} edge="end">
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />

          {isLogin && (
            <Box sx={{ textAlign: 'right', mt: 0.5 }}>
              <Button 
                variant="text" size="small" onClick={() => setOpenReset(true)}
                sx={{ fontSize: '0.75rem', textTransform: 'none', color: 'gray' }}
              >
                ¿Olvidaste tu contraseña?
              </Button>
            </Box>
          )}

          <Button
            fullWidth type="submit" variant="contained"
            sx={{ 
              mt: isLogin ? 1 : 3, py: 1.2, fontWeight: "bold", 
              backgroundColor: "#FFA726",
              '&:hover': { backgroundColor: "#FB8C00" }
            }}
          >
            {isLogin ? "Entrar" : "Registrarme"}
          </Button>
        </form>

        <Divider sx={{ my: 3 }}>O</Divider>

        <Button fullWidth size="small" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "¿No tienes cuenta? Regístrate" : "¿Ya tienes cuenta? Entra"}
        </Button>
      </Paper>

      {/* Ventana de recuperación */}
      <Dialog open={openReset} onClose={() => setOpenReset(false)} fullWidth maxWidth="xs">
        <DialogTitle sx={{ fontWeight: 'bold' }}>Restablecer Contraseña</DialogTitle>
        <DialogContent>
          <TextField fullWidth label="Confirma tu Email" margin="dense" size="small" value={resetEmail} onChange={(e) => setResetEmail(e.target.value)} />
          <TextField fullWidth label="Nueva Contraseña" type="password" margin="dense" size="small" value={newPassword} onChange={(e) => setNewPassword(e.target.value)} />
        </DialogContent>
        <DialogActions sx={{ p: 2 }}>
          <Button onClick={() => setOpenReset(false)} color="inherit">Cancelar</Button>
          <Button onClick={handleUpdatePassword} variant="contained" sx={{ backgroundColor: "#FFA726" }}>Actualizar</Button>
        </DialogActions>
      </Dialog>

      <Snackbar 
        open={alert.open} autoHideDuration={3000} 
        onClose={() => setAlert({ ...alert, open: false })}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      >
        <Alert severity={alert.severity} variant="filled" sx={{ width: '100%' }}>{alert.message}</Alert>
      </Snackbar>
    </Box>
  );
};

export default Myaccount;