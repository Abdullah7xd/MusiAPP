import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Addmusic from './components/Addmusic';
import Home from './components/Home';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/Signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
