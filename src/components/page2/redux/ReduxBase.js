import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { plus, minus, incrementByAmount, selector } from "./CounterSlice";
import { Button } from "@mui/material";
import NewComp from "./NewComp";

const ReduxBase = () => {
    const num = useSelector(selector);
  const dispatch = useDispatch();
  return (
    <div>
      <Button onClick={() => dispatch(plus())}>add</Button>
      {num}
      <Button onClick={() => dispatch(minus())}>count down</Button>

      <NewComp addThree={() => dispatch(incrementByAmount(3))} />
    </div>
  );
};

export default ReduxBase;
