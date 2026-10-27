
import { useState } from "react";
import { products } from "../data/allProductsListData";
import AllCard from "./AllCard";
import Billboard from "./Billboard";

function AllProductsList() {
  const [visibleProducts, setVisibleProducts] = useState(10);

  const billboardPositions = {
    9: 0,
    18: 1,
    27: 2,
  };

  const handleLoadMore = () => {
    setVisibleProducts((prev) => Math.min(prev + 10, products.length));
  };

  const handleLoadLess = () => {
    setVisibleProducts((prev) => Math.max(prev - 10, 10));
    
  };

  return (
    <div className="p-2 md:p-4 lg:p-8">
      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8">
        {products.slice(0, visibleProducts).map((product, index) => (
          <div key={product.key ?? index} className="contents">
            <AllCard product={product} />

            {billboardPositions[index] !== undefined && (
              <div className="col-span-full">
                <Billboard index={billboardPositions[index]} />
              </div>
            )}
          </div>
        ))}
      </div>

      <div className="relative flex justify-center items-center gap-4 mt-12 mb-8">
        {/* Horizontal line */}
        <div className="absolute left-0 right-0 h-px bg-gray-300" />

        {/* Buttons */}
        <div className="relative z-10 flex flex-wrap justify-center gap-4 bg-neutral-100 px-4">
          {visibleProducts < products.length && (
            <button
              onClick={handleLoadMore}
              className="rounded-full border border-gray-400 px-8 py-3 font-semibold hover:bg-black hover:text-white hover:border-black transition duration-300"
            >
              Load More
            </button>
          )}

          {visibleProducts > 10 && (
            <button
              onClick={handleLoadLess}
              className="rounded-full border border-gray-400 px-8 py-3 font-semibold hover:bg-black hover:text-white hover:border-black transition duration-300"
            >
              Load Less
            </button>
          )}
        </div>
      </div>
    </div>
  );
}

export default AllProductsList;