import { useState } from "react";
import "./App.css";

//components
import Navbar from "@/components/Navbar.jsx";
import HeroSection from "@/components/HeroSection.jsx";
import Products from "@/components/Products.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <HeroSection />
      <Products />
    </div>
  );
}

export default App;
