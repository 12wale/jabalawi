import { useEffect, useRef } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Autoplay } from "swiper/modules";
import { FiStar } from "react-icons/fi";
import "swiper/css";
import "swiper/css/pagination";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "أحمد مصطفى",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "من أفضل مطاعم المشويات اللي جربتها، الكباب دايب والتتبيلة خرافية. الخدمة سريعة والمكان ممتاز.",
  },
  {
    name: "سارة حسن",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "جودة اللحوم ممتازة جداً والنظافة واضحة، أنصح الجميع بتجربة شيش طاووق الجبلاوي.",
  },
  {
    name: "محمد كمال",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
    rating: 4,
    comment: "الأكل وصل سخن والتغليف ممتاز، الطرب عندهم حكاية تانية خالص.",
  },
  {
    name: "نورهان علي",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80",
    rating: 5,
    comment: "تجربة رائعة وتكرر أكيد، الأسعار مناسبة جداً لحجم الوجبات والجودة المقدمة.",
  }
];

const Testimonials = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const swiperRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(swiperRef.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, duration: 0.9, ease: "power3.out",
          scrollTrigger: { trigger: swiperRef.current, start: "top 80%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="testimonials" className="py-20 bg-dark-black relative overflow-hidden">
      <div className="absolute -top-20 -right-20 w-80 h-80 bg-primary-gold/5 rounded-full blur-[80px]"></div>
      <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-primary-red/5 rounded-full blur-[80px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4 oi-regular shadow-oi">آراء عملائنا</h2>
          <p className="text-gray-text max-w-2xl mx-auto">رأيكم أمانة في أعناقنا، وسعادتكم هدفنا الأول</p>
        </div>

        <div ref={swiperRef} className="opacity-0">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            breakpoints={{ 768: { slidesPerView: 2 }, 1024: { slidesPerView: 3 } }}
            pagination={{ clickable: true, dynamicBullets: true }}
            autoplay={{ delay: 3500, disableOnInteraction: false }}
            modules={[Pagination, Autoplay]}
            className="pb-12"
          >
            {testimonials.map((t, index) => (
              <SwiperSlide key={index}>
                <div className="glass p-6 rounded-2xl border border-white/5 hover:border-primary-gold/20 transition-all duration-300 h-full">
                  <div className="flex items-center gap-4 mb-4">
                    <img src={t.image} alt={t.name} className="w-14 h-14 rounded-full object-cover border-2 border-primary-gold/30" />
                    <div>
                      <h3 className="text-white font-bold">{t.name}</h3>
                      <div className="flex gap-1 mt-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <FiStar key={i} className="text-primary-gold fill-current" size={14} />
                        ))}
                      </div>
                    </div>
                  </div>
                  <p className="text-gray-text text-sm leading-relaxed">"{t.comment}"</p>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
