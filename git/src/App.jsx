import { Routes, Route } from "react-router-dom";
import Navbar from "./components/navbar";
import History from "./components/History";
import Home from "./components/home";
import ProfileCard from "./components/Profile";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/history" element={<History />} />
        <Route path="/profile/:username" element={<ProfileCard/>} />
      </Routes>
    </>
  );
}

export default App;
