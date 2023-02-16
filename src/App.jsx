import { useState } from "react";
import About from "./components/about";
import Benefit from "./components/benefit";
import MainContent from "./components/main-content";

function App() {
  return (
    <div className="">
      <MainContent />
      <About />
      <Benefit />
    </div>
  );
}

export default App;
