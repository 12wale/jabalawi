import Navbar from "../Components/Navbar";
import Branches from "../Components/Branches";
import Footer from "../Layouts/Footer";

const BranchesPage = () => {
  return (
    <div className="bg-dark-black min-h-screen flex flex-col">
      <Navbar />
      <div className="pt-32 pb-16 bg-secondary-black relative overflow-hidden">
        <div className="absolute inset-0 bg-dark-black/50"></div>
        <div className="relative z-10 text-center px-4">
          <h1 className="text-4xl md:text-5xl font-oi text-primary-gold mb-4">فروعنا</h1>
          <p className="text-gray-text text-lg max-w-2xl mx-auto">
            نحن دائماً بالقرب منك. تعرف على مواقع فروعنا وأرقام التواصل المباشرة لكل فرع.
          </p>
        </div>
      </div>
      <div className="flex-grow py-12">
        <Branches />
      </div>
      <Footer />
    </div>
  );
};

export default BranchesPage;
