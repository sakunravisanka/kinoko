// From Dev To Feature branch
import React from "react";
import AboutVideo from "./components/AboutVideo";
import AboutFarm from "./components/AboutFarm";
import MushroomVarieties from "./components/MushroomVarieties";
import Sustainability from "./components/Sustainability";
import Testimonials from "./components/Testimonials";
import ContactUs from "./components/ContactUs";
import HeroNew from "./components/HeroNew";
import YoutubeCollection from "./components/YoutubeCollection";
import Process from "./components/Process";
import Product from "./components/Product";
import NavigationBar from "./components/NavigationBar";
import { BrowserRouter } from "react-router-dom";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <Hero /> */}

        {/* Navigation Bar */}
        <NavigationBar />
        {/* New Hero  */}
        <HeroNew />
        {/* New Youtube Explain Video Section  */}
        <AboutVideo />
        <AboutFarm />
        <MushroomVarieties />
        <YoutubeCollection />
        {/* Product */}
        <Product />
        <Sustainability />
        <Process />
        <Testimonials />
        <ContactUs />
      </BrowserRouter>
    </div>
  );
}

export default App;
