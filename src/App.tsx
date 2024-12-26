import DriftPage from "./components/DriftPage";
import ForzaPage from "./components/ForzaPage";
import HomePage from "./components/HomePage";
import Menu from "./components/Menu";
import TimeAttackPage from "./components/TimeAttackPage";
import { Route, Navigate, BrowserRouter, Routes} from "react-router-dom";

export default function App() {
  return (
    <div>
      <BrowserRouter>
      <div>
        <Menu />
        <div className="page">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/drift" element={<DriftPage />} />
            <Route path="/timeattack" element={<TimeAttackPage />} />
            <Route path="/forza" element={<ForzaPage />} />
            <Route path="/*" element={<Navigate to="/" />} />
          </Routes>
        </div>
      </div>
      </BrowserRouter>
    </div>
  );
}