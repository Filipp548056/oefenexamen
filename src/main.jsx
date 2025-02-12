import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import ReactDOM from "react-dom/client";
import { BrowserRouter, createBrowserRouter, RouterProvider, Routes, Route } from "react-router-dom";
import './index.scss'
import Home from './routes/Home.jsx';
import Contact from './routes/Contact';
import About from './routes/About'
import Pricing from './routes/Pricing';
import Services from "./routes/Services";
import Layout from './components/Layout';
import { useState } from 'react';


ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}> </Route> 
        <Route path="/About" element={<About></About>}> </Route> 
        <Route path="/Contact" element={<Contact></Contact>}> </Route> 
        <Route path="/Pricing" element={<Pricing></Pricing>}> </Route> 
        <Route path="/Services" element={<Services></Services>}> </Route> 
      </Route>
    </Routes>
  </BrowserRouter>
);





