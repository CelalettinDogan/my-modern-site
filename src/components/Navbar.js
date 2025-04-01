import React, { useState } from "react";
import { AppBar, Toolbar, Typography, Box, IconButton, Drawer, List, ListItem, ListItemText } from "@mui/material";
import { Menu, Close } from "@mui/icons-material";
import AnimatedLink from "./AnimatedLink.js";
import { motion } from "framer-motion";

const navItems = [
  { label: "Anasayfa", path: "/" },
  { label: "Hakkımızda", path: "/hakkimizda" },
  { label: "İletişim", path: "/iletisim" },
  { label: "VIP Üyelik", path: "/vip" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  return (
    <>
      {/* ÜST BAR */}
      <AppBar position="sticky" sx={{ background: "linear-gradient(90deg, #1976d2, #4a148c)", backdropFilter: "blur(10px)", color: "white", boxShadow: 4 }}>
        <Toolbar>
          {/* Mobil Menü İkonu */}
          <IconButton edge="start" sx={{ display: { xs: "block", md: "none" }, color: "white" }} onClick={handleDrawerToggle}>
            <Menu />
          </IconButton>

          {/* Logo ve Başlık */}
          <Box sx={{ display: "flex", alignItems: "center", flexGrow: 1 }}>
            {/* Aslan logosu */}
            <img src="/logo.png" alt="Aslan Logosu" style={{ width: 40, height: 40, marginRight: 10 }} />
            <Typography variant="h6" fontWeight="bold" sx={{ color: "#FFCA28" }}>
              İddiaAslanı Pro
            </Typography>
          </Box>

          {/* Masaüstü Linkler */}
          <Box sx={{ display: { xs: "none", md: "flex" }, gap: 3, alignItems: "center" }}>
            {navItems.map((item, index) => (
              <motion.div key={index} whileHover={{ scale: 1.1 }}>
                <AnimatedLink
                  to={item.path}
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontWeight: "bold",
                    position: "relative",
                  }}
                >
                  {item.label}
                  <motion.div
                    style={{
                      position: "absolute",
                      bottom: -2,
                      left: 0,
                      width: "100%",
                      height: 2,
                      backgroundColor: "white",
                    }}
                    initial={{ scaleX: 0 }}
                    whileHover={{ scaleX: 1 }}
                    transition={{ duration: 0.3 }}
                  />
                </AnimatedLink>
              </motion.div>
            ))}
          </Box>
        </Toolbar>
      </AppBar>

      {/* Mobil Menü */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={handleDrawerToggle}
        PaperProps={{ sx: { backgroundColor: "#333", color: "white" } }}
        component={motion.div}
        initial={{ x: -300 }}
        animate={{ x: mobileOpen ? 0 : -300 }}
        transition={{ duration: 0.4 }}
      >
        <Box sx={{ width: 250, p: 2 }}>
          <IconButton onClick={handleDrawerToggle} sx={{ display: "flex", justifyContent: "flex-end", color: "white" }}>
            <Close />
          </IconButton>
          <List>
            {navItems.map((item, index) => (
              <ListItem button key={index} onClick={handleDrawerToggle} sx={{ "&:hover": { backgroundColor: "#444" } }}>
                <ListItemText>
                  <AnimatedLink to={item.path} style={{ color: "white", textDecoration: "none", fontWeight: "bold" }}>
                    {item.label}
                  </AnimatedLink>
                </ListItemText>
              </ListItem>
            ))}
          </List>
        </Box>
      </Drawer>
    </>
  );
};

export default Navbar;
