import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const galleryImages = [
  {
    src: "https://images.unsplash.com/photo-1600891964092-4316c288032e?auto=format&fit=crop&w=1200&q=80",
    alt: "مشويات فاخرة",
    span: "md:col-span-2 md:row-span-2",
  },
  {
    src: "https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=900&q=80",
    alt: "كباب مشوي",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    // 🔥 بدل الكفتة (كان فيه مشكلة)
    src: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=900&q=80",
    alt: "كفتة مشوية",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=900&q=80",
    alt: "شيش طاووق",
    span: "md:col-span-1 md:row-span-2",
  },
  {
    // 🔥 بدل الوجبات الجانبية (كان فيه مشكلة)
    src: "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=900&q=80",
    alt: "وجبات جانبية",
    span: "md:col-span-1 md:row-span-1",
  },
  {
    src: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=1200&q=80",
    alt: "سلطات طازجة",
    span: "md:col-span-2 md:row-span-1",
  },
];
const Gallery = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const imagesRef = useRef([]);

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
        }
      );

      gsap.fromTo(
        imagesRef.current.filter(Boolean),
        { opacity: 0, scale: 0.85, y: 30 },
        {
          opacity: 1,
          scale: 1,
          y: 0,
          duration: 0.7,
          stagger: 0.12,
          ease: "power3.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="gallery" className="py-24 bg-secondary-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Title */}
        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-5xl font-bold text-white mb-4 shadow-oi oi-regular">
            معرض الصور
          </h2>
          <p className="text-gray-text max-w-2xl mx-auto">
            ألقِ نظرة على أطباقنا الشهية وأجوائنا المميزة
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 md:auto-rows-[260px] gap-5">

          {galleryImages.map((img, index) => (
            <div
              key={index}
              ref={(el) => (imagesRef.current[index] = el)}
              className={`
                relative
                group
                overflow-hidden
                rounded-2xl
                border border-white/10
                bg-black
                opacity-0
                ${img.span}
              `}
            >
              <img
                src={img.src}
                alt={img.alt}
                loading="lazy"
                className="
                  w-full
                  h-full
                  object-cover
                  block
                  transition-all
                  duration-700
                  group-hover:scale-110
                  group-hover:brightness-75
                "
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

              {/* Title */}
              <div className="absolute bottom-4 left-4 right-4">
                <h3 className="
                  text-white
                  text-xl
                  font-bold
                  transform
                  translate-y-4
                  group-hover:translate-y-0
                  transition-all
                  duration-300
                ">
                  {img.alt}
                </h3>
              </div>

            </div>
          ))}

        </div>
      </div>
    </section>
  );
};

export default Gallery;