import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ChemicalLoader from './components/ChemicalLoader';
import Home from './pages/Home';
import About from './pages/About';
import Products from './pages/Products';
import Clients from './pages/Clients';
import Contact from './pages/Contact';
import Gallery from './pages/Gallery';

function App() {
  return (
    <Router>
      <ChemicalLoader />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/products" element={<Products />} />
            <Route path="/clients" element={<Clients />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/gallery" element={<Gallery />} />
            
          </Routes>
        </main>
        
        <Footer />
        <FloatingWhatsApp />
      </div>
    </Router>
  );
}

export default App;
