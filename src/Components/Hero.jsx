import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import logo from "../assets/logo.png";
import heroimg from "../assets/heroimg.png";
gsap.registerPlugin(ScrollTrigger);

const Hero = () => {
  const textRef = useRef(null);
  const imageRef = useRef(null);
  const badgeRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        textRef.current,
        { opacity: 0, y: 60 },
        {
          opacity: 1,
          y: 0,
          duration: 1,
          ease: "power3.out",
          delay: 0.3,
        }
      );

      gsap.fromTo(
        imageRef.current,
        { opacity: 0, scale: 0.8 },
        {
          opacity: 1,
          scale: 1,
          duration: 1.2,
          ease: "back.out(1.2)",
          delay: 0.6,
        }
      );

      gsap.fromTo(
        badgeRef.current,
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power3.out",
          delay: 1.2,
        }
      );
    });

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="home"
      className="relative min-h-screen overflow-hidden pt-36 md:pt-20 flex items-center"
    >
      {/* Background */}
      <div
        className="absolute inset-0 z-0 bg-cover bg-center"
        style={{
          backgroundImage:
            `url(${heroimg})`,
          // backgroundImage: "'https://images.unsplash.com/photo-1544025162-d76694265947?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80')",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-dark-black via-dark-black/90 to-dark-black/40"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-primary-red/10 mix-blend-screen"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Text Content */}
          <div
            ref={textRef}
            className="opacity-0 flex flex-col items-center md:items-start text-center md:text-right"
          >
            <div className="mb-10">
              <h1
                className="
                  text-5xl
                  sm:text-6xl
                  md:text-7xl
                  lg:text-8xl
                  xl:text-9xl
                  font-bold
                  text-white
                  head-oi
                  shadow-oi
                  leading-tight
                  -rotate-3
                  md:-rotate-5
                "
              >
                الجبلاوي
              </h1>
            </div>

            <p className="text-gray-text text-lg md:text-xl mb-8 max-w-lg leading-relaxed">
              استمتع بأشهى المشويات واللحوم الطازجة المحضرة يومياً بمذاق أصيل
              لا يُنسى. أجواء شرقية فاخرة وتجربة طعام استثنائية.
            </p>

            <div className="flex flex-wrap gap-4 justify-center md:justify-start">
              <a
                href="#menu"
                className="bg-primary-gold hover:bg-yellow-600 text-dark-black px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_15px_rgba(212,160,23,0.4)] hover:shadow-[0_0_25px_rgba(212,160,23,0.6)] hover:-translate-y-1"
              >
                تصفح المنيو
              </a>

              <a
                href="#order"
                className="bg-transparent border-2 border-primary-red text-white hover:bg-primary-red px-8 py-3 rounded-full font-bold transition-all hover:shadow-[0_0_20px_rgba(198,40,40,0.6)] hover:-translate-y-1"
              >
                اطلب الآن
              </a>
            </div>
          </div>

          {/* Logo */}
          <div
            ref={imageRef}
            className="relative opacity-0 flex justify-center"
          >
            <div className="absolute inset-0 bg-primary-gold/20 blur-[100px] rounded-full"></div>

            <img
              src={logo}
              alt="الجبلاوي"
              className="
                relative z-10
                w-64
                sm:w-80
                md:w-full
                h-auto
                object-contain
                drop-shadow-2xl
              "
            />

            {/* Badge */}
            <div
              ref={badgeRef}
              className="absolute bottom-0 left-0 md:-bottom-6 md:-left-6 bg-dark-black glass p-4 rounded-xl border border-primary-gold/30 shadow-2xl animate-bounce opacity-0"
            >
              <div className="flex items-center gap-3">
                <span className="text-3xl">🔥</span>

                <div>
                  <p className="text-white font-bold text-sm">
                    مشويات طازجة
                  </p>

                  <p className="text-primary-gold text-xs">
                    100% بلدي
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Hero;