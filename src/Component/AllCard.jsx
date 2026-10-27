import { Heart, Star } from "lucide-react";
import { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { BsHeartFill, BsStarFill } from "react-icons/bs";
import { FaCartShopping } from "react-icons/fa6";
import { MdDelete } from "react-icons/md";
import { motion } from "motion/react";
function AllCard({product}){
    const [isHover, SetIsHover] = useState(false);
    function handleHover(){
        SetIsHover(true)
    }
    function handleHoverOff(){
        SetIsHover(false);
    }

    const [isHoverFav, SetIsHoverFav] = useState(false);
    function handleHoverFav(){
        SetIsHoverFav(true)
    }
    function handleHoverFavOff(){
        SetIsHoverFav(false);
    }

    const [isHoverStar, SetIsHoverStar] = useState(false);
    function handleHoverStar(){
        SetIsHoverStar(true)
    }
    function handleHoverStarOff(){
        SetIsHoverStar(false);
    }
    return(
        <motion.div
            initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4, ease: "easeOut" }}
        onMouseEnter={handleHover} onMouseLeave={handleHoverOff} className="w-45 h-70 grid grid-cols-1 gap-5 bg-white rounded-2xl shadow-[5px_5px_5px_1px_#d0d0d0] hover:scale-115 hover:p-2 hover:bg-green-900 duration-300 p-2 md:p-4 lg:p-5">
            <img src={product.imgSrc} alt="" className="w-30 drop-shadow-[0_25px_15px_rgb(0,0,0)]"/>
            {!isHover ? 
                (<div className="flex flex-col itemscenter justifycenter ">
                    <p className="font-bold font-michroma uppercase">{product.name}</p>
                    <div className="">
                        <strong className="text-green-600">${product.price} </strong>
                        <del className="text-xs font-bold text-gray-500">${product.oldPrice}</del>
                    </div>
                </div>
                )
                :
                (
                <div className="flex gap-2 flex-col items-center justify-center py-3 bg-white rounded-3xl">
                    <p className="text-sm font-bold font-michroma uppercase">{product.name}</p>
                    <div className="flex gap-5">
                        <div>
                            <strong className="text-green-600">${product.price} </strong>
                            <del className="text-xs font-bold text-gray-500">${product.oldPrice}</del>
                        </div>
                        <p className="flex gap-1 items-center justify-center bg-green-900 rounded-3xl text-white text-xs px-2">4.3<BsStarFill size={10}/> </p>
                    </div>
                    <div className="flex gap-2 items-center justify-center">
                        <MdDelete size={18} className="cursor-pointer hover:scale-115 hover:text-red-600 duration-300"/>
                        <AiFillEdit size={18} className="cursor-pointer hover:scale-115 hover:text-blue-600 duration-300"/>
                        <FaCartShopping size={18} className="cursor-pointer hover:scale-115 hover:text-green-600 duration-300"/>
                        {!isHoverStar ? (
                                <Star onMouseEnter={handleHoverStar} size={18} className="cursor-pointer hover:scale-115 duration-300"/>
                            ) : 
                            (
                                <BsStarFill onMouseLeave={handleHoverStarOff} size={18} className="cursor-pointer hover:scale-115 hover:text-yellow-600 duration-300"/>
                            )
                        }
                        {!isHoverFav ? (
                                <Heart onMouseEnter={handleHoverFav} size={18} className="cursor-pointer hover:scale-105 duration-300"/>
                            ) :
                            (
                                <BsHeartFill onMouseLeave={handleHoverFavOff} size={18} className="cursor-pointer hover:scale-105 hover:text-red-600 duration-300"/>
                            )
                        }
                    </div>
                </div>
                )
            }
        </motion.div>
    )
}
export default AllCard;