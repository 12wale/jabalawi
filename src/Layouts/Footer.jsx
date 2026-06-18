import { Link } from "react-router-dom";
import { FaFacebookF, FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#0a0a0a] border-t border-white/5 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2 lg:col-span-1">
            <Link to="/" className="text-4xl font-bold text-primary-gold oi-regular shadow-oi inline-block mb-6">
              الجبلاوي
            </Link>
            <p className="text-gray-text text-sm leading-relaxed mb-6">
              أفضل مطعم مشويات وفراخ في مصر. نقدم لك تجربة طعام شرقية أصلية بأجود أنواع اللحوم البلدي المتبلة بخلطتنا السرية.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-gray-text hover:text-primary-gold transition-colors">
                <FaFacebookF size={20} />
              </a>
              <a href="#" className="text-gray-text hover:text-primary-gold transition-colors">
                <FaInstagram size={20} />
              </a>
              <a href="#" className="text-gray-text hover:text-primary-gold transition-colors">
                <FaWhatsapp size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">روابط سريعة</h4>
            <ul className="space-y-3">
              <li><a href="#home" className="text-gray-text hover:text-primary-gold transition-colors text-sm">الرئيسية</a></li>
              <li><a href="#menu" className="text-gray-text hover:text-primary-gold transition-colors text-sm">المنيو</a></li>
              <li><a href="#offers" className="text-gray-text hover:text-primary-gold transition-colors text-sm">العروض</a></li>
              <li><a href="#about" className="text-gray-text hover:text-primary-gold transition-colors text-sm">من نحن</a></li>
              <li><a href="#testimonials" className="text-gray-text hover:text-primary-gold transition-colors text-sm">آراء العملاء</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">تواصل معنا</h4>
            <ul className="space-y-4">
              <li className="text-gray-text text-sm">
                <span className="block text-white mb-1">الخط الساخن:</span>
                19000
              </li>
              <li className="text-gray-text text-sm">
                <span className="block text-white mb-1">البريد الإلكتروني:</span>
                wlydrftm399@gmail.com
              </li>
              <li className="text-gray-text text-sm">
                <span className="block text-white mb-1">مواعيد العمل:</span>
                يومياً من ١٢ ظهراً حتى ٣ صباحاً
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="text-white font-bold text-lg mb-6">النشرة البريدية</h4>
            <p className="text-gray-text text-sm mb-4">
              اشترك الآن ليصلك كل جديد عن عروضنا وخصوماتنا
            </p>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="بريدك الإلكتروني" 
                className="bg-secondary-black border border-white/10 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-primary-gold transition-colors"
                dir="ltr"
              />
              <button 
                type="button" 
                className="bg-primary-gold text-dark-black font-bold py-2 rounded-lg hover:bg-yellow-600 transition-colors"
              >
                اشترك الآن
              </button>
            </form>
          </div>

        </div>

        <div className="border-t border-white/10 pt-8 text-center flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-text text-sm">
            © {new Date().getFullYear()} الجبلاوي للمشويات والفراخ. جميع الحقوق محفوظة.
          </p>
          <div className="flex gap-4">
            <a href="#" className="text-gray-text hover:text-white text-sm transition-colors">الشروط والأحكام</a>
            <a href="#" className="text-gray-text hover:text-white text-sm transition-colors">سياسة الخصوصية</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
