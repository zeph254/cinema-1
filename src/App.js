import './App.css';
import Snacks from './pages/Snacks';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
// import MoviePage from './pages/MoviePage';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="help" element={<Help />} />
          <Route path="snacks" element={<Snacks />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;