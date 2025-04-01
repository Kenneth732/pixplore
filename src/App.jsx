import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Service from "./components/Service";
import Testimonials from "./components/Testimonials";
import Pricing from "./components/Pricing";
import PlatformShowcase from "./components/PlatformShowcase";
import Contact from "./components/Contact";
import Faq from "./components/Faq";

const theme = createTheme({
  palette: {
    primary: { main: "#1976d2" }, // Pixplorer Theme Color
    secondary: { main: "#ff9800" },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Navbar />
      <Hero />
      <Features />
      <Service />
      <Testimonials />
      <Pricing />
      <PlatformShowcase />
      <Contact />
      <Faq />
      <Footer />
    </ThemeProvider>
  );
}

export default App;
