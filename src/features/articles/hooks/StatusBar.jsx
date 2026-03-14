import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

export const StatusBar = () => {

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

  return (
    <>
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
    </>
  );
};