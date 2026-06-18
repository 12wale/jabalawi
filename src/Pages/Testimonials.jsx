import Navbar from "../Components/Navbar";
import Testimonials from "../Components/Testimonials";
import Footer from "../Layouts/Footer";

const TestimonialsPage = () => {
  return (
    <div className="bg-dark-black min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-16 bg-secondary-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-oi text-primary-gold mb-4">آراء العملاء</h1>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            رأيك يهمنا! تصفح آراء زبائننا الكرام عن تجربتهم في مطاعم الجبلاوي.
          </p>
        </div>
      </div>
      <div className="flex-grow py-12">
        <Testimonials />
      </div>
      <Footer />
    </div>
  );
};

export default TestimonialsPage;
