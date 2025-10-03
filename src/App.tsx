import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import HomePage from "./page/Home";
import AboutPage from "./page/About";
import { LayoutMaster } from "./components/Layout/LayoutMasster";

function App() {
  return (
    <LayoutMaster>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
        </Routes>
      </BrowserRouter>
    </LayoutMaster>
  );
}

export default App;
