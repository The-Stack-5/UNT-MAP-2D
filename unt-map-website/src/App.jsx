import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Directions from "./pages/Directions";
import MapPage from "./pages/MapPage";

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 flex flex-col">
      <Navbar />
      <main className="flex-1">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/directions" element={<Directions />} />
          <Route path="/map" element={<MapPage />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}