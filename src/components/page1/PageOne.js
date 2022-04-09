import { Box, Container, Grid, Paper } from "@mui/material";
import React from "react";
import PageOneNavBar from "./PageOneNavBar";
import { styled } from "@mui/material/styles";
import PageOneLeftBar from "./PageOneLeftBar";
import PageOneContent from "./PageOneContent";
import PageOneRightBar from "./PageOneRightBar";
import Add from "./Add";

const PageOne = () => {
  const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
  }));

  const StickyItem = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
    ...theme.typography.body2,
    textAlign: "center",
    color: theme.palette.text.secondary,
    height: "100%",
    display: "sticky",
    top: 0,
  }));
  return (
    <Box>
      <PageOneNavBar />
      <Grid container>
        <Grid item xs={2}>
          <Item square elevation={0}>
            <PageOneLeftBar />
          </Item>
        </Grid>
        <Grid item xs={10} sm={7}>
          <Item square elevation={0}>
            <PageOneContent />
          </Item>
        </Grid>
        <Grid item xs sm={3} sx={{ display: ["none", "block"] }}>
          <Item square elevation={0}>
            <PageOneRightBar />
          </Item>
        </Grid>
      </Grid>
      <Add />
    </Box>
  );
};

export default PageOne;
