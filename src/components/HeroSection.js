import React from "react";
import { Button, Box, Typography, Container } from "@mui/material";
import { motion } from "framer-motion";
import { FaGooglePlay } from "react-icons/fa";

const HeroSection = () => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "80vh",
        background: "linear-gradient(to right, #1976d2, #4a148c)",
        color: "white",
        textAlign: "center",
        padding: "20px",
      }}
    >
      <Container>
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <Typography variant="h2" fontWeight="bold" sx={{ fontSize: { xs: "2rem", md: "3rem" } }}>
            <span style={{ color: "#FFC107" }}>İddiaAslanı Pro</span>'ya Hoş Geldiniz!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5 }}
        >
          <Typography variant="h5" sx={{ mt: 2, mb: 4, fontSize: { xs: "1.2rem", md: "1.5rem" } }}>
            En iyi tahminler, VIP üyelik avantajları ve çok daha fazlası burada!
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.2, delay: 1 }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: { xs: "column", sm: "row" },
              gap: 2,
              justifyContent: "center",
            }}
          >
            <Button
              variant="contained"
              sx={{
                backgroundColor: "#FFC107",
                '&:hover': {
                  backgroundColor: "#FFB300",
                },
                color: "white",
                fontSize: "1rem",
                padding: "10px 20px",
                display: "flex",
                alignItems: "center",
                gap: 1,
              }}
              href="https://play.google.com/store/apps/details?id=com.bankokuponpro"
              target="_blank"
            >
              <FaGooglePlay size={20} /> Hemen İndir
            </Button>
            <Button
              variant="outlined"
              color="inherit"
              sx={{ fontSize: "1rem", padding: "10px 20px" }}
            >
              Daha Fazla Bilgi
            </Button>
          </Box>
        </motion.div>
      </Container>
    </Box>
  );
};

export default HeroSection;