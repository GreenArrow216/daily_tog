import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/home";
// import About from './pages/About'
// import Blog from './pages/Blog'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
    </Routes>
  );
}

export default App;
