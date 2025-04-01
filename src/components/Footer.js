import React, { useState, useEffect } from "react";
import { Box, Typography, Container, Divider, Link } from "@mui/material";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const scrollHeight = document.documentElement.scrollHeight;
      const scrollTop = document.documentElement.scrollTop;
      const clientHeight = document.documentElement.clientHeight;

      setIsVisible(scrollTop + clientHeight >= scrollHeight - 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <motion.footer
      initial={{ y: 100, opacity: 0 }}
      animate={{ y: isVisible ? 0 : 50, opacity: isVisible ? 1 : 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      style={{
        position: "fixed",
        left: 0,
        bottom: 0,
        width: "100%",
        background: "linear-gradient(90deg, #1976d2, #4a148c)",
        color: "white",
        boxShadow: "0px -2px 10px rgba(0,0,0,0.2)",
      }}
    >
      <Container maxWidth="lg" sx={{ textAlign: "center", padding: "15px 0" }}>
        <Typography variant="body2" sx={{ fontSize: "14px", opacity: 0.9 }}>
          © 2025 Tüm Hakları Saklıdır | BankoKupon Pro
        </Typography>
        <Divider sx={{ backgroundColor: "rgba(255, 255, 255, 0.3)", margin: "8px auto", width: "50%" }} />
        <Box sx={{ display: "flex", justifyContent: "center", gap: 2 }}>
          <Link
            onClick={() => navigate("/gizlilik")}
            sx={{ color: "white", cursor: "pointer", fontSize: "12px", opacity: 0.7 }}
          >
            Gizlilik Politikası
          </Link>
         
          <Link
            onClick={() => navigate("/sss")}
            sx={{ color: "white", cursor: "pointer", fontSize: "12px", opacity: 0.7 }}
          >
            SSS
          </Link>
        </Box>
      </Container>
    </motion.footer>
  );
};

export default Footer;
