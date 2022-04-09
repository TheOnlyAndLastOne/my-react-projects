import { Button, Container } from "@mui/material";
import React from "react";
import { useDispatch } from "react-redux";
import { incrementByAmount } from "./CounterSlice";

const NewComp = ({ addThree }) => {
  const dispatch = useDispatch();
  return (
    <Container>
      <Button onClick={() => dispatch(incrementByAmount(2))}>add 2</Button>
      <Button onClick={() => addThree()}>add 3</Button>
    </Container>
  );
};

export default NewComp;
