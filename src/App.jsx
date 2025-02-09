/** @format */

import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Aboutus from "./components/Aboutus/Aboutus";
import Project from "./components/Project/Project";
import Contactus from "./components/Contact/Contactus";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path='/Cobolt' element={<Aboutus />} />
          <Route path='projects' element={<Project />} />
          <Route path='contact' element={<Contactus />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}
