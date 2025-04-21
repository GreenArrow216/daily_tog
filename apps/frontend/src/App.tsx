import { Routes, Route } from "react-router-dom";
import Home from "./pages/home";
import Category from "./pages/category";
import './App.css'
// import About from './pages/About'
// import Blog from './pages/Blog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/category/:name" element={<Category />} />
    </Routes>
  );
}

export default App;
