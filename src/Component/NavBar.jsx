import { Heart, Moon, Search, Sun } from "lucide-react";
import { SiNike } from "react-icons/si";
import { PiShoppingCartFill } from "react-icons/pi";
import { motion } from "motion/react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import CategoryBTN from "./CategoryBTN.jsx";
function Navbar(){
    const [isNight, setIsNight] = useState(false);
    function handleNight(){
        setIsNight(prev => !prev)
    }
    return(
        <nav className="w-full flex justify-between px-10 bg-neutral-100 dark:bg-gray-700 -1">
            {/* logo */}
            <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{duration: 0.6}}>
                <SiNike size={40} className="dark:text-white"/>
            </motion.div>
            {/* main menu */}
            <CategoryBTN/>
            {/* icons */}
            <motion.div
                initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}} transition={{delay: 0.4}}
            className="flex gap-5 items-center">
                <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>
                    <Search size={25} color="white" className="cursor-pointer hover:translate-y-[1px] transition duration-200 dark:bg-gray-900 p-1 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-full"/>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>
                    <PiShoppingCartFill color="white" size={25} className="cursor-pointer hover:translate-y-[1px] transition duration-200 dark:bg-gray-900 p-1 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-full"/>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>
                    <NavLink to={'/favorite'}>
                        <Heart color="white" size={25} className="cursor-pointer hover:translate-y-[1px] transition duration-200 dark:bg-gray-900 p-1 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-full"/>
                    </NavLink>
                </motion.div>
                <motion.div initial={{opacity: 0, x: -100}} animate={{opacity: 1, x: 0}}>
                    {isNight 
                        ? <Moon onClick={handleNight} color="white" size={25} className="cursor-pointer hover:translate-y-[1px] active:rotate-90 transition duration-200 dark:bg-gray-900 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-full"/>
                        : <Sun  onClick={handleNight} color="white" size={25} className="cursor-pointer hover:translate-y-[1px] active:rotate-90 transition duration-200 dark:bg-gray-900 p-1 shadow-[0_0_15px_rgba(0,0,0,0.3)] rounded-full"/>
                    }
                </motion.div>
            </motion.div>
        </nav>
    )
}
export default Navbar;