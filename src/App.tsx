import LandingPage from "./components/LandingPage";
import DashboardExcluirConta from "./components/DashboardExcluirConta";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/excluir-conta" element={<DashboardExcluirConta />} />
        <Route path="*" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
