import React from "react";
import { Container, Typography, Box } from "@mui/material";

const Privacy = () => {
  return (
    <Box
      sx={{
        background: "linear-gradient(to bottom, #ffffff, #e3f2fd)",
        minHeight: "100vh",
        py: 8,
      }}
    >
      <Container maxWidth="md">
        <Typography variant="h3" fontWeight="bold" gutterBottom textAlign="center">
          Gizlilik Politikası
        </Typography>
        <Typography variant="body1" color="textSecondary" paragraph>
          BankoKupon Pro olarak kullanıcılarımızın gizliliğini önemsiyoruz. Bu gizlilik politikası,
          kişisel verilerinizin nasıl toplandığını, kullanıldığını ve korunduğunu açıklamaktadır.
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          1. Toplanan Veriler
        </Typography>
        <Typography variant="body1" paragraph>
          - Ad, e-posta adresi, telefon numarası gibi kimlik bilgileri
          - Kullanım verileri ve çerezler
          - VIP üyelik bilgileri ve ödeme detayları (güvenli ödeme sağlayıcıları aracılığıyla)
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          2. Verilerin Kullanımı
        </Typography>
        <Typography variant="body1" paragraph>
          - Kullanıcı deneyimini iyileştirmek
          - VIP üyelik hizmetleri sunmak
          - Güvenlik ve dolandırıcılıkla mücadele amacıyla
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          3. Veri Paylaşımı
        </Typography>
        <Typography variant="body1" paragraph>
          Kişisel verileriniz, yalnızca yasal gereklilikler çerçevesinde veya hizmet sağlayıcılarımızla paylaşılmaktadır.
          Üçüncü taraflarla izinsiz paylaşım yapılmaz.
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          4. Verilerin Korunması
        </Typography>
        <Typography variant="body1" paragraph>
          Kişisel verilerinizin güvenliğini sağlamak için endüstri standartlarında güvenlik önlemleri uygulanmaktadır.
        </Typography>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          5. İletişim
        </Typography>
        <Typography variant="body1" paragraph>
          Gizlilik politikamızla ilgili sorularınız için bizimle iletişime geçebilirsiniz: info@bankokuponpro.com
        </Typography>
      </Container>
    </Box>
  );
};

export default Privacy;
