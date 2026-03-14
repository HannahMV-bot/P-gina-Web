import React, { useRef } from "react";
import { Button } from "@mui/material";

export const UseReff = () => {
  const inputRef = useRef();

  const focusInput = () => {
    inputRef.current.focus();
  };

  return (
    <div>
      <input ref={inputRef} placeholder="Escribe algo..." />
      <br /><br />

      <Button variant="contained" onClick={focusInput}>
        Enfocar input
      </Button>
    </div>
  );
};