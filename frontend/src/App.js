import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Home from './components/Home';
import Addmusic from './components/Addmusic';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addmusic" element={<Addmusic />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
