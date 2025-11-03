import "./index.css";
import React, { useState } from "react";
import { Navbar } from "./assets/components/navbar/navbar.jsx";
import { Header } from "./assets/components/Header/Header.jsx";
import { Skill } from "./assets/components/maincontent/Skill/Skill.jsx";
import { Example } from "./assets/components/maincontent/example/Example.jsx";
import { Footer } from "./assets/components/footer/Footer.jsx";

function App() {
  return (
    <>
      <section className="main-container">
        <Navbar />
        <Header />
        <Skill />
        <Example />
        <Footer />
      </section>
    </>
  );
}
export default App;
