import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home";
import Service from "./pages/Service/Service";


const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route  path="/" element={<Home/>} />
        <Route  path="/service" element={<Service/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
