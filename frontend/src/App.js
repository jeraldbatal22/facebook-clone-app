import './App.css';
import Home from './pages/Home';
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate
} from "react-router-dom";
import Signin from './pages/Signin';
import LandingPage from './pages/LandingPage';
import { useSelector } from 'react-redux';

function App() {
  const { isAuth } = useSelector(state => state.auth)

  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<LandingPage />} />
      </Routes>
      <Routes>
        <Route path="/signin" element={<Signin />} />
      </Routes>
      {
        isAuth ? <Routes> <Route path="/home" element={<Home />} /> </Routes> : <Routes> <Route element={<Navigate to="/" />} /></Routes>
      }
    </Router>
  );
}

export default App;
