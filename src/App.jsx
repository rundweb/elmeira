import { Route, Routes } from "react-router-dom";
import HomePages from "./pages/HomePages";
import AboutPages from "./pages/AboutPages";
import NavbarComponents from "./components/NavbarComponents";
import FooterComponents from "./components/FooterComponents";

function App() {
  return <div>
    <NavbarComponents/>
    <Routes>
      <Route path="/" Component={HomePages}/>
      <Route path="/about" Component={AboutPages}/>
    </Routes>
    <FooterComponents/>
  </div>;
}

export default App;
