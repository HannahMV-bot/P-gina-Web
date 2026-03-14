import React, { useState, useMemo } from "react";
import { Button, Typography } from "@mui/material";

export const UseMemoExample = () => {
  const [count, setCount] = useState(0);

  const expensiveCalculation = useMemo(() => {
    return count * 2;
  }, [count]);

  return (
    <div style={{ textAlign: "center" }}>
      <Typography>Resultado: {expensiveCalculation}</Typography>

      <Button
        variant="contained"
        onClick={() => setCount(count + 1)}
      >
        Incrementar
      </Button>
    </div>
  );
};