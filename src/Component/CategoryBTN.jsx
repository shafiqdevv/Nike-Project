import { motion } from "motion/react";
function CategoryBTN(){
    return(
        <motion.div
           initial={{ opacity: 0, y: 50 }}
           whileInView={{ opacity: 1, y: 0 }}
           transition={{ duration: 0.7, ease: "easeOut" }}
           className="flex justify-center gap-2 md:gap-5 lg:gap-10 text-xs md:text-[14px] lg:text-[20px] w-150 border-2 rounded-full py-1"
         >
           <button onClick={() => setCategory("new")}      className="">NEW</button>
           <button onClick={() => setCategory("man")}      className="">MAN</button>
           <button onClick={() => setCategory("women")}    className="">WOMEN</button>
           <button onClick={() => setCategory("child")}    className="">CHILD</button>
           <button onClick={() => setCategory("teenager")} className="">TEENAGER</button>
      </motion.div>
    )
}
export default CategoryBTN;