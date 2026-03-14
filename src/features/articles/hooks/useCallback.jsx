import React, { useState, useCallback } from "react";
import { Button, Typography } from "@mui/material";

export const UseCallbackExample = () => {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    setCount(c => c + 1);
  }, []);

  return (
    <div style={{ textAlign: "center" }}>
      <Typography>Clicks: {count}</Typography>

      <Button variant="contained" onClick={handleClick}>
        Click
      </Button>
    </div>
  );
};