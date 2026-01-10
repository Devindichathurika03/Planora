import { Routes, Route } from "react-router-dom";

// Components
import NavBar from "./component/nav";
import Footer from "./component/footer";

// Pages
import Home from "./pages/Home";
import SuccessStories from "./pages/SuccessStories";
import Vendors from "./pages/Vendors";
import Forvendor from "./pages/Foevendors";
import  Plan  from "./pages/Plan";

function App() {
  return (
    <>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/stories" element={<SuccessStories />} />
        <Route path="/marketplace" element={<Vendors />} />
        <Route path="/vendor-portal" element={<Forvendor />} />
        <Route path="/planning" element={<Plan />} />
        
      </Routes>

      <Footer />
    </>
  );
}

export default App;
