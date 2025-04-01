import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { styled } from "@mui/material/styles";

const StyledLink = styled(Link)({
  position: "relative",
  textDecoration: "none",
  color: "white",
  fontSize: "18px",
  fontWeight: "bold",
  padding: "10px 15px",
  transition: "color 0.3s ease",
  "&:hover": {
    color: "#FFC107",
  },
  "&::after": {
    content: "''",
    position: "absolute",
    width: "100%",
    height: "2px",
    bottom: 0,
    left: 0,
    backgroundColor: "#FFC107",
    transform: "scaleX(0)",
    transformOrigin: "right",
    transition: "transform 0.3s ease-out",
  },
  "&:hover::after": {
    transform: "scaleX(1)",
    transformOrigin: "left",
  },
});

const AnimatedLink = ({ to, children }) => {
  return (
    <motion.div whileHover={{ scale: 1.1 }} transition={{ type: "spring", stiffness: 300 }}>
      <StyledLink to={to}>{children}</StyledLink>
    </motion.div>
  );
};

export default AnimatedLink;