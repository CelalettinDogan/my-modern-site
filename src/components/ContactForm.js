import React, { useState } from 'react';
import { TextField, Button, Box, Typography, Container } from '@mui/material';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    setIsSubmitted(true);
  };

  return (
    <Container sx={{ padding: '50px' }}>
      <Box sx={{ textAlign: 'center', marginBottom: '40px' }}>
        <Typography variant="h3" gutterBottom>
          İletişim
        </Typography>
        <Typography variant="body1">
          Bizimle iletişime geçmek için aşağıdaki formu doldurun.
        </Typography>
      </Box>

      {!isSubmitted ? (
        <form onSubmit={handleSubmit}>
          <TextField
            fullWidth
            label="Ad Soyad"
            name="name"
            value={formData.name}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="E-posta"
            name="email"
            value={formData.email}
            onChange={handleChange}
            margin="normal"
            variant="outlined"
          />
          <TextField
            fullWidth
            label="Mesaj"
            name="message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            margin="normal"
            variant="outlined"
          />
          <Button type="submit" variant="contained" color="primary" sx={{ marginTop: '20px' }}>
            Gönder
          </Button>
        </form>
      ) : (
        <Box sx={{ textAlign: 'center', padding: '20px' }}>
          <Typography variant="h6">Mesajınız alındı. En kısa sürede dönüş yapılacaktır!</Typography>
        </Box>
      )}
    </Container>
  );
};

export default Contact;
