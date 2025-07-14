import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import "./App.css";
import Layout from "./Layout";
import Admin from "./pages/admin";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/category/:category" element={<Category />} />
        <Route path="/admin" element={<Admin />}/>
      </Route>
    </Routes>
  );
}

export default App;
