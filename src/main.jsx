import { createRoot } from 'react-dom/client'
import { BrowserRouter, Routes, Route } from 'react-router'
import './index.scss'
import Layout from './components/Layout'
import Home from './pages/Home'
import Pricing from './pages/Pricing'
import AboutUs from './pages/AboutUs'
import Services from './pages/Services'
import Contact from './pages/Contact'



createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <Routes>
      <Route element={<Layout></Layout>}>
        <Route path="/" element={<Home></Home>}> </Route>
        <Route path="/AboutUs" element={<AboutUs></AboutUs>}></Route>
        <Route path="/Contact" element={<Contact></Contact>}> </Route>
        <Route path="/Pricing" element={<Pricing></Pricing>}> </Route>
        <Route path="/Services" element={<Services></Services>}> </Route>
      </Route>
    </Routes>
  </BrowserRouter>
);





