import Navbar from "../Components/Navbar";
import Offers from "../Components/Offers";
import Footer from "../Layouts/Footer";
import offer from "../assets/offer.png";

const OffersPage = () => {
  return (
    <div className="bg-dark-black min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-16 bg-secondary-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-oi text-primary-gold mb-4">العروض الحصرية</h1>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            استفد من أقوى العروض العائلية ووجبات التوفير التي نقدمها يومياً وبأفضل الأسعار.
          </p>
        </div>
      </div>
      <div className="flex-grow  py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <img src={offer} alt="عرض خاص" className="w-full h-auto object-cover rounded-3xl shadow-2xl border border-white/10" />
          <div/>
        <Offers />
      </div>
      <Footer />
    </div>
    </div>
  );
};

export default OffersPage;
