import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay, EffectCards } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/effect-cards";
import { FiCheckCircle } from "react-icons/fi";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const offers = [
  {
    title: "عرض العائلة",
    price: "850 ج.م",
    oldPrice: "1050 ج.م",
    items: ["كيلو مشويات مشكل", "نصف فرخة مشوية", "أرز بسمتي عائلي", "سلطات طحينة وخضراء", "مشروبات غازية لـ 4 أشخاص"],
    bgImage: "https://images.unsplash.com/photo-1555939594-58d7cb561ad1?auto=format&fit=crop&w=800&q=80",
    badge: "الأكثر مبيعاً"
  },
  {
    title: "عرض الأصحاب",
    price: "350 ج.م",
    oldPrice: "450 ج.م",
    items: ["2 سيخ شيش طاووق", "سيخ كفتة", "بطاطس محمرة", "سلطة طحينة", "2 مشروب غازي"],
    bgImage: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
    badge: "توفير"
  },
  {
    title: "عرض التوفير",
    price: "220 ج.م",
    oldPrice: "280 ج.م",
    items: ["نصف فرخة مشوية", "أرز بسمتي", "سلطة", "مشروب غازي"],
    bgImage: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?auto=format&fit=crop&w=800&q=80",
    badge: "فردي"
  }
];

const Offers = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(swiperRef.current,
        { opacity: 0, scale: 0.85 },
        { opacity: 1, scale: 1, duration: 1, ease: "back.out(1.2)",
          scrollTrigger: { trigger: swiperRef.current, start: "top 80%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="offers" className="py-20 relative overflow-hidden bg-dark-black">
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary-red/10 rounded-full blur-[100px]"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-gold/10 rounded-full blur-[100px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4 oi-regular shadow-oi">عروض الجبلاوي</h2>
          <p className="text-gray-text max-w-2xl mx-auto">لا تفوت أقوى العروض والتخفيضات على أشهى الوجبات</p>
        </div>

        <div ref={swiperRef} className="max-w-4xl mx-auto opacity-0">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards, Pagination, Autoplay]}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            className="w-full sm:w-[400px] md:w-[500px]"
          >
            {offers.map((offer, index) => (
              <SwiperSlide key={index} className="rounded-2xl overflow-hidden bg-secondary-black border border-white/10 shadow-2xl">
                <div className="relative h-48">
                  <img src={offer.bgImage} alt={offer.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary-black to-transparent"></div>
                  {offer.badge && (
                    <div className="absolute top-4 left-4 bg-primary-red text-white px-4 py-1 rounded-full font-bold text-sm shadow-[0_0_15px_rgba(198,40,40,0.8)] animate-pulse">
                      {offer.badge}
                    </div>
                  )}
                  <h3 className="absolute bottom-4 right-6 text-3xl font-bold text-white">{offer.title}</h3>
                </div>
                <div className="p-6">
                  <div className="flex items-end gap-3 mb-6">
                    <span className="text-4xl font-bold text-primary-gold">{offer.price}</span>
                    <span className="text-gray-500 line-through mb-1">{offer.oldPrice}</span>
                  </div>
                  <ul className="space-y-3 mb-8">
                    {offer.items.map((item, idx) => (
                      <li key={idx} className="flex items-center gap-3 text-white">
                        <FiCheckCircle className="text-primary-gold shrink-0" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <button className="w-full py-3 bg-gradient-to-r from-primary-gold to-yellow-600 text-dark-black rounded-lg font-bold hover:shadow-[0_0_20px_rgba(212,160,23,0.5)] transition-shadow">
                    احجز العرض الآن
                  </button>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Offers;
