import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./components/Hero";
import Hero2 from "./components/Hero2";
import Hero3 from "./components/Hero3";
import Hero4 from "./components/Hero4";
import HackathonLanding from "./components/HackathonLanding";
import HackathonLanding2 from "./components/HackathonLanding2";
import HackathonLanding3 from "./components/HackathonLanding3";
import HackathonLanding4 from "./components/HackathonLanding4";
import CombinedLandingPages from "./components/CombinedLandingPages";

function App() {
  return (
    <Router>
      <Routes>
        {/* Home page with Hero + Hero2 stacked vertically */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <Hero2 />
              <Hero3 />
              <Hero4 />
            </>
          }
        />

        {/* Other pages */}
        <Route path="/landing" element={<CombinedLandingPages />} />
      </Routes>
    </Router>
  );
}

export default App;
