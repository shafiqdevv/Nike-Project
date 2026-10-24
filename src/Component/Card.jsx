
import ColorChanger from "./ColorChanger";
import ShopPriceFav from "./shopPriceFav";
import Rated from "./Rated";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { motion } from "motion/react";
import { heroData } from "../data/heroData";

function Card({ card, selectedVariantId, setActiveId }) {
  // Find the selected variant
  const selectedHero = heroData.find(
    (hero) => hero.id === selectedVariantId
  );

  // Use the selected variant or the original product
  const displayedCard = selectedHero
    ? { ...card, ...selectedHero, category: card.category }
    : card;

  return (
    <div className="overflow-hidden">
      <motion.div
        initial={{ opacity: 0, x: 150 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="flex flex-col gap-1 overflow-hidden"
      >
        <div className="flex gap-1">
          <div
            className={`${displayedCard.rightSectionBgColor} relative flex h-50 w-70 flex-col items-end justify-end gap-7 overflow-hidden rounded-lg p-5 shadow-xl transition-colors duration-500`}
          >
            <img
              src={displayedCard.imgSRC}
              alt={displayedCard.name}
              className={`${displayedCard.w} absolute left-0 top-0 z-[2] drop-shadow-[0_25px_15px_rgb(0,0,0)]`}
            />

            <p className="z-[2] text-lg font-bold">
              {displayedCard.name}
            </p>

            <ShopPriceFav />

            <p className="absolute top-0 z-0 select-none text-[40px] font-extrabold uppercase text-white/20">
              {displayedCard.category}
            </p>
          </div>

          <ColorChanger setActiveId={setActiveId} />
        </div>

        <Swiper>
          <SwiperSlide>
            <Rated />
          </SwiperSlide>
        </Swiper>
      </motion.div>
    </div>
  );
}

export default Card;
