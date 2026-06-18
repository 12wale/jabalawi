import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FaWhatsapp, FaFacebookF, FaInstagram } from "react-icons/fa";
import logo from '../assets/logo.png'
gsap.registerPlugin(ScrollTrigger);

const Contact = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const formRef = useRef(null);
  const socialRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(formRef.current,
        { opacity: 0, x: 60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
        }
      );
      gsap.fromTo(socialRef.current,
        { opacity: 0, x: -60 },
        { opacity: 1, x: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="contact" className="py-20 bg-secondary-black relative overflow-hidden">
      <div className="absolute top-10 right-10 w-2 h-2 bg-primary-gold rounded-full shadow-[0_0_10px_#D4A017] animate-ping"></div>
      <div className="absolute bottom-20 left-20 w-3 h-3 bg-primary-red rounded-full shadow-[0_0_15px_#C62828] animate-ping" style={{ animationDelay: '1s' }}></div>
      <div className="absolute top-40 left-1/4 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_10px_#FFF] animate-ping" style={{ animationDelay: '2s' }}></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4 oi-regular shadow-oi">تواصل معنا</h2>
          <p className="text-gray-text max-w-2xl mx-auto">يسعدنا استقبال استفساراتكم وملاحظاتكم في أي وقت</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Contact Form */}
          <div ref={formRef} className="glass p-8 rounded-3xl border border-white/10 opacity-0">
            <form className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-gray-text mb-2 text-sm">الاسم</label>
                  <input type="text" placeholder="أدخل اسمك"
                    className="w-full bg-dark-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors" />
                </div>
                <div>
                  <label className="block text-gray-text mb-2 text-sm">رقم الهاتف</label>
                  <input type="tel" placeholder="رقم هاتفك" dir="ltr"
                    className="w-full bg-dark-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors text-right" />
                </div>
              </div>
              <div>
                <label className="block text-gray-text mb-2 text-sm">البريد الإلكتروني (اختياري)</label>
                <input type="email" placeholder="example@domain.com" dir="ltr"
                  className="w-full bg-dark-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors text-right" />
              </div>
              <div>
                <label className="block text-gray-text mb-2 text-sm">الرسالة</label>
                <textarea rows="4" placeholder="كيف يمكننا مساعدتك؟"
                  className="w-full bg-dark-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-primary-gold transition-colors resize-none">
                </textarea>
              </div>
              <button type="button"
                className="w-full bg-primary-gold hover:bg-yellow-600 text-dark-black font-bold py-4 rounded-xl shadow-[0_0_15px_rgba(212,160,23,0.3)] hover:shadow-[0_0_25px_rgba(212,160,23,0.5)] transition-all">
                إرسال الرسالة
              </button>
            </form>
          </div>

          {/* Social Links */}
          <div ref={socialRef} className="flex flex-col items-center justify-center text-center space-y-8 opacity-0">
            <div className="w-fit h-fit rounded-full overflow-hidden border-4 border-primary-gold/30 shadow-[0_0_30px_rgba(212,160,23,0.2)] mb-4">
              <img
                src={logo}
                alt="تواصل معنا"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h3 className="text-2xl font-bold text-white mb-4">تابعنا على السوشيال ميديا</h3>
              <p className="text-gray-text max-w-sm mb-8">
                ابق على اطلاع دائم بأحدث العروض والأطباق الجديدة من خلال متابعة صفحاتنا الرسمية.
              </p>
              <div className="flex justify-center gap-6">
                <a href="#" className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center text-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(37,211,102,0.5)] transition-all duration-300">
                  <FaWhatsapp />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-[#1877F2] text-white flex items-center justify-center text-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(24,119,242,0.5)] transition-all duration-300">
                  <FaFacebookF />
                </a>
                <a href="#" className="w-14 h-14 rounded-full bg-gradient-to-tr from-[#f09433] via-[#dc2743] to-[#bc1888] text-white flex items-center justify-center text-2xl hover:-translate-y-2 hover:shadow-[0_0_20px_rgba(220,39,67,0.5)] transition-all duration-300">
                  <FaInstagram />
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;
