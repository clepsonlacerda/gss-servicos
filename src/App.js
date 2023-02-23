import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Products from './components/pages/Products';
import SingUp from './components/pages/SignUp';
import AboutUs from './components/pages/AboutUs';
import Contact from './components/pages/Contact';

function App() {
  return (
    <>
      <Router>
        <Navbar />

        <Routes>
          <Route path="/" exact element={ <Home /> } />
          <Route path="/servicos" element={ <Services/>} />
          <Route path="/products" element={ <Products/> } />
          <Route path="/contatos" element={ <Contact/> } />
          <Route path="/sign-up" element={ <SingUp /> } />
          <Route path="/sobre" element={ <AboutUs /> } />
        </Routes>
      </Router>
    </>
  );
}

export default App;
