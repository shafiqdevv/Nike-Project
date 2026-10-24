import HeroSection from "./Component/HeroSection";
import List from "./Component/List";
import Navbar from "./Component/Navbar";
import { NavLink, Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Billboard from "./Component/Billboard";
import ProductsList from "./Component/ProductList";
import CardDetails from "./pages/CardDetails";
function App(){
  return(
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/> <HeroSection/> <List/> <Billboard/> <ProductsList/>
            </>
          }
        />
        <Route path="/favorite" element={<Favorite/>}/>
        <Route path="/cardDetails" element={<CardDetails/>}/>
      </Routes>
    </div>
  )
}
export default App;