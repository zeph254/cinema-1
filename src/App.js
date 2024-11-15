import './App.css';
import Snacks from './pages/Snacks';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import About from "./pages/About";
import Help from "./pages/Help";
import Add from './pages/Add';
import Cinema from "./pages/Cinema";
import { ToastContainer } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <div className='App'>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="add" element={<Add />} />
          <Route path="movie/:id" element={<Cinema />} />
          <Route path="help" element={<Help />} />
          <Route path="snacks" element={<Snacks />} />
        </Route>
      </Routes>
      <ToastContainer />
    </BrowserRouter>
    </div>
  );
}

export default App;