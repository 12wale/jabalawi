import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FiMapPin, FiPhone, FiClock } from "react-icons/fi";

gsap.registerPlugin(ScrollTrigger);

const branches = [
  {
    name: "فرع مدينة نصر",
    address: "١٥ شارع عباس العقاد، مدينة نصر، القاهرة",
    phone: "01001234567",
    hours: "١٢:٠٠ ظهراً - ٢:٠٠ صباحاً",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.3456789!2d31.332345!3d30.065432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAzJzU1LjYiTiAzMcKwMTknNTYuNCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg",
  },
  {
    name: "فرع التجمع الخامس",
    address: "شارع التسعين الجنوبي، بجوار مول داون تاون",
    phone: "01112345678",
    hours: "١٢:٠٠ ظهراً - ٣:٠٠ صباحاً",
    mapUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d13812.3456789!2d31.432345!3d30.015432!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzDCsDAwJzU1LjYiTiAzMcKwMjUnNTYuNCJF!5e0!3m2!1sen!2seg!4v1620000000000!5m2!1sen!2seg",
  }
];

const Branches = () => {
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const cardsRef = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(cardsRef.current.filter(Boolean),
        { opacity: 0, y: 60 },
        {
          opacity: 1, y: 0, duration: 0.8, stagger: 0.2, ease: "power3.out",
          scrollTrigger: { trigger: sectionRef.current, start: "top 75%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="branches" className="py-20 bg-dark-black relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="text-center mb-16 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4 oi-regular shadow-oi">فروعنا</h2>
          <p className="text-gray-text max-w-2xl mx-auto">متواجدون دائماً بالقرب منك لتقديم أشهى المشويات</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {branches.map((branch, index) => (
            <div
              key={index}
              ref={(el) => (cardsRef.current[index] = el)}
              className="glass p-6 md:p-8 rounded-2xl border border-white/5 hover:border-primary-gold/30 transition-all duration-300 flex flex-col h-full opacity-0"
            >
              <h3 className="text-2xl font-bold text-primary-gold mb-6">{branch.name}</h3>

              <div className="space-y-4 mb-8 flex-grow">
                <div className="flex items-start gap-4">
                  <div className="bg-primary-red/10 p-2 rounded-lg text-primary-red mt-1"><FiMapPin size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">العنوان</h4>
                    <p className="text-gray-text text-sm">{branch.address}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-red/10 p-2 rounded-lg text-primary-red mt-1"><FiPhone size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">رقم الهاتف</h4>
                    <p className="text-gray-text text-sm">{branch.phone}</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="bg-primary-red/10 p-2 rounded-lg text-primary-red mt-1"><FiClock size={20} /></div>
                  <div>
                    <h4 className="text-white font-bold mb-1">مواعيد العمل</h4>
                    <p className="text-gray-text text-sm">{branch.hours}</p>
                  </div>
                </div>
              </div>

              <div className="w-full h-48 rounded-xl overflow-hidden border border-white/10">
                <iframe
                  src={branch.mapUrl}
                  width="100%"
                  height="100%"
                  style={{ border: 0, filter: "invert(90%) hue-rotate(180deg) grayscale(80%)" }}
                  allowFullScreen=""
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title={`خريطة ${branch.name}`}
                ></iframe>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Branches;
