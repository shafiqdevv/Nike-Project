import { motion } from "motion/react";
import { useState } from "react";

const categoryList = ["new", "man", "women", "child", "teenager"];
function CategoryBTN() {
  const [position, setPosition] = useState({
    left: 0,
    width: 0,
    opacity: 0,
  });

  function handleMouseEnter(event) {
    const { offsetLeft, offsetWidth } = event.currentTarget;

    setPosition({
      left: offsetLeft,
      width: offsetWidth,
      opacity: 1,
    });
  }

  return (
    <div className="bg-neutral-100 py-2">
      <div
        onMouseLeave={() =>
          setPosition((prev) => ({ ...prev, opacity: 0 }))
        }
        className="relative mx-auto flex w-fit rounded-full border-2 border-black bg-white p-1"
      >
        {categoryList.map((category) => (
          <button
            key={category}
            onMouseEnter={handleMouseEnter}
            className="relative z-10 block cursor-pointer px-3 py-1.5 text-xs uppercase text-white mix-blend-difference md:px-5 md:py-1 md:text-base"
          >
            {category}
          </button>
        ))}

        <Cursor position={position} />
      </div>
    </div>
  );
}

const Cursor = ({ position }) => {
  return (
    <motion.div
      animate={position}
      transition={{ type: "spring", stiffness: 500, damping: 40 }}
      className="absolute top-1 bottom-1 z-0 rounded-full bg-black"
    />
  );
};

export default CategoryBTN;


