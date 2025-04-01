import React from "react";
import { Container, Typography, Accordion, AccordionSummary, AccordionDetails, Box } from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { motion } from "framer-motion";

const faqData = [
  {
    question: "VIP üyelik avantajları nelerdir?",
    answer: "VIP üyelik ile özel tahminlere erişebilir, reklamsız kullanım sağlayabilir ve daha fazla analiz alabilirsiniz."
  },
  {
    question: "Ödeme yöntemleri nelerdir?",
    answer: "Kredi kartı, banka havalesi ve çeşitli dijital ödeme yöntemleri ile ödeme yapabilirsiniz."
  },
  {
    question: "Tahminlerinizin doğruluk oranı nedir?",
    answer: "Tahminlerimiz yapay zeka desteklidir ve geçmiş verilere dayanarak oluşturulmaktadır. Ancak, garanti veremeyiz."
  },
  {
    question: "Aboneliğimi nasıl iptal edebilirim?",
    answer: "Aboneliğinizi hesap ayarlarından veya destek ekibimize ulaşarak iptal edebilirsiniz."
  }
];

const Faq = () => {
  return (
    <Box sx={{ background: "#f9f9f9", minHeight: "100vh", py: 8 }}>
      <Container maxWidth="md">
        <Box sx={{ textAlign: "center", mb: 5 }}>
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Typography variant="h3" fontWeight="bold" gutterBottom>
              Sıkça Sorulan Sorular
            </Typography>
            <Typography variant="h6" color="textSecondary">
              En çok merak edilen konuların yanıtlarını burada bulabilirsiniz.
            </Typography>
          </motion.div>
        </Box>

        {faqData.map((item, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <Accordion sx={{ mb: 2 }}>
              <AccordionSummary expandIcon={<ExpandMoreIcon />}>
                <Typography fontWeight="bold">{item.question}</Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{item.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          </motion.div>
        ))}
      </Container>
    </Box>
  );
};

export default Faq;
