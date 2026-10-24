// import { useState } from "react";
// import { NewproRecomendData } from "../data/data";
// import ShopPriceFav from "./shopPriceFav";
// import ColorChanger from "./ColorChanger";
// import Rated from "./Rated";

// import {Swiper, SwiperSlide } from "swiper/react";
// import "swiper/css";
// function NewCard({ category}){
//     const [activeId, setActiveId] = useState(NewproRecomendData[1].id)
//     const filteredProducts = NewproRecomendData.filter(product => {
//         const matchCategory = category === 'new' || product.category === category;
//         return matchCategory;
//     })
//     const activeCard = NewproRecomendData.find(card => card.id === activeId && filteredProducts)
//     return(
//         <div className="flex flex-col gap-1 overflow-hidden">
//             <div className="flex gap-1">
//                 <div className={`${activeCard.rightSectionBgColor} transition duration-900 flex flex-col gap-7 items-end justify-end h-50 w-70 rounded-lg shadow-xl p-5 relative`}>
//                     <img src={activeCard.imgSRC} alt="" className={`${activeCard.w} absolute top-0 left-0 z-2 drop-shadow-[0_25px_15px_rgb(0,0,0)]`}/>
//                     <p className="font-bold text-lg z-2">{activeCard.name}</p>
//                     <ShopPriceFav/>
//                     <p className="absolute top-0 z-0 text-[100px] font-extrabold text-white/10 select-none">NEW</p>
//                 </div>
//                 <ColorChanger setActiveId={setActiveId}/>
//             </div>
//             <Swiper>
//                 <SwiperSlide>
//                     <Rated/>
//                 </SwiperSlide>
//             </Swiper>
//         </div>
//     )
// }
// export default NewCard;