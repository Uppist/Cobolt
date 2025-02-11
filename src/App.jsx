/** @format */

import React from "react";
import { BrowserRouter, HashRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Project from "./components/Project/Project";
import Contactus from "./components/Contact/Contactus";

export default function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path='/' element={<Aboutus />} />
          <Route path='projects' element={<Project />} />
          <Route path='contact' element={<Contactus />} />
        </Routes>
      </HashRouter>
    </>
  );
}
