import React, { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "Scene/Home/Home"
import Drawer from "Component/Drawer/Drawer";
// import "./Controller/ControllerSetConfig";
import "./App.css";

function App() {
  const location = useLocation();
  // useEffect(() => {
  //   localStorage.clear();
  // }, []);

  return (
    <div className="App">
      <Drawer></Drawer>
      <AnimatePresence mode="wait">
        <Routes location={location} key={location.pathname}>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </AnimatePresence>
    </div>
  );
}

export default App;
