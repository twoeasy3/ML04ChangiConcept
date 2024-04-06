import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Result from './pages/Result.tsx';

// @ts-ignore
import Scanner from './pages/Scanner.jsx';
// @ts-ignore
import ScannerClaim from './pages/ScannerClaim.jsx';
import BaggageClaim from './pages/BaggageClaim.tsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scanner />} />
        <Route path="/Scanner" element={<Scanner />} />
        <Route path="/baggage/:Barcode" element={<Result />}/>
        <Route path="/ScannerClaim" element={<ScannerClaim />}/>
        <Route path="/BaggageClaim" element={<BaggageClaim />}/>
      </Routes>
    </Router>
  )
}

export default App
