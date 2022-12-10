import './App.css';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from './pages/Home';
import About from "./pages/About";
import Footer from "./pages/Footer";
import  Menu  from './pages/Menu';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/"  element={ <Home/> } />
          <Route path="menu" element={< Menu/> } />
          <Route path="about" element={< About/> } />


        </Routes>
        <Footer/>
      </BrowserRouter>
    </div>
  );
}

export default App;
