
import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX } from "react-icons/fi";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  const links = [
    { name: "الرئيسية", path: "/" },
    { name: "أشهر الأطباق", path: "/dishes" },
    { name: "المنيو", path: "/menu" },
    { name: "العروض", path: "/offers" },
    { name: "من نحن", path: "/about" },
    { name: "آراء العملاء", path: "/testimonials" },
    { name: "الفروع", path: "/branches" },
    { name: "تواصل معنا", path: "/contact" },
  ];

  const handleShowMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <>
      {/* Navbar */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-[#111111]/90 backdrop-blur-md border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16 md:h-20">

            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img
                src={logo}
                className="w-14 h-14 md:w-16 md:h-16 object-contain"
                alt="logo"
              />
            </Link>

            {/* Desktop Links */}
            <div className="hidden lg:flex items-center gap-6 xl:gap-8">
              {links.map((link, index) => (
                <Link
                  key={index}
                  to={link.path}
                  className="text-light-text hover:text-primary-gold transition duration-300 font-medium whitespace-nowrap"
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Desktop CTA */}
            <div className="hidden lg:flex">
              <a
                href="#order"
                className="bg-primary-red hover:bg-red-700 text-white px-6 py-2 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(198,40,40,0.5)] hover:shadow-[0_0_25px_rgba(198,40,40,0.8)]"
              >
                اطلب الآن
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="lg:hidden text-primary-gold"
              onClick={handleShowMobileMenu}
            >
              {showMobileMenu ? <FiX size={28} /> : <FiMenu size={28} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Overlay */}
      <div
        className={`fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-all duration-300 ${
          showMobileMenu
            ? "opacity-100 visible"
            : "opacity-0 invisible"
        }`}
        onClick={() => setShowMobileMenu(false)}
      />

      {/* Mobile Sidebar */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] max-w-[320px] bg-[#111111] border-l border-primary-gold/20 z-50 transition-transform duration-500 ${
          showMobileMenu ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center p-6 border-b border-white/10">
          <img
            src={logo}
            className="w-14 h-14 object-contain"
            alt="logo"
          />

          <button
            className="text-primary-gold"
            onClick={() => setShowMobileMenu(false)}
          >
            <FiX size={28} />
          </button>
        </div>

        {/* Links */}
        <div className="flex flex-col mt-8 gap-6 px-8">

          {links.map((link, index) => (
            <Link
              key={index}
              to={link.path}
              className="text-light-text text-lg hover:text-primary-gold transition duration-300"
              onClick={() => setShowMobileMenu(false)}
            >
              {link.name}
            </Link>
          ))}

          <a
            href="#order"
            className="mt-4 bg-primary-red text-center py-3 rounded-full text-white font-bold hover:bg-red-700 transition"
            onClick={() => setShowMobileMenu(false)}
          >
            اطلب الآن
          </a>

        </div>
      </div>
    </>
  );
};

export default Navbar;
