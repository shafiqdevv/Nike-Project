import { motion } from "motion/react";
import { useNavigate } from "react-router-dom";
const off = {
    id:1,
    name:'King Headphone',
    price:'300',
    img:'nike1 (4).png',
    off:'30% OFF',
    kind:'off'
}
function Billboard(){
    const navigate = useNavigate();
    function handleBuy(off){
    const cart = JSON.parse(localStorage.getItem('cart')) || []
    const alreadyExists = cart.find(items => items.id === off.id);
    if(!alreadyExists){
      cart.push(off)
    }
    localStorage.setItem('cart',JSON.stringify(cart));
    navigate('/cart');
    };
    return(
        <div className="overflow-hidden">
            <motion.div
            initial={{opacity: 0, x: 150}}
            whileInView={{opacity: 1, x: 0}}
            transition={{duration: 0.7, ease: 'easeOut'}}
        className="bg-red-600 rounded-l-2xl shadow-[-8px_0_15px_rgba(0,0,0,0.3)] ml-10 my-10 h-50 text-white relative flex justify-between">
            <div className="m-10">
                <p className="text-sm">30% OFF</p>
                <h1 className="font-bold text-5xl">FINE <br /> SMILE</h1>
                <p className="font-thin text-gray-100">10 jan to 28 jan</p>
            </div>
            <div className="m-10">
                <p className="font-bold text-lg">Air Solo Bass</p>
                <h2 className="text-4xl font-bold">Winter Sale</h2>
                <p className="w-70 text-sm font-thind">Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus amet</p>
                <button onClick={() => handleBuy(off)} className="cursor-pointer bg-white text-blue-600 rounded-full px-4 py-1 mt-3 text-sm">Shop</button>
            </div>
            <img src="nike1 (3).png" alt="" className="absolute w-60 top-[-15px] left-80"/>
        </motion.div>
        </div>
    )
}
export default Billboard;