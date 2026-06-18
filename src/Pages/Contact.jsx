import Navbar from "../Components/Navbar";
import Contact from "../Components/Contact";
import Footer from "../Layouts/Footer";

const ContactPage = () => {
  return (
    <div className="bg-dark-black min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-16 bg-secondary-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-oi text-primary-gold mb-4">تواصل معنا</h1>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            هل لديك أي استفسار أو مقترح؟ يسعدنا تواصلك معنا دائماً عبر القنوات التالية.
          </p>
        </div>
      </div>
      <div className="flex-grow py-12">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default ContactPage;
