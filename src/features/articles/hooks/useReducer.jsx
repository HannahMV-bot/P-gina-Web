import React, { useReducer } from "react";
import { Button, Typography } from "@mui/material";

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    default:
      return state;
  }
};

export const UseReducerExample = () => {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <div style={{ textAlign: "center" }}>
      <Typography>Contador: {state.count}</Typography>

      <Button
        variant="contained"
        onClick={() => dispatch({ type: "increment" })}
      >
        Incrementar
      </Button>
    </div>
  );
};