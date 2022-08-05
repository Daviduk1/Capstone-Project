import { Routes, Route, } from 'react-router-dom'
import Home from './pages/Home';
import Signup from './pages/Signup';
import Video from './pages/Video';
import Dashboard from './pages/Dashboard';
import Contact from './pages/Contact';
import Nav from './components/Nav';
import './components/css/home.css'
import './components/css/signup.css'
import './components/css/Video.css'
import './App.css';
import { UserProvider } from './components/context/UserContext';
import { useState } from 'react';

function App() {
  const[currentMode, setCurrentMode] = useState('light')
  return (
    <div className={`App ${currentMode}`}>
      <Nav getCurrentMode={setCurrentMode} />
      <UserProvider>
      <Routes>
        <Route path="/"element={<Home />} />
        <Route path="/signup"element={<Signup />} />
        <Route path="/video"element={<Video />} />
        <Route path="/dashboard"element={<Dashboard />} />
        <Route path="/contact"element={<Contact />} />

      </Routes>
      </UserProvider>
    </div>
  );
}

export default App;
