import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Home from './pages/Home/Home';
import ParticleBackground from './ParticleBackground';


function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {/* <ParticleBackground /> */}
        <Routes>
          <Route path='/' element={<Home />}></Route>
        </Routes>

      </BrowserRouter>
    </div>

  );
}


export default App;
