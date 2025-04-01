import React from "react";
import { Container, Typography, Grid, Paper, Box } from "@mui/material";
import { Visibility, Flag, Group } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const aboutSections = [
  {
    icon: <Visibility color="primary" sx={{ fontSize: 50, mb: 1 }} />, 
    title: "Vizyonumuz",
    description: "En doğru tahminlerle bahis sektöründe lider olmak ve yenilikçi teknolojilerle desteklenen eşsiz bir deneyim sunmak.",
  },
  {
    icon: <Flag color="primary" sx={{ fontSize: 50, mb: 1 }} />, 
    title: "Misyonumuz",
    description: "Kullanıcılarımıza güvenilir, hızlı ve doğru tahminler sunarak onların kazançlarını maksimize etmek.",
  },
  {
    icon: <Group color="primary" sx={{ fontSize: 50, mb: 1 }} />, 
    title: "Ekibimiz",
    description: "Alanında uzman profesyonellerden oluşan dinamik ekibimiz, sürekli yenilik peşinde ve en güncel teknolojileri kullanarak hizmet vermektedir.",
  },
];

const About = () => {
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <Box
          sx={{
            background: "linear-gradient(to bottom, #ffffff, #e3f2fd)",
            minHeight: "100vh",
            py: 8,
          }}
        >
          <Container maxWidth="md">
            <Box sx={{ textAlign: "center", mb: 5 }}>
              <Typography variant="h3" fontWeight="bold" gutterBottom>
                Hakkımızda
              </Typography>
              <Typography variant="h6" color="textSecondary">
                BankoKupon Pro, yapay zeka destekli tahminlerle bahis deneyiminizi en üst düzeye çıkarmak için kurulmuş, yenilikçi ve modern bir platformdur.
              </Typography>
            </Box>

            <Grid container spacing={4} justifyContent="center">
              {aboutSections.map((section, index) => (
                <Grid item xs={12} sm={6} md={4} key={index}>
                  <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.6, delay: index * 0.3 }}
                    whileHover={{ scale: 1.05 }}
                  >
                    <Paper
                      elevation={5}
                      sx={{
                        p: 4,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        textAlign: "center",
                        backgroundColor: "rgba(255, 255, 255, 0.8)",
                        borderRadius: "12px",
                        height: "100%",
                        transition: "all 0.3s ease-in-out",
                        "&:hover": {
                          boxShadow: "0px 8px 16px rgba(0, 0, 0, 0.2)",
                        },
                      }}
                    >
                      {section.icon}
                      <Typography variant="h5" fontWeight="bold" gutterBottom>
                        {section.title}
                      </Typography>
                      <Typography variant="body1" color="textSecondary">
                        {section.description}
                      </Typography>
                    </Paper>
                  </motion.div>
                </Grid>
              ))}
            </Grid>
          </Container>
        </Box>
      </motion.div>
    </AnimatePresence>
  );
};

export default About;