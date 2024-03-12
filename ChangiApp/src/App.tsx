import './App.css'
import Register from './pages/Register.tsx';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import Result from './pages/Result.tsx';
import ForgetPassword from './pages/ForgetPassword.tsx';
import UserProfileTemplate from './pages/UserProfileTemplate.tsx';
// @ts-ignore
import Scanner from './pages/Scanner.jsx';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Result />} />
        <Route path="/Register" element={<Register />}/>
        <Route path="/ForgetPassword" element={<ForgetPassword />}/>
        <Route path="/UserProfileTemplate" element={<UserProfileTemplate />}/>
        <Route path="/Scanner" element={<Scanner />} />
        <Route path="/baggage/:Barcode" element={<Result />}/>
      </Routes>
    </Router>
  )
}

export default App
