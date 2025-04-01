import React from "react";
import { Container, Grid, Card, CardContent, Typography, Button } from "@mui/material";

const VipCards = () => {
  return (
    <Container sx={{ padding: "50px 0" }}>
      <Typography variant="h4" align="center" gutterBottom>
        VIP Üyelik Paketleri
      </Typography>
      <Grid container spacing={4}>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="primary">
                Standart VIP
              </Typography>
              <Typography variant="body2">
                Günlük tahminler ve reklamsız kullanım.
              </Typography>
              <Button variant="contained" color="primary" sx={{ marginTop: 2 }}>
                Satın Al
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="secondary">
                Gold VIP
              </Typography>
              <Typography variant="body2">
                Özel analizler ve premium tahminler.
              </Typography>
              <Button variant="contained" color="secondary" sx={{ marginTop: 2 }}>
                Satın Al
              </Button>
            </CardContent>
          </Card>
        </Grid>
        <Grid item xs={12} sm={4}>
          <Card>
            <CardContent>
              <Typography variant="h5" color="error">
                Platinum VIP
              </Typography>
              <Typography variant="body2">
                AI destekli tahminler ve özel destek.
              </Typography>
              <Button variant="contained" color="error" sx={{ marginTop: 2 }}>
                Satın Al
              </Button>
            </CardContent>
          </Card>
        </Grid>
      </Grid>
    </Container>
  );
};

export default VipCards;
