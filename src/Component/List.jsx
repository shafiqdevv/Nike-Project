
import { useState } from "react";
import { data } from "../data/data";
import Card from "./Card";
import CategoryBTN from "./CategoryBTN.jsx";
function List() {
  const [category, setCategory] = useState("new");
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
    <div className="flex flex-col min-h-screen pt-5 flex items-center justify-center bg-neutral-100">
      {/* <SlideTabsExample setCategory={setCategory}/> */}
      <CategoryBTN/>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 p-5">
        {filteredProducts.map((card) => (
          <Card
            key={card.id}
            card={card}
            selectedVariantId={selectedVariants[card.id]}
            setActiveId={(heroId) => setActiveId(card.id, heroId)}
          />
        ))}
      </div>
    </div>
  );
}

export default List;
