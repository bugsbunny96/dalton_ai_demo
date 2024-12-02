import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./pages/About";
import LoginSignup from "./pages/LoginSignup";
import AnimatedSlider from "./pages/AnimatedSlider";

const App = () => {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/about-1" element={<AnimatedSlider />} />
          <Route path="/about-2" element={<About />} />
          <Route path="/login" element={<LoginSignup />} />
        </Routes>
      </Layout>
    </Router>
  );
};

const Layout = ({ children }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname === "/login";

  return (
    <div className="flex flex-col h-screen">
      {/* Render Header only if not on /login */}
      {!hideHeaderFooter && <Header />}

      {/* Main Content */}
      <main className="flex-grow overflow-y-auto">
        {children}
      </main>

      {/* Render Footer only if not on /login */}
      {!hideHeaderFooter && <Footer />}
    </div>
  );
};

export default App;
