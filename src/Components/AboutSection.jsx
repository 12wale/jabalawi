import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiCheck } from "react-icons/fi";
import img from "../assets/chife.png";
gsap.registerPlugin(ScrollTrigger);

const AboutSection = () => {
  const imageRef = useRef(null);
  const textRef = useRef(null);
  const listRef = useRef([]);

  const points = [
    "لحوم طازجة يومياً من أفضل المزارع",
    "تتبيلة الجبلاوي الخاصة والمميزة",
    "جودة عالية في التحضير والتقديم",
    "خدمة سريعة وطاقم عمل محترف",
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Image slides in from left
      gsap.fromTo(imageRef.current,
        { opacity: 0, x: -80 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: imageRef.current, start: "top 80%", once: true }
        }
      );

      // Text slides in from right
      gsap.fromTo(textRef.current,
        { opacity: 0, x: 80 },
        {
          opacity: 1, x: 0, duration: 1, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 80%", once: true }
        }
      );

      // List items stagger in
      gsap.fromTo(listRef.current.filter(Boolean),
        { opacity: 0, x: 40 },
        {
          opacity: 1, x: 0, duration: 0.5, stagger: 0.15, ease: "power3.out",
          scrollTrigger: { trigger: textRef.current, start: "top 75%", once: true }
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-20 bg-secondary-black relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

          {/* Image */}
          <div ref={imageRef} className="relative  order-2 md:order-1 opacity-0">
            <div className="absolute inset-0  bg-primary-gold/20 blur-[80px] rounded-full"></div>
            <img
              src={img}
              alt="شيف الجبلاوي"
              className="relative z-10 w-full h-fit object-cover rounded-3xl shadow-2xl border border-white/10"
            />
            <div className="absolute -bottom-8 z-10 left-1/2-right-8 bg-dark-black glass p-6 rounded-2xl border border-primary-red/30 shadow-[0_0_30px_rgba(198,40,40,0.3)] animate-pulse hidden sm:block">
              <h4 className="text-primary-gold font-bold text-2xl mb-1">+10</h4>
              <p className="text-white text-sm">سنوات من الخبرة</p>
            </div>
          </div>

          {/* Text Content */}
          <div ref={textRef} className="order-1 md:order-2 opacity-0">
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 oi-regular shadow-oi">لماذا الجبلاوي؟</h2>
            <p className="text-gray-text text-lg mb-8 leading-relaxed">
              منذ تأسيسنا، ونحن نحرص على تقديم أفضل تجربة طعام لعملائنا. شغفنا بالشوي المتقن واللحوم البلدية الطازجة هو ما يميزنا ويجعلنا الخيار الأول لمحبي المشويات.
            </p>

            <ul className="space-y-4 mb-10">
              {points.map((point, index) => (
                <li key={index} ref={(el) => (listRef.current[index] = el)} className="flex items-center gap-4 group opacity-0">
                  <div className="bg-primary-red/10 p-2 rounded-lg text-primary-red group-hover:bg-primary-red group-hover:text-white transition-colors duration-300">
                    <FiCheck size={24} />
                  </div>
                  <span className="text-white font-medium text-lg">{point}</span>
                </li>
              ))}
            </ul>

            <button className="bg-primary-gold hover:bg-yellow-600 text-dark-black px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(212,160,23,0.4)] hover:shadow-[0_0_25px_rgba(212,160,23,0.6)] hover:-translate-y-1">
              اقرأ قصتنا كاملة
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;
