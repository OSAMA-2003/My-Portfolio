
import Footer from './components/Footer';
import { Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import HighlightDetails from './pages/HighlightDetails';
import ScrollToTop from './components/ScrollToTop';


function App() {
  return (
    <div className="relative min-h-screen bg-black text-white overflow-x-hidden">
      <ScrollToTop />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/highlight/:id" element={<HighlightDetails />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;