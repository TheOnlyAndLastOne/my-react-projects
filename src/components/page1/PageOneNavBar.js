import {
  AppBar,
  Avatar,
  Badge,
  Box,
  IconButton,
  InputBase,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { MdCancel, MdMail, MdNotifications, MdSearch } from "react-icons/md";

const PageOneNavBar = () => {
  const [open, setOpen] = useState(false);
  return (
    <AppBar 
    position="fixed" sx={{top: 0 }}
    >
      <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
        <Typography
          variant="h6"
          sx={{
            display: ["none", "block"],
          }}
        >
          Lama Dev
        </Typography>
        <Typography variant="h6" sx={{ display: ["block", "none"] }}>
          LAMA
        </Typography>
        <Box
          sx={{
            display: [open ? "flex" : "none", "flex"],
            alignItems: "center",
            backgroundColor: "rgba(255, 255, 255, 0.15)",
            borderRadius: 2,
            width: ["70%", "50%"],
            ":hover": {
              backgroundColor: "rgba(255, 255, 255, 0.25)",
            },
          }}
        >
          <IconButton size="medium" color="inherit">
            <MdSearch />
          </IconButton>
          <InputBase placeholder="Search..." sx={{ flexGrow: 1 }} />
          <IconButton
            size="medium"
            color="inherit"
            onClick={() => setOpen(false)}
            sx={{ display: ["block", "none"] }}
          >
            <MdCancel />
          </IconButton>
        </Box>

        <Box
          sx={{
            display: [open ? "none" : "flex", "flex"],
            alignItems: "center",
          }}
        >
          <IconButton
            sx={{ display: ["block", "none"] }}
            size="large"
            color="inherit"
            onClick={() => setOpen(true)}
          >
            <MdSearch />
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MdMail />
            </Badge>
          </IconButton>
          <IconButton size="large" color="inherit">
            <Badge badgeContent={4} color="secondary">
              <MdNotifications />
            </Badge>
          </IconButton>
          <Avatar
            alt="Remy Sharp"
            src="https://images.pexels.com/photos/8647814/pexels-photo-8647814.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            sx={{ marginLeft: 2 }}
          />
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default PageOneNavBar;
