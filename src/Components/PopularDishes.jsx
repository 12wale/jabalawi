import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const dishes = [
  {
    name: "مشكل مشويات",
    desc: "تشكيلة رائعة من الكباب والكفتة والشيش طاووق والريش مع الأرز البسمتي",
    price: "450 ج.م",
    image:
      "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "كباب",
    desc: "قطع الكباب البلدي الطازج المتبل بخلطتنا السرية والمشوي على الفحم",
    price: "320 ج.م",
    image:
      "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=800&q=80",
  },
  {
    name: "كفتة",
    desc: "كفتة ضاني مشوية على السيخ ببهارات الجبلاوي المميزة",
    price: "280 ج.م",
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    // 🔥 FIXED: شيش طاووق
    name: "شيش طاووق",
    desc: "قطع الدجاج المتبلة بخلطة الزبادي والبهارات المشوية بعناية",
    price: "210 ج.م",
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
  },
  {
    // 🔥 FIXED: نصف فرخة
     name: " فرخة مشوية",
  desc: "نصف دجاجة متبلة بخلطتنا المشهورة ومشوية على الفحم مع الطحينة",
  price: "300 ج.م",
  image:
    "https://images.pexels.com/photos/616354/pexels-photo-616354.jpeg?auto=compress&cs=tinysrgb&w=800", },
  {
    name: "طرب",
    desc: "طرب بلدي محشو بالكفتة المتبلة مع دهن الضأن المشوي",
    price: "290 ج.م",
    image:
      "https://images.unsplash.com/photo-1628294895950-9805252327bc?auto=format&fit=crop&w=800&q=80",
  },
];

const PopularDishes = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        titleRef.current,
        { opacity: 0, y: 40 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          scrollTrigger: {
            trigger: titleRef.current,
            start: "top 85%",
            once: true,
          },
        },
      );

      gsap.fromTo(
        cardsRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        },
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="dishes" className="py-20 bg-secondary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4 oi-regular shadow-oi">
            أشهر الأطباق
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto">
            اختيارات عملائنا المفضلة من أجود أنواع اللحوم المحضرة بشغف
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {dishes.map((dish, index) => (
           <div
  key={index}
  ref={(el) => (cardsRef.current[index] = el)}
  className="
    relative
    bg-[#161616]/80
    backdrop-blur-lg
    rounded-3xl
    overflow-hidden
    border border-white/10
    shadow-[0_10px_40px_rgba(0,0,0,.4)]
    group
    opacity-0
    transition-all
    duration-500
    hover:-translate-y-4
    hover:border-primary-gold
    hover:shadow-[0_0_40px_rgba(212,160,23,.35)]
    hover:[transform:perspective(1200px)_rotateX(6deg)_rotateY(-6deg)]
  "
>
  {/* Top Gold Line */}
  <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-transparent via-primary-gold to-transparent z-20"></div>

  {/* Shine Effect */}
  <div
    className="
      absolute
      -left-40
      top-0
      h-full
      w-20
      rotate-12
      bg-white/10
      blur-xl
      opacity-0
      group-hover:opacity-100
      group-hover:left-[130%]
      transition-all
      duration-1000
      z-20
    "
  />

  {/* Image */}
  <div className="relative h-64 overflow-hidden">

    <img
      src={dish.image}
      alt={dish.name}
      className="
        w-full
        h-full
        object-cover
        transition-transform
        duration-700
        group-hover:scale-110
      "
    />

    {/* Overlay */}
    <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-[#11111160] to-transparent" />

    {/* Separator Gradient */}
    <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-b from-transparent to-[#161616]" />

    {/* Price */}
    <div
      className="
        absolute
        top-5
        left-5
        w-16
        h-16
        rounded-full
        bg-primary-gold/90
        flex
        items-center
        justify-center
        text-dark-black
        font-bold
        shadow-[0_0_25px_rgba(212,160,23,.6)]
        backdrop-blur-md
      "
    >
      {dish.price}
    </div>

    {/* Badge */}
    <div
      className="
        absolute
        top-5
        right-5
        bg-primary-red
        px-3
        py-1
        rounded-full
        text-sm
        text-white
        font-bold
        shadow-lg
      "
    >
      🔥 مميز
    </div>
  </div>

  {/* Content */}
  <div className="relative p-7">

    <h3
      className="
        text-2xl
        font-bold
        text-white
        mb-3
        transition-colors
        duration-300
        group-hover:text-primary-gold
      "
    >
      {dish.name}
    </h3>

    <p className="text-gray-text leading-7 text-sm mb-7 line-clamp-2">
      {dish.desc}
    </p>

    <button
      className="
        relative
        overflow-hidden
        w-full
        py-3
        rounded-2xl
        bg-primary-red
        text-white
        font-bold
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_0_25px_rgba(198,40,40,.7)]
      "
    >
      <span className="relative z-10">اطلب الآن</span>

      <div
        className="
          absolute
          inset-0
          opacity-0
          group-hover:opacity-100
          transition-opacity
          duration-300
          bg-gradient-to-r
          from-transparent
          via-white/20
          to-transparent
        "
      />
    </button>

  </div>
</div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PopularDishes;
