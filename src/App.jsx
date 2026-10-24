import HeroSection from "./Component/HeroSection";
import List from "./Component/List";
import Navbar from "./Component/Navbar";
import { NavLink, Route, Routes } from "react-router-dom";
import Favorite from "./pages/Favorite";
import Billboard from "./Component/Billboard";
function App(){
  return(
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar/> <HeroSection/> <List/> <Billboard/> <Billboard/> <Billboard/>
            </>
          }
        />
        <Route path="/favorite" element={<Favorite/>}/>
      </Routes>
    </div>
  )
}
export default App;