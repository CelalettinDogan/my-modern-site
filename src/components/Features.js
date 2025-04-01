import React from "react";
import { Container, Grid, Box, Typography, Card, CardContent, CardMedia } from "@mui/material";
import { motion } from "framer-motion";
import { TrendingUp, Lock, Timer } from "@mui/icons-material";

const features = [
  {
    title: "Yapay Zeka Destekli Tahminler",
    description: "Uzman editörlerimizin AI'dan aldığı tahminleri kendi analizleriyle buluşturduğu yüksek doğrulukta maç tahminlerini keşfedin!",
    icon: <TrendingUp fontSize="large" color="primary" />,
  },
  {
    title: "Hızlı ve Güvenli Ödeme",
    description: "VIP üyelik için modern ve güvenli ödeme yöntemleriyle anında erişim sağlayın.",
    icon: <Lock fontSize="large" color="primary" />,
  },
  {
    title: "Anlık  Sonuçlar",
    description: "Maç sonuçları açıklandığında, verdiğiniz bahislerin durumunu anında öğrenin!",
    icon: <Timer fontSize="large" color="primary" />,
  },
];

const FeaturesSection = () => {
  return (
    <Container sx={{ py: 10 }}>
      <Box textAlign="center" mb={5}>
        <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <Typography variant="h3" fontWeight="bold" gutterBottom>
            Öne Çıkan Özellikler
          </Typography>
          <Typography variant="body1" color="textSecondary">
            BankoKupon Pro’nun sunduğu en iyi özellikleri keşfedin.
          </Typography>
        </motion.div>
      </Box>

      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <motion.div whileHover={{ scale: 1.05 }} transition={{ duration: 0.3 }}>
              <Card sx={{ p: 3, textAlign: "center", boxShadow: 4, borderRadius: "12px" }}>
                <Box mb={2}>{feature.icon}</Box>
                <CardContent>
                  <Typography variant="h6" fontWeight="bold" gutterBottom>
                    {feature.title}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                    {feature.description}
                  </Typography>
                </CardContent>
              </Card>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default FeaturesSection;
