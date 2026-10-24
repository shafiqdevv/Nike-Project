
import { useState } from "react";
import { data } from "../data/data";
import Card from "./Card";
import { motion } from "motion/react";
import ColorChanger from "./ColorChanger";

function List() {
  const [category, setCategory] = useState("new");
  const [isClicked, setIsClicked] = useState(false)
  // Store the selected variant separately for each card
  const [selectedVariants, setSelectedVariants] = useState({});

  // Update only the card whose color button was clicked
  const setActiveId = (cardId, heroId) => {
    setSelectedVariants((prev) => ({
      ...prev,
      [cardId]: heroId,
    }));
  };

  const filteredProducts = data.filter((product) => {
    return category === "" || product.category === category;
  });

  return (
    <div className="grid grid-cols-1 min-h-screen bg-gradient-to-r from-gray-300 to-gray-200">
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mt-10 flex gap-2 md:gap-5 lg:gap-10 text-xs md:text-[14px] lg:text-[20px] justify-center"
      >
        <button onClick={() => setCategory("new")} className="cursor-pointer rounded-lg px-2 py-1 shadow-lg duration-200 hover:translate-y-[1px]">NEW</button>
        <button onClick={() => setCategory("man")} className="cursor-pointer rounded-lg px-2 py-1 shadow-lg duration-200 hover:translate-y-[1px]">MAN</button>
        <button onClick={() => setCategory("women")} className="cursor-pointer rounded-lg px-2 py-1 shadow-lg duration-200 hover:translate-y-[1px]">WOMEN</button>
        <button onClick={() => setCategory("child")} className="cursor-pointer rounded-lg px-2 py-1 shadow-lg duration-200 hover:translate-y-[1px]">CHILD</button>
        <button onClick={() => setCategory("teenager")} className="cursor-pointer rounded-lg px-2 py-1 shadow-lg duration-200 hover:translate-y-[1px]">TEENAGER</button>
      </motion.div>

      <div className="mt-10 grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {isClicked &&
          <div className="flex gap-5">
          <ColorChanger/>
          <div>
            <label htmlFor="">size</label>
            <select>
              <option value="">45</option>
              <option value="">5</option>
              <option value="">65</option>
              <option value="">75</option>
              <option value="">56</option>
            </select>
          </div>
          <p>Air Jordan somm</p>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio voluptatum corrupti voluptate quam delectus, perspiciatis omnis. Labo</p>
        </div>
        }
        {filteredProducts.map((card) => (
          <Card
            key={card.id}
            card={card}
            selectedVariantId={selectedVariants[card.id]}
            setActiveId={(heroId) => setActiveId(card.id, heroId)}
            setIsClicked={setIsClicked}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
