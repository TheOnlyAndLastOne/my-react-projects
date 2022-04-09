import {
  Button,
  Container,
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Toolbar,
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { MdInbox } from "react-icons/md";

import { Link as RouterLink, Outlet } from "react-router-dom";

const drawer = (
  <>
    <Toolbar />
    <List>
      <RouterLink to="/pageTwo/framer">
        <ListItem button key={"framer"}>
          <ListItemIcon>
            <MdInbox />
          </ListItemIcon>
          <ListItemText primary={"framer"} />
        </ListItem>
      </RouterLink>
      <RouterLink to="/pageTwo/redux">
        <ListItem button key={"redux"}>
          <ListItemIcon>
            <MdInbox />
          </ListItemIcon>
          <ListItemText primary={"redux"} />
        </ListItem>
      </RouterLink>
      <RouterLink to="/pageTwo/three">
        <ListItem button key={"three"}>
          <ListItemIcon>
            <MdInbox />
          </ListItemIcon>
          <ListItemText primary={"three"} />
        </ListItem>
      </RouterLink>
      <RouterLink to="/pageTwo/web3j">
        <ListItem button key={"web3j"}>
          <ListItemIcon>
            <MdInbox />
          </ListItemIcon>
          <ListItemText primary={"web3j"} />
        </ListItem>
      </RouterLink>
    </List>
  </>
);

const PageTwo = () => {
  return (
    <Box sx={{ display: "flex" }}>
      <Drawer
        variant="permanent"
        sx={{
          width: 240,
          // flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: 240,
            boxSizing: "border-box",
          },
        }}
        open
      >
        {drawer}
      </Drawer>

      <Outlet />
    </Box>
  );
};

export default PageTwo;
