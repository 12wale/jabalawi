import Navbar from "../Components/Navbar";
import Hero from "../Components/Hero";
import Features from "../Components/Features";
import PopularDishes from "../Components/PopularDishes";
import Offers from "../Components/Offers";
import Stats from "../Components/Stats";
import Gallery from "../Components/Gallery";
import Branches from "../Components/Branches";
// import Contact from "../Components/Contact";
import Footer from "../Layouts/Footer";

const Home = () => {
  return (
    <div className="bg-dark-black min-h-screen">
      <Navbar />
      <Hero />
      <Features />
      <PopularDishes />
      <Offers />
      <Stats />
      <Gallery />
      <Branches />
      {/* <Contact /> */}
      <Footer />
    </div>
  );
};

export default Home;