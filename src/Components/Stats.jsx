import  { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Counter = ({ end, suffix, title, delay = 0 }) => {
  const [count, setCount] = useState(0);
  const counterRef = useRef(null);

  useEffect(() => {
    const obj = { val: 0 };
    
    ScrollTrigger.create({
      trigger: counterRef.current,
      start: "top 80%",
      once: true,
      onEnter: () => {
        gsap.to(obj, {
          val: end,
          duration: 2,
          delay: delay,
          ease: "power2.out",
          onUpdate: () => {
            setCount(Math.floor(obj.val));
          }
        });
      }
    });
  }, [end, delay]);

  return (
    <div ref={counterRef} className="text-center p-6 glass rounded-2xl border border-white/5 shadow-2xl hover:-translate-y-2 transition-transform duration-300">
      <div className="text-5xl font-bold text-primary-gold mb-2 oi-regular shadow-oi">
        +{count}{suffix}
      </div>
      <div className="text-xl text-white font-medium">{title}</div>
    </div>
  );
};

const Stats = () => {
  return (
    <section className="py-16 relative bg-gradient-to-r from-dark-black via-secondary-black to-dark-black border-y border-white/10">
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Counter end={10} suffix="" title="سنوات خبرة" delay={0} />
          <Counter end={50} suffix=" ألف" title="عميل سعيد" delay={0.2} />
          <Counter end={100} suffix=" ألف" title="طلب ناجح" delay={0.4} />
        </div>
      </div>
    </section>
  );
};

export default Stats;
