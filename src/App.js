import React from "react";
import Booking from "./components/Booking";
import Carousel from "./components/Carousel";
import Cities from "./components/Cities";
import Footer from "./components/Footer";
import Gallery from "./components/Gallery";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Gallery />
      <Booking />
      <Cities />
      <Carousel />
      <Footer />
    </div>
  );
};

export default App;
