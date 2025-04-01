import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { CssBaseline, Box } from "@mui/material";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ThemeToggle from "./components/ThemeToggle";
import Contact from "./pages/Contact";
import Vip from "./pages/Vip";
import Home from "./pages/Home";
import About from "./pages/About";
import Faq from "./pages/Faq";
import Privacy from "./pages/Privacy";


function App() {
  const [darkMode, setDarkMode] = useState(false);
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            minHeight: "100vh",
          }}
        >
          <Navbar />
          {/* İçeriğin esneklik kazanması için flexGrow kullanıyoruz */}
          <Box component="main" sx={{ flexGrow: 1 }}>
            <ThemeToggle toggleTheme={() => setDarkMode(!darkMode)} isDarkMode={darkMode} />
            <Routes>
              <Route path="/sss" element={<Faq />} />
              <Route path="/gizlilik" element={<Privacy />}/>
              <Route path="/" element={<Home />} />
              <Route path="/hakkimizda" element={<About />} />
              <Route path="/iletisim" element={<Contact />} />
              <Route path="/vip" element={<Vip />} />
              
            </Routes>
          </Box>
          <Footer />
        </Box>
      </Router>
    </ThemeProvider>
  );
}

export default App;
