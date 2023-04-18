import React from "react";
import { HashRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
//import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Blog from "./components/pages/Blog";
import Contact from "./components/pages/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/about" exact element={<About />} />
          <Route path="/blog" exact element={<Blog />} />
          <Route path="/contact" exact element={<Contact />} />
          <Route path="/*" element={<About />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
