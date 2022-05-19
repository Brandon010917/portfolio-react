// React router dom
import { Route, Routes, useLocation } from "react-router-dom";
// Views
import Contact from "./views/Contact/Contact";
import Home from "./views/Home/Home";
import Projects from "./views/Projects/Projects";
import Skills from "./views/Skills/Skills";
// Components
import Header from "./components/Header/Header";
import { AnimatePresence } from "framer-motion";
// Context

const App = () => {
  const location = useLocation();

  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes key={location.key} location={location}>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </AnimatePresence>
    </>
  );
};

export default App;
