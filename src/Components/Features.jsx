import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Features = () => {
  const sectionRef = useRef(null);
  const cardsRef = useRef([]);

  const features = [
    { title: "مشويات طازجة", icon: "🔥", desc: "لحوم بلدية طازجة تتبل وتُشوى يومياً" },
    { title: "توصيل سريع", icon: "🚚", desc: "نصلك ساخناً أينما كنت في أسرع وقت" },
    { title: "أجود أنواع اللحوم", icon: "🥩", desc: "نختار أفضل قطع اللحم بعناية فائقة" },
    { title: "جودة ومذاق استثنائي", icon: "⭐", desc: "سر التتبيلة الخاصة التي تميزنا" },
  ];

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.15,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
  ref={sectionRef}
  className="py-28 bg-dark-black relative overflow-hidden"
>
  {/* Smoke Right */}
  <div className="smoke smoke-right"></div>

  {/* Smoke Left */}
  <div className="smoke smoke-left"></div>

  <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

    {/* Title */}
    <div className="text-center mb-16">
      <h2 className="text-5xl font-bold text-white mb-4 shadow-oi oi-regular">
        لماذا الجبلاوي ؟
      </h2>

      <p className="text-gray-text max-w-2xl mx-auto">
        جودة استثنائية ومذاق أصيل يجعلنا الاختيار الأول لعشاق المشويات.
      </p>
    </div>

    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
      {features.map((feature, index) => (
        <div
          key={index}
          ref={(el) => (cardsRef.current[index] = el)}
          className="
            relative
            overflow-hidden
            rounded-3xl
            p-8
            text-center
            bg-white/[0.03]
            backdrop-blur-xl
            border border-white/10
            group
            opacity-0
            transition-all
            duration-500
            hover:-translate-y-4
            hover:border-primary-gold
            hover:shadow-[0_0_40px_rgba(212,160,23,.2)]
          "
        >
          {/* Gold line */}
          <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-gold to-transparent"></div>

          {/* Glow */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-b from-primary-gold/10 to-transparent"></div>

          {/* Icon */}
          <div
            className="
              relative
              z-10
              w-24
              h-24
              mx-auto
              mb-6
              rounded-full
              flex
              items-center
              justify-center
              text-5xl
              bg-primary-gold/10
              border border-primary-gold/20
              shadow-[0_0_30px_rgba(212,160,23,.2)]
              group-hover:scale-110
              transition-all
              duration-500
            "
          >
            {feature.icon}
          </div>

          <h3 className="relative z-10 text-2xl font-bold text-white mb-4 group-hover:text-primary-gold transition-colors">
            {feature.title}
          </h3>

          <p className="relative z-10 text-gray-text leading-7 text-sm">
            {feature.desc}
          </p>
        </div>
      ))}
    </div>
  </div>
</section>
  );
};

export default Features;
