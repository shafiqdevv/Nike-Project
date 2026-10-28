import ShopPriceFav from "./shopPriceFav";
import { ChevronRightIcon } from "lucide-react";
import { heroData } from "../data/heroData";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import ColorChanger from "./ColorChanger";
function HeroSection(){
    const [activeId, setActiveId] = useState(heroData[0].id);
    const activeHero = heroData.find((hero) => hero.id === activeId);
    return(
        <div className={`flex justify-between min-h-screen z-0 relative select-none`}>
            {/* left section */}
            <div className="w-full items-center flex gap-10 relative">
                {/* big lines */}
                <AnimatePresence mode="wait">
                <div key={activeHero.id} className="w-full absolute flex flex-col z-1 gap-3 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                        <motion.span 
                            initial={{opacity: 0, x: -600}} animate={{opacity: 1, x: 0}} exit={{opacity:0.5,x:-600}} transition={{type:'spring' , duration:0.8,}}
                        className={`w-[90%] h-10 ${activeHero.rightSectionBgColor} opacity-90`}></motion.span>
                        <motion.span 
                            initial={{opacity: 0, x: -600}} animate={{opacity: 1, x: 0}} exit={{opacity:0.5,x:-600}} transition={{type:'spring' , duration:0.8,}}
                        className={`w-[90%] h-10 ${activeHero.rightSectionBgColor} opacity-90`}></motion.span>
                        <motion.span 
                            initial={{opacity: 0, x: -600}} animate={{opacity: 1, x: 0}} exit={{opacity:0.5,x:-600}} transition={{type:'spring' , duration:0.8,}}
                        className={`w-[90%] h-10 ${activeHero.rightSectionBgColor} opacity-90`}></motion.span>
                        <motion.span 
                            initial={{opacity: 0, x: -600}} animate={{opacity: 1, x: 0}} exit={{opacity:0.5,x:-600}} transition={{type:'spring' , duration:0.8,}}
                        className={`w-[90%] h-10 ${activeHero.rightSectionBgColor} opacity-90`}></motion.span>
                    
                </div>
                </AnimatePresence>
                {/* text */}
                <div className="flex gap-2 z-2 ml-20">
                    <p className="[writing-mode:vertical-rl] rotate-360 dark:text-white">&lt;&lt;&lt;&lt;&lt;&lt;&lt;</p>
                    <h1 className="font-michroma [writing-mode:vertical-rl] rotate-180 font-extrabold opacity-90 text-9xl flex gap-2 dark:text-white">
                        <span className="[writing-mode:horizontal-tb] rotate-180 font-bold text-[12px] max-w-60">{activeHero.description}</span>
                        <span className="[writing-mode:horizontal-tb] rotate-180 font-bold text-[20px]">{activeHero.name}.....</span>
                        NIKE
                    </h1>
                </div>
            </div>
            {/* img */}
            <AnimatePresence mode="wait">
                <motion.img key={activeHero.id}
                initial={{opacity:0,x:-600,rotate:-75}} animate={{opacity:1,x:0,rotate:0}} exit={{opacity:0.5,x:-600,rotate:-75}} transition={{type:'spring' , duration:0.8,}}
            src={activeHero.imgSRC} alt="" className={`${activeHero.w} absolute z-2 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_25px_15px_rgb(0,0,0)]`}/>
            </AnimatePresence>
            {/* right section */}
            <motion.div
                initial={{opacity: 0, x: 200}} animate={{opacity: 1, x: 0}} transition={{duration: 0.8}}
            className={`${activeHero.rightSectionBgColor} w-full items-center flex flex-col justify-center gap-5 rounded-l-2xl shadow-[-8px_0_15px_rgba(0,0,0,0.3)]`}>
                <ColorChanger setActiveId={setActiveId}/>
                <p className="font-bold flex z-2">more<ChevronRightIcon/></p>
                <p className="absolute font-extrabold text-white/10 text-[200px] z-0">NEW</p>
                <div>
                    <ShopPriceFav/>
                </div>
            </motion.div>
        </div>
    )
}
export default HeroSection;