import React from "react";
import { Routes, BrowserRouter, Route } from "react-router-dom";
import NavBar from"./Components/NavBar";
import DavidYim from "./Components/DavidYim";
import Projects from "./Components/Projects";
import Resume from "./Components/Resume"
import Pacman from "./Components/Pacman"
import Frigo from "./Components/Frigo";
import GNP from "./Components/GoodNewsPartners"
import TripPlanner from "./Components/TripPlanner";
import BearRoom from "./Components/BearRoom";
import About from "./Components/About";


function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route exact path="/projects" element={<div> <NavBar/> <Projects/> </div>}/>
          <Route exact path="/pacman" element={<div><NavBar/> <Pacman/></div>}/>
          <Route exact path="/frigo" element={<div><NavBar/> <Frigo/></div>}/>
          <Route exact path="/tripplanner" element={<div><NavBar/> <TripPlanner/></div>}/>
          <Route exact path="/goodnewspartners" element={<div><NavBar/> <GNP/></div>}/>
          <Route exact path="/bearroom" element={<div><NavBar/> <BearRoom/></div>}/>
          <Route path="/resume" element={<div><NavBar/><Resume/></div>}/>
          <Route path="/about" element={<div><NavBar/><About/></div>}/>
          <Route path="/" element={<div><NavBar/><DavidYim/></div>}/>
      </Routes>
      </BrowserRouter>
      
  );
}

export default App;
