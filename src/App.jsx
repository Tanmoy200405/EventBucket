import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import HackathonLanding from "./components/HackathonLanding";
import HackathonLanding2 from "./components/HackathonLanding2";
import HackathonLanding3 from "./components/HackathonLanding3";
import HackathonLanding4 from "./components/HackathonLanding4";
import CombinedLandingPages from "./components/CombinedLandingPages";





function App() {
  

  return (
   <Router>
      <Routes>
        <Route path="/" element={<Hero />} />
        <Route path="/landing" element={<CombinedLandingPages />} />
        
        
      </Routes>
    </Router>
    
  );
}


export default App;