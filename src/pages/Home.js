import React from 'react';
import { Container, Box } from '@mui/material';
import { motion } from 'framer-motion';
import HeroSection from '../components/HeroSection';
import FeaturesSection from '../components/Features';

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Bölümü */}
      <HeroSection />

      {/* Ana İçerik Bölgesi */}
      <Container>
        <Box sx={{ padding: { xs: '40px 20px', sm: '60px 20px' }, textAlign: 'center' }}>
          {/* VIP Üyelik Özelliğini Vurgulayan Bir Bölüm */}
          <FeaturesSection />
        </Box>
      </Container>
    </motion.div>
  );
};

export default Home;
