import LandingPage from "./components/LandingPage";
import DashboardExcluirConta from "./components/DashboardExcluirConta";

function App() {
  const path = window.location.pathname;
  if (path === "/excluir-conta") {
    return <DashboardExcluirConta />;
  }
  return <LandingPage />;
}

export default App;
