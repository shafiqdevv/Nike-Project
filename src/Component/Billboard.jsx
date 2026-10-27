
import { motion } from "motion/react";

const billboards = [
  {
    id: 1,
    eyebrow: "NEW COLLECTION",
    title: "JUST DO IT.",
    subtitle: "Nike Air Zoom Pegasus 41",
    button: "Shop Now",
    bg: "bg-red-700",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=1000&q=85",
    color: "text-white",
  },
  {
    id: 2,
    eyebrow: "AIR MAX COLLECTION",
    title: "FEEL THE AIR",
    subtitle: "Unrivaled comfort. Iconic style.",
    button: "Explore Air Max",
    bg: "bg-gray-200",
    image:
      "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85",
    color: "text-black",
  },
  {
    id: 3,
    eyebrow: "NIKE BASKETBALL",
    title: "BUILT FOR GREATNESS",
    subtitle: "From the court to the streets.",
    button: "Shop Basketball",
    bg: "bg-neutral-950",
    image:
      "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=85",
    color: "text-white",
  },
];

function Billboard({ index = 0 }) {
  const billboards = [
    {
      title: "JUST DO IT.",
      subtitle: "Nike Air Zoom Pegasus 41",
      image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85",
      bg: "bg-red-700",
      color: "text-white",
    },
    {
      title: "FEEL THE AIR",
      subtitle: "Unrivaled comfort. Iconic style.",
      image: "https://images.unsplash.com/photo-1495555961986-6d4c1ecb7be3?auto=format&fit=crop&w=1000&q=85",
      bg: "bg-gray-200",
      color: "text-black",
    },
    {
      title: "BUILT FOR GREATNESS",
      subtitle: "From the court to the streets.",
      image: "https://images.unsplash.com/photo-1519861531473-9200262188bf?auto=format&fit=crop&w=1000&q=85",
      bg: "bg-neutral-950",
      color: "text-white",
    },
  ];

  const item = billboards[index];

  return (
    <section
      className={`flex h-[220px] md:h-[180px] overflow-hidden rounded-xl ${item.bg} ${item.color}`}
    >
      <div className="flex w-1/2 flex-col justify-center p-5 md:p-10">
        <h2 className="text-2xl md:text-5xl font-black">
          {item.title}
        </h2>

        <p className="mt-3">{item.subtitle}</p>

        <button className="mt-5 w-fit rounded-full bg-white px-5 py-2 text-black">
          Shop Now →
        </button>
      </div>

      <div className="w-1/2">
        <img
          src={item.image}
          alt={item.title}
          className="h-full w-full object-cover"
        />
      </div>
    </section>
  );
}

export default Billboard;