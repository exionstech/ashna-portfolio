
import { Route, Routes } from "react-router-dom";
import { HomePgae } from "./pages/home";
import { AboutPage } from "./pages/about";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePgae />} />
        <Route path="/about" element={<AboutPage />} />
      </Routes>
    </>
  );
}

export default App;
