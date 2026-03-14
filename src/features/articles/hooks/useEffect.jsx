import React, { useState, useEffect } from "react";
import { Typography } from "@mui/material";

export const UseEffect = () => {
  const [time, setTime] = useState(new Date());

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Typography variant="h6">
      {time.toLocaleTimeString()}
    </Typography>
  );
};