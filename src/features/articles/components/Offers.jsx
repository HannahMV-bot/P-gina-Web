import React, { useState, useEffect, useRef, useMemo, useCallback, useReducer } from "react";
import { Container, Grid, Typography, Card, CardContent, Button, Box } from "@mui/material";

export const Offers = () => {

  // useState
  const [count, setCount] = useState(0);

  // useEffect
  const [time, setTime] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime((t) => t + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  // StatusBar (online/offline)
  const [online, setOnline] = useState(navigator.onLine);

  useEffect(() => {
    const goOnline = () => setOnline(true);
    const goOffline = () => setOnline(false);

    window.addEventListener("online", goOnline);
    window.addEventListener("offline", goOffline);

    return () => {
      window.removeEventListener("online", goOnline);
      window.removeEventListener("offline", goOffline);
    };
  }, []);

  // useRef
  const inputRef = useRef();

  // useMemo
  const double = useMemo(() => count * 2, [count]);

  // useCallback
  const showMessage = useCallback(() => {
    alert("useCallback ejecutado");
  }, []);

  // useReducer
  const reducer = (state, action) => {
    switch (action.type) {
      case "add":
        return { value: state.value + 1 };
      case "sub":
        return { value: state.value - 1 };
      default:
        return state;
    }
  };

  const [state, dispatch] = useReducer(reducer, { value: 0 });

  const cardStyle = {
    height: 200,
    borderRadius: "12px",
    border: "2px solid #FFA726",
    boxShadow: "0 4px 12px rgba(0,0,0,0.15)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    textAlign: "center"
  };

  return (
    <Container sx={{ mt: 5 }}>

      <Typography
        variant="h4"
        align="center"
        sx={{ fontWeight: "bold", mb: 5 }}
      >
        DASHBOARD DE HOOKS
      </Typography>

      <Grid container spacing={4} justifyContent="center">

        {/* useState */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">useState</Typography>
              <Typography variant="h5">{count}</Typography>
              <Button
                variant="contained"
                sx={{ mt: 1, backgroundColor: "#FFA726" }}
                onClick={() => setCount(count + 1)}
              >
                +
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* useEffect */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">useEffect</Typography>
              <Typography variant="h5">{time}s</Typography>
              <Typography variant="body2">
                contador automático
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* StatusBar */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">StatusBar</Typography>
              <Typography
                sx={{
                  color: online ? "green" : "red",
                  fontWeight: "bold",
                  mt: 1
                }}
              >
                {online ? "Online 🟢" : "Offline 🔴"}
              </Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* useRef */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">useRef</Typography>
              <input ref={inputRef} style={{ marginTop: 10 }} />
              <Button
                sx={{ mt: 1 }}
                onClick={() => inputRef.current.focus()}
              >
                Focus
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* useMemo */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">useMemo</Typography>
              <Typography>Resultado: {double}</Typography>
            </CardContent>
          </Card>
        </Grid>

        {/* useCallback */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">useCallback</Typography>
              <Button variant="outlined" onClick={showMessage}>
                Ejecutar
              </Button>
            </CardContent>
          </Card>
        </Grid>

        {/* useReducer */}
        <Grid item xs={12} sm={6} md={3}>
          <Card sx={cardStyle}>
            <CardContent>
              <Typography fontWeight="bold">useReducer</Typography>
              <Typography variant="h5">{state.value}</Typography>

              <Box sx={{ mt: 1 }}>
                <Button
                  sx={{ mr: 1 }}
                  variant="contained"
                  onClick={() => dispatch({ type: "add" })}
                >
                  +
                </Button>

                <Button
                  variant="outlined"
                  onClick={() => dispatch({ type: "sub" })}
                >
                  -
                </Button>
              </Box>
            </CardContent>
          </Card>
        </Grid>

      </Grid>

    </Container>
  );
};

export default Offers;