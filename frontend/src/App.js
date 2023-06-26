import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Home from './components/Home';
import Login from './components/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
          <Route path='home' element={<Home />} />
          <Route path='login' element={<Login />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
