// import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Signup from './components/Signup';
import Nav from './components/Nav';
import Home from './components/Home';

import Login from './components/Login';
import Addmusic from './components/Addmusic';
import Musiclisting from './components/Musiclisting';
import MusicPlayer from './components/MusicPlayer';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<Home />} />
          <Route path="/addmusic" element={<Addmusic />} />
          <Route path="/login" element={<Login />} />
          <Route path="/musiclisting" element={<Musiclisting />} />
          <Route path="/musicplayer" element={<MusicPlayer />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
