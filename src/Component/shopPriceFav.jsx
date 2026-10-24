import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import { ImStarFull } from "react-icons/im";
import { PiShoppingCartFill } from "react-icons/pi";
function ShopPriceFav(){
    const [isFav, setIsFav] = useState(false);
    const [isRated, setIsRated] = useState(false);
    function handleFav(){
        setIsFav(prev => !prev);
    }
    function handleRate(){
        setIsRated(prev => !prev);
    }
    return(
        <div>
            <div className="grid grid-cols-2">
                <p className="font-bold">$150</p>
                <div className="flex">
                    <ImStarFull color="white" size={18} />
                    <ImStarFull color="white" size={18} />
                    <ImStarFull color="white" size={18} />
                    <ImStarFull color="white" size={18} />
                    <ImStarFull color="white" size={18} />
                </div>
            </div>
            <div className="flex gap-2">
                <button className="flex flex-wrap items-center bg-black px-3 py-[2px] rounded-md text-white z-2 cursor-pointer text-sm">
                Add to Cart<PiShoppingCartFill size={20} className="z-2"/>
                </button>
                {isFav
                 ? <BsHeartFill onClick={handleFav} size={30} className="px-2 z-2 bg-white rounded-md cursor-pointer hover:translate-y-[-1px] transition duration-200"/>
                 : <Heart onClick={handleFav} size={30} className="px-2 z-2 bg-white rounded-md cursor-pointer hover:translate-y-[-1px] transition duration-200"/>
                }
                {isRated
                 ? <BsStarFill onClick={handleRate} size={30} className="px-2 z-2 bg-white rounded-md cursor-pointer hover:translate-y-[-1px] transition duration-200"/>
                 : <Star onClick={handleRate} size={30} className="px-2 z-2 bg-white rounded-md cursor-pointer hover:translate-y-[-1px] transition duration-200"/>
                }
            </div>
        </div>
    )
}
export default ShopPriceFav;
// #c29007