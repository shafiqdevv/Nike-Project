// import { useState } from "react";
// import NewCard from "./NewCard";
// import { NewproRecomendData } from "../data/data";
// function NewProRecomend(){
//     const [category, setCategory] = useState('man');
//     const filteredProducts = NewproRecomendData.filter(product => {
//         const matchCategory = category === 'new' || product.category === category;
//         return matchCategory;
//     })
//     return(
//         <div className="flex gap-5 items-center flex-col bg-gradient-to-r from-gray-300 via-gray-200 to-gray-100">
//             <div className="flex gap-10 mt-10">
//                 <button onClick={() => setCategory('new')} className="shadow-lg px-2 py-1 rounded-lg cursor-pointer hover:translate-y-[1px] duration-200">NEW</button>
//                 <button onClick={() => setCategory('man')} className="shadow-lg px-2 py-1 rounded-lg cursor-pointer hover:translate-y-[1px] duration-200">MAN</button>
//                 <button onClick={() => setCategory('women')} className="shadow-lg px-2 py-1 rounded-lg cursor-pointer hover:translate-y-[1px] duration-200">WOMEN</button>
//                 <button onClick={() => setCategory('')} className="shadow-lg px-2 py-1 rounded-lg cursor-pointer hover:translate-y-[1px] duration-200">CHILD</button>
//                 <button onClick={() => setCategory('')} className="shadow-lg px-2 py-1 rounded-lg cursor-pointer hover:translate-y-[1px] duration-200">TEENEGER</button>
//             </div>
//             <div  className="grid grid-cols-3 gap-7 p-3">
//                 <NewCard filteredProducts={filteredProducts} category={category}/>
//             </div>
//         </div>
//     )
// }
// export default NewProRecomend;