import { products } from "../data/allProductsListData";
import AllCard from "./AllCard";
function AllProductsList(){
    
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 p-2 md:p-4 lg:p-8">
            {
                products.map((product => (
                    <AllCard key={product.key} product={product}/>
                )))
            }
        </div>
    )
}
export default AllProductsList;