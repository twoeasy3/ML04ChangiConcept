import './App.css'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Result from './pages/Result.tsx';

// @ts-ignore
import Scanner from './pages/Scanner.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Scanner />} />
        <Route path="/Scanner" element={<Scanner />} />
        <Route path="/baggage/:Barcode" element={<Result />}/>
      </Routes>
    </Router>
  )
}

export default App
