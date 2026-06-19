import { useState } from "react";

const dishes = [
  {
    id: 1,
    category: "مشويات مشكلة",
    name: "مشكل الجبلاوي",
    description: "كباب، كفتة، شيش طاووق وريش ضاني مع الأرز والسلطات.",
    price: 450,
    image:
      "https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 2,
    category: "كباب",
    name: "كباب بلدي",
    description: "قطع لحم بلدي مشوية على الفحم مع الطحينة.",
    price: 320,
    image:
      "https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 3,
    category: "كفتة",
    name: "كفتة ضاني",
    description: "كفتة متبلة بخلطة الجبلاوي الخاصة.",
    price: 280,
    image:
      "https://images.unsplash.com/photo-1529193591184-b1d58069ecdd?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 4,
    category: "فراخ مشوية",
    name: "نصف فرخة مشوية",
    description: "دجاجة متبلة ومشوية على الفحم.",
    price: 190,
    image:
      "https://images.unsplash.com/photo-1608039755401-742074f0548d?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 5,
    category: "شيش طاووق",
    name: "شيش طاووق",
    description: "قطع دجاج متبلة ومشوية بعناية.",
    price: 220,
    image:
      "https://images.unsplash.com/photo-1603360946369-dc9bb6258143?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: 6,
    category: "طرب",
    name: "طرب بلدي",
    description: "طرب محشو بالكفتة مع دهن الضأن.",
    price: 290,
    image:
      "https://img.youm7.com/large/202412111154435443.jpg",
  },
];

const categories = [
  "الكل",
  "مشويات مشكلة",
  "كباب",
  "كفتة",
  "فراخ مشوية",
  "شيش طاووق",
  "طرب",
];

export default function MenuSection() {
  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [search, setSearch] = useState("");

  const normalizedSearch = search.trim().toLowerCase();

  const filteredDishes = dishes.filter((dish) => {
    const categoryMatch =
      selectedCategory === "الكل" ||
      dish.category === selectedCategory;

    const searchMatch =
      normalizedSearch === "" ||
      dish.name.toLowerCase().includes(normalizedSearch) ||
      dish.description.toLowerCase().includes(normalizedSearch);

    return categoryMatch && searchMatch;
  });

  return (
    <section className="bg-[#090909] min-h-screen py-24">
      <div className="max-w-7xl mx-auto px-5">
        <div className="flex flex-col lg:flex-row gap-8 items-start">
          
          {/* MAIN CONTENT */}
          <div className="flex-1">
            
            {/* SEARCH */}
            <input
              type="text"
              placeholder="ابحث عن وجبة..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                bg-[#111]
                border border-white/10
                rounded-full
                px-8
                py-4
                text-white
                outline-none
                focus:border-primary-gold
                mb-10
              "
            />

            {/* COUNTER */}
            <div className="flex justify-end mb-8">
              <div className="bg-[#111] border border-white/10 rounded-2xl px-8 py-4 text-white font-bold">
                🛒 عدد الأصناف : {filteredDishes.length}
              </div>
            </div>

            {/* GRID */}
            <div className="grid sm:grid-cols-2 xl:grid-cols-3 gap-8">
              {filteredDishes.map((dish) => (
                <div
                  key={dish.id}
                  className="
                    rounded-3xl
                    overflow-hidden
                    bg-[#141414]
                    border border-white/10
                    group
                    transition-all
                    duration-500
                    hover:border-[#D4A017]
                    hover:-translate-y-3
                    hover:shadow-[0_0_40px_rgba(212,160,23,.15)]
                  "
                >
                  {/* IMAGE */}
                  <div className="relative overflow-hidden h-64">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="
                        w-full h-full object-cover
                        duration-700
                        group-hover:scale-110
                      "
                    />

                    <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

                    <div className="absolute bottom-5 left-5 bg-red-600 px-4 py-2 rounded-full text-white font-bold">
                      EGP {dish.price}
                    </div>
                  </div>

                  {/* CONTENT */}
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-[#D4A017] duration-300">
                      {dish.name}
                    </h3>

                    <p className="text-gray-400 leading-7 text-sm mb-6">
                      {dish.description}
                    </p>

                    <button className="w-full py-3 rounded-xl bg-red-600 text-white font-bold hover:bg-red-700 transition-all">
                      اطلب الآن
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* SIDEBAR */}
          <div className="lg:w-[260px] self-start">
            <div className="sticky top-24 bg-[#111] rounded-3xl p-5 border border-white/10">
              <div className="space-y-4">
                {categories.map((category) => (
                  <button
                    key={category}
                    onClick={() => setSelectedCategory(category)}
                    className={`
                      w-full
                      py-4
                      rounded-2xl
                      font-bold
                      transition-all
                      ${
                        selectedCategory === category
                          ? "bg-red-600 text-white shadow-[0_0_20px_rgba(198,40,40,.4)]"
                          : "bg-[#0d0d0d] text-gray-300 border border-white/10 hover:border-yellow-500"
                      }
                    `}
                  >
                    {category}
                  </button>
                ))}
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}