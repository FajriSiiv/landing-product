import { useState } from "react";
import About from "./components/about";
import Benefit from "./components/benefit";
import Join from "./components/join";
import MainContent from "./components/main-content";
import Testimonial from "./components/testi";

function App() {
  return (
    <div className="">
      <MainContent />
      <About />
      <Benefit />
      <Testimonial />
      <Join />
    </div>
  );
}

export default App;
