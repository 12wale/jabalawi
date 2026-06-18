import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageTransition from "./Components/PageTransition";

import Home from "./Pages/Home";
import About from "./Pages/About";
import MenuPage from "./Pages/Menu";
import OffersPage from "./Pages/Offers";
import TestimonialsPage from "./Pages/Testimonials";
import BranchesPage from "./Pages/Branches";
import ContactPage from "./Pages/Contact";
import DishesPage from "./Pages/Dishes";

function AppRoutes() {
  return (
    <PageTransition>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/menu" element={<MenuPage />} />
        <Route path="/offers" element={<OffersPage />} />
        <Route path="/testimonials" element={<TestimonialsPage />} />
        <Route path="/branches" element={<BranchesPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/dishes" element={<DishesPage />} />
      </Routes>
    </PageTransition>
  );
}

export default function App() {
  return (
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
  );
}
