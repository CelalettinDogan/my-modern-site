import React from "react";
import { Container, Typography, Grid, Card, CardContent, Button } from "@mui/material";
import { motion, AnimatePresence } from "framer-motion";

const plans = [
  {
    title: "Standart Üyelik",
    price: "₺99 / Ay",
    features: ["Haftalık Tahminler", "Temel Analizler", "Reklamlı Kullanım"],
  },
  {
    title: "Premium Üyelik",
    price: "₺199 / Ay",
    features: ["Günlük Tahminler", "İleri Düzey Analizler", "Reklamsız Deneyim", "Özel Destek"],
  },
  {
    title: "VIP Üyelik",
    price: "₺299 / Ay",
    features: ["Yapay Zeka Destekli Tahminler", "Canlı Bildirimler", "VIP Destek", "Özel İçerikler"],
  },
];

const VipMembership = () => {
  return (
    <AnimatePresence>
      <Container sx={{ textAlign: "center", py: { xs: 4, md: 8 } }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          exit={{ opacity: 0, y: -20 }} 
          transition={{ duration: 0.8 }}
        >
          {/* SEO için H1 başlığı eklendi */}
          <Typography component="h1" variant="h4" sx={{ fontSize: { xs: "1.8rem", md: "2.5rem" } }} gutterBottom>
            VIP Üyelik Planlarımız
          </Typography>
          
          {/* SEO için H2 başlığı eklendi */}
          <Typography component="h2" variant="h6" sx={{ fontSize: { xs: "1rem", md: "1.25rem" }, px: { xs: 2, md: 0 } }} paragraph>
            Daha fazla kazanmak için en uygun üyelik paketini seçin!
          </Typography>
        </motion.div>

        <Grid container spacing={4} justifyContent="center">
          {plans.map((plan, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <motion.div 
                whileHover={{ scale: 1.05 }}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
              >
                <Card sx={{ textAlign: "center", p: { xs: 2, md: 3 }, boxShadow: 3, borderRadius: "12px" }}>
                  <CardContent>
                    {/* SEO için başlıklar H3 olarak düzenlendi */}
                    <Typography component="h3" variant="h5" fontWeight="bold" sx={{ fontSize: { xs: "1.25rem", md: "1.5rem" } }}>
                      {plan.title}
                    </Typography>
                    <Typography variant="h6" color="primary" sx={{ my: 2, fontSize: { xs: "1rem", md: "1.2rem" } }}>
                      {plan.price}
                    </Typography>
                    <ul style={{ listStyleType: "none", padding: 0, marginBottom: 0 }}>
                      {plan.features.map((feature, i) => (
                        <li key={i} style={{ marginBottom: "6px", fontSize: "0.9rem" }}>{feature}</li>
                      ))}
                    </ul>
                    <Button
                      variant="contained"
                      color="primary"
                      fullWidth
                      sx={{ mt: 2, py: { xs: 1, md: 1.5 }, fontSize: { xs: "0.875rem", md: "1rem" } }}
                    >
                      Üye Ol
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </AnimatePresence>
  );
};

export default VipMembership;
