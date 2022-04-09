import { Button, Divider } from "@mui/material";
import { Box, styled } from "@mui/system";
import { motion } from "framer-motion";
import React from "react";

const FramerBase = () => {
  const MyThemeComponent = styled("div", {
    shouldForwardProp: (prop) => {
      console.log(prop);
      return true;
    },
  })((theme, open) => ({
    backgroundColor: "aliceblue",
    marginLeft:open ? "10px" : "20px",
    // padding: theme.spacing(1),
  }));

  const [open, setOpen] = React.useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      <motion.div
        animate={{
          x: [0, 100, 0],
          y: [0, 100, 0],
          backgroundColor: "#fac",
          boxShadow: "10px 10px 0 rgba(0, 0, 0, 0.2)",
          position: "fixed",
          transitionEnd: {
            display: "block",
          },
        }}
        transition={{
          ease: "easeOut",
          duration: 2,
        }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
        }}
        // drag="x"
        // dragConstraints={{ left: -20, right: 20 }}
      >
        <Button>motion1</Button>
        <Button>motion2</Button>
      </motion.div>

      <MyThemeComponent name="name1" age="jisd" sx={{marginTop:"100px"}}>
        123
      </MyThemeComponent>
    </Box>
  );
};

export default FramerBase;
