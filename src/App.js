
import './App.css';
import Home from './Pages/Home';
import SOS from './Pages/sos';
import KSP from './Pages/ksp';
import ITSP from './Pages/itsp';
import MainLayout from './components/mainlayout';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  return (
    <Router>
      <MainLayout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/sos" element={<SOS />} />
          <Route path="/ksp" element={<KSP />} />
          <Route path="/itsp" element={<ITSP />} />
        </Routes>
      </MainLayout>      
    </Router>

  );
}

export default App;
