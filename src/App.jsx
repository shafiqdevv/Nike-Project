import HeroSection from "./Component/HeroSection";
import List from "./Component/List";
import Navbar from "./Component/Navbar";
import { Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Billboard from "./Component/Billboard";
import CardDetails from "./pages/CardDetails";
import Footer from "./Component/Footer";
import AllProductsList from "./Component/AllProductsList";
function App(){
  return(
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/> <HeroSection/> <List/> <Billboard/> <AllProductsList/> <Footer/>
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