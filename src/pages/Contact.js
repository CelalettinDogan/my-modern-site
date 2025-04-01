import React, { useState } from "react";
import { Container, Typography, Box, TextField, Button, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, Email, Phone } from "@mui/icons-material";
import { motion, AnimatePresence } from "framer-motion";

const sanitizeInput = (input) => {
  return input.replace(/</g, "&lt;").replace(/>/g, "&gt;").trim();
};

const Contact = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: sanitizeInput(e.target.value) });
  };

  const validateForm = () => {
    let newErrors = {};
    if (!formData.name) newErrors.name = "Adınızı giriniz.";
    if (!formData.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Geçerli bir e-posta adresi giriniz.";
    if (!formData.message) newErrors.message = "Mesajınızı yazınız.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      alert("Mesajınız gönderildi!");
      setFormData({ name: "", email: "", message: "" });
      setErrors({});
    }
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.5 }}
      >
        <Container>
          <Box sx={{ textAlign: "center", padding: "60px 20px" }}>
            <motion.div initial={{ opacity: 0, y: -50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
              <Typography variant="h3" gutterBottom>
                İletişim
              </Typography>
            </motion.div>

            <Typography variant="h6" paragraph>
              Bizimle iletişime geçmek için aşağıdaki bilgileri kullanabilir veya formu doldurabilirsiniz.
            </Typography>

            <Box sx={{ display: "flex", justifyContent: "center", gap: 3, marginTop: 3 }}>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Email color="primary" />
                <Typography variant="body1">info@iddiaaslanipro.com</Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
                <Phone color="primary" />
                <Typography variant="body1">+000000000</Typography>
              </Box>
            </Box>

            <Box sx={{ marginTop: 3 }}>
              <IconButton color="primary" href="#">
                <Facebook />
              </IconButton>
              <IconButton color="primary" href="#">
                <Twitter />
              </IconButton>
              <IconButton color="primary" href="#">
                <Instagram />
              </IconButton>
            </Box>

            <Box component="form" onSubmit={handleSubmit} sx={{ maxWidth: 500, margin: "40px auto", display: "flex", flexDirection: "column", gap: 2 }}>
              <TextField
                label="Adınız"
                variant="outlined"
                fullWidth
                required
                name="name"
                value={formData.name}
                onChange={handleChange}
                error={!!errors.name}
                helperText={errors.name}
              />
              <TextField
                label="E-posta Adresiniz"
                type="email"
                variant="outlined"
                fullWidth
                required
                name="email"
                value={formData.email}
                onChange={handleChange}
                error={!!errors.email}
                helperText={errors.email}
              />
              <TextField
                label="Mesajınız"
                variant="outlined"
                multiline
                rows={4}
                fullWidth
                required
                name="message"
                value={formData.message}
                onChange={handleChange}
                error={!!errors.message}
                helperText={errors.message}
              />
              <Button variant="contained" color="primary" size="large" type="submit">
                Gönder
              </Button>
            </Box>
          </Box>
        </Container>
      </motion.div>
    </AnimatePresence>
  );
};

export default Contact;
