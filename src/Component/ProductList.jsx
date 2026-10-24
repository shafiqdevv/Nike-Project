import { data } from "../data/data";
import CardProducts from "./CardProducts";
function ProductsList(){
    return(
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5 px-5 bg-blue-900">
            {
                data.map((product => (
                    <CardProducts key={product.id} product={product}/>
                )))
            }
        </div>
    )
}
export default ProductsList;