import { makeStyles } from "@material-ui/styles";
import { Button, Container } from "@mui/material";
import React from "react";
import { Link as RouterLink } from "react-router-dom";

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
        <RouterLink to="/pageOne">
          <Button variant="contained" sx={{ marginRight: 3 }}>
            page1
          </Button>
        </RouterLink>

        <RouterLink to="/pageTwo">
          <Button variant="contained" sx={{ marginRight: 3 }}>
            page2
          </Button>
        </RouterLink>
      </Container>
    </div>
  );
};

export default GlobalPage;
