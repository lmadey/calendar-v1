import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { HomePage } from "./components/pages/HomePage/HomePage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<HomePage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
