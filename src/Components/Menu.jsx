import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const categories = ["المشويات", "الفراخ", "السندويتشات", "المقبلات", "السلطات", "المشروبات"];

const allMenuItems = [
  { id: 1, category: "المشويات", name: "كباب وكفتة", desc: "نصف كيلو كباب وكفتة بلدي مشكل مع الأرز والسلطة", price: "280 ج.م", image: "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80" },
  { id: 2, category: "المشويات", name: "ريش ضاني", desc: "ريش ضاني مشوية على الفحم بتتبيلة الجبلاوي الخاصة", price: "400 ج.م", image: "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=400&q=80" },
  { id: 3, category: "الفراخ", name: "فرخة مشوية", desc: "فرخة كاملة مشوية على الفحم مع الأرز والخضار", price: "250 ج.م", image: "https://images.unsplash.com/photo-1598514982205-f36b96d1e8dd?auto=format&fit=crop&w=400&q=80" },
  { id: 4, category: "الفراخ", name: "شيش طاووق", desc: "أسياخ شيش طاووق مع الخضار المشوي", price: "200 ج.م", image: "https://images.unsplash.com/photo-1518529328227-2c930495f59d?auto=format&fit=crop&w=400&q=80" },
  { id: 5, category: "السندويتشات", name: "ساندوتش كفتة", desc: "ساندوتش كفتة في العيش البلدي مع الطحينة", price: "60 ج.م", image: "https://images.unsplash.com/photo-1481070555726-e2fe8357725c?auto=format&fit=crop&w=400&q=80" },
  { id: 6, category: "السندويتشات", name: "ساندوتش شيش", desc: "ساندوتش شيش طاووق في العيش السوري", price: "75 ج.م", image: "https://images.unsplash.com/photo-1628840042765-356cda07504e?auto=format&fit=crop&w=400&q=80" },
  { id: 7, category: "المقبلات", name: "ورق عنب", desc: "طبق ورق عنب بدبس الرمان", price: "50 ج.م", image: "https://images.unsplash.com/photo-1534080564583-6be75777b70a?auto=format&fit=crop&w=400&q=80" },
  { id: 8, category: "المقبلات", name: "سمبوسك لحمة", desc: "4 قطع سمبوسك مقرمشة محشوة باللحم المفروم", price: "40 ج.م", image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80" },
  { id: 9, category: "السلطات", name: "سلطة خضراء", desc: "تشكيلة من الخضروات الطازجة", price: "25 ج.م", image: "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?auto=format&fit=crop&w=400&q=80" },
  { id: 10, category: "السلطات", name: "طحينة", desc: "سلطة طحينة مميزة", price: "20 ج.م", image: "https://images.unsplash.com/photo-1541592102781-c71c1fceefbc?auto=format&fit=crop&w=400&q=80" },
  { id: 11, category: "المشروبات", name: "عصير مانجو", desc: "عصير مانجو طبيعي فريش", price: "45 ج.م", image: "https://images.unsplash.com/photo-1621506289937-a8e4df240d0b?auto=format&fit=crop&w=400&q=80" },
  { id: 12, category: "المشروبات", name: "مشروبات غازية", desc: "كانز (بيبسي، سفن اب، ميراندا)", price: "25 ج.م", image: "https://images.unsplash.com/photo-1622483767028-3f66f32aef97?auto=format&fit=crop&w=400&q=80" },
];

const Menu = () => {
  const [activeTab, setActiveTab] = useState(categories[0]);
  const sectionRef = useRef(null);
  const titleRef = useRef(null);
  const tabsRef = useRef(null);
  const cardsRef = useRef([]);

  const filteredItems = allMenuItems.filter(item => item.category === activeTab);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(titleRef.current,
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.8, ease: "power3.out",
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true }
        }
      );
      gsap.fromTo(tabsRef.current,
        { opacity: 0, y: 30 },
        { opacity: 1, y: 0, duration: 0.7, ease: "power3.out", delay: 0.2,
          scrollTrigger: { trigger: titleRef.current, start: "top 85%", once: true }
        }
      );
    }, sectionRef);
    return () => ctx.revert();
  }, []);

  // Animate cards when tab changes or on first render
  useEffect(() => {
    if (cardsRef.current.length > 0) {
      gsap.fromTo(
        cardsRef.current.filter(Boolean),
        { opacity: 0, y: 40 },
        { opacity: 1, y: 0, duration: 0.5, stagger: 0.1, ease: "power3.out" }
      );
    }
  }, [activeTab]);

  return (
    <section ref={sectionRef} id="menu" className="py-20 bg-dark-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div ref={titleRef} className="text-center mb-12 opacity-0">
          <h2 className="text-4xl font-bold text-white mb-4 oi-regular shadow-oi">المنيو</h2>
          <p className="text-gray-text max-w-2xl mx-auto">
            اكتشف تشكيلتنا الواسعة من المأكولات التي ترضي جميع الأذواق
          </p>
        </div>

        {/* Tabs */}
        <div ref={tabsRef} className="flex flex-wrap justify-center gap-4 mb-12 opacity-0">
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              className={`px-6 py-2 rounded-full font-bold transition-all duration-300 ${
                activeTab === cat
                  ? "bg-primary-gold text-dark-black shadow-[0_0_15px_rgba(212,160,23,0.5)] scale-105"
                  : "bg-secondary-black text-white hover:bg-white/10"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Menu Items Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredItems.map((item, index) => (
            <div
              key={item.id}
              ref={(el) => (cardsRef.current[index] = el)}
              className="flex flex-col sm:flex-row bg-secondary-black rounded-xl overflow-hidden glass border border-white/5 hover:border-primary-gold/30 transition-all duration-300 opacity-0"
            >
              <div className="sm:w-48 h-48 sm:h-auto shrink-0 overflow-hidden">
                <img src={item.image} alt={item.name} className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-6 flex flex-col justify-between flex-grow">
                <div>
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-xl font-bold text-white">{item.name}</h3>
                    <span className="text-primary-gold font-bold whitespace-nowrap mr-4">{item.price}</span>
                  </div>
                  <p className="text-gray-text text-sm mb-4 line-clamp-2">{item.desc}</p>
                </div>
                <button className="self-start text-primary-red font-bold hover:text-white transition-colors flex items-center gap-2 group">
                  <span>إضافة للطلب</span>
                  <span className="group-hover:-translate-x-1 transition-transform">←</span>
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Menu;
