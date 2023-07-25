import { BrowserRouter, Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import { Home } from "./views/Home/Home";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={routes.home} element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
