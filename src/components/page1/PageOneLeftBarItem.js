import { Box } from "@mui/system";
import React from "react";

const PageOneLeftBarItem = ({ icon, content }) => {
  return (
    <div>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: ["center", "start"],
          color: ["white", "#676669"],
          cursor: "pointer",
          marginBottom: 3,
        }}
      >
        <Box>{icon}</Box>
        <Box
          sx={{ fontWeight: 500, display: ["none", "block"], marginLeft: 1 }}
        >
          {content}
        </Box>
      </Box>
    </div>
  );
};

export default PageOneLeftBarItem;
