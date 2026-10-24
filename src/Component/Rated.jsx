import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const rateData = [
    {
        id:1,
        imgSrc: 'nike1 (3).png',
        name: 'john',
        oponion: 'Lorem, ipsum do. Vero molestiae, soluta repellat quos maxime quo accusantium'
    },
    {
        id:1,
        imgSrc: 'nike1 (3).png',
        name: 'john',
        oponion: 'Lorem, ipsum do. Vero molestiae, soluta repellat quos maxime quo accusantium'
    },
    {
        id:1,
        imgSrc: 'nike1 (3).png',
        name: 'john',
        oponion: 'Lorem, ipsum do. Vero molestiae, soluta repellat quos maxime quo accusantium'
    },
]
function Rated(){
  return(
    <Swiper modules={[Autoplay]} loop={true} speed={900} autoplay={{delay: 5000,}}>
         {
            rateData.map(rate => (
                <SwiperSlide>
                    <div className={`w-70`}>
                        <div className="flex z-2 flex-col gap-3">
                           <div className="flex gap-1">
                               <div className="bg-white w-10 h-10 p-2 border-1 rounded-full flex flex-col gap-2 items-center">
                                   <img src={rate.imgSrc} alt="" />
                                   <p className="font-bold text-xs">{rate.name}</p>
                               </div>
                               <div className="flex items-center">
                                   <p className="text-xs max-w-60">{rate.oponion}</p>
                               </div>
                           </div>
                        </div>
                    </div>
                </SwiperSlide>
            ))
         }
    </Swiper>
  )
}
export default Rated;