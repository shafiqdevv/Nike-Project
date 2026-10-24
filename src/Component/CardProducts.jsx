import { Star } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function CardProducts({product}){
    const [selectedCard, SetSelectedCard] = useState();
    const navigate = useNavigate();
    function hanldeClick(product){

        navigate('/cardDetails')
    }
    return(
        <div onClick={hanldeClick} className="flex flex-col items-center gap-8 border-2 border-gray-400 rounded-md py-5">
            <img src={product.imgSRC} alt="" className={`${product.w}`}/>
            <div className="flex flex-col items-center gap-1">
                <div className="flex">
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                    <Star/>
                </div>
                <p>{product.name}</p>
                <p>$300</p>
            </div>
        </div>
    )
}
export default CardProducts;