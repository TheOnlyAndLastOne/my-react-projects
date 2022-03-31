import { makeStyles } from "@material-ui/styles";
import { Button, Container } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#FF8D6B",
    height: "100vh",
    padding: 20,
  },
}));

const GlobalPage = () => {
  const classes = useStyles();
  return (
    <div>
      <Container maxWidth="md" className={classes.container}>
        <Link to="/pageOne">
          <Button variant="contained">page1</Button>
        </Link>
      </Container>
    </div>
  );
};

export default GlobalPage;
