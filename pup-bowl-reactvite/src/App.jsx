import LandingPage from './components/LandingPage';
import AllPlayers from './components/AllPlayers'
import { Routes, Route, Link } from "react-router-dom";
import './App.css'
import SinglePlayerPage from './components/SinglePlayerPage';


function App() {

  return (
    <>
      <div id="container">
        <div className='navBarContainer'>
        <div id="navbar">
          <Link to={"/"}>Home</Link>
          <Link to={"/allplayers"}>All Players</Link>
        </div>
        </div>
        <div id="main-section">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/allplayers" element={<AllPlayers />} />
            <Route path="/singleplayers/:id" element={<SinglePlayerPage />} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App
