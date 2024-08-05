import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import Events from "./pages/startup/Events";
import Invest from "./pages/startup/Invest";
import Grants from "./pages/startup/Grants";
import LegalRoom from "./pages/startup/LegalRoom";
import CryptoEvents from "./pages/startup/CryptoEvents";
import Hire from "./pages/startup/Hire";
import MyCompany from "./pages/startup/MyCompany";
import Network from "./pages/startup/Network";
import Services from "./pages/startup/Services";
import MyCvs from "./pages/startup/MyCvs";
import RaiseFunds from "./pages/startup/RaiseFunds";
import SoftwareStash from "./pages/startup/SoftwareStash";
import MyPortfolio from "./pages/startup/MyPortfolio";
import ResearchLibrary from "./pages/startup/ResearchLibrary";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/events">Events</Link>
            </li>
            <li>
              <Link to="/invest">Invest</Link>
            </li>
            <li>
              <Link to="/grants">Grants</Link>
            </li>
            <li>
              <Link to="/legal-room">Legal Room</Link>
            </li>
            <li>
              <Link to="/crypto-events">Crypto Events</Link>
            </li>
            <li>
              <Link to="/hire">Hire</Link>
            </li>
            <li>
              <Link to="/my-company">My Company</Link>
            </li>
            <li>
              <Link to="/network">Network</Link>
            </li>
            <li>
              <Link to="/services">Services</Link>
            </li>
            <li>
              <Link to="/my-cvs">My Cvs</Link>
            </li>
            <li>
              <Link to="/raise-funds">Raise Funds</Link>
            </li>
            <li>
              <Link to="/software-stash">Software Stash</Link>
            </li>
            <li>
              <Link to="/my-portfolio">My Portfolio</Link>
            </li>
            <li>
              <Link to="/research-library">Research Library</Link>
            </li>
          </ul>
        </nav>

        <Routes>
          <Route path="/events" element={<Events />} />
          <Route path="/invest" element={<Invest />} />
          <Route path="/grants" element={<Grants />} />
          <Route path="/legal-room" element={<LegalRoom />} />
          <Route path="/crypto-events" element={<CryptoEvents />} />
          <Route path="/hire" element={<Hire />} />
          <Route path="/my-company" element={<MyCompany />} />
          <Route path="/network" element={<Network />} />
          <Route path="/services" element={<Services />} />
          <Route path="/my-cvs" element={<MyCvs />} />
          <Route path="/raise-funds" element={<RaiseFunds />} />
          <Route path="/software-stash" element={<SoftwareStash />} />
          <Route path="/my-portfolio" element={<MyPortfolio />} />
          <Route path="/research-library" element={<ResearchLibrary />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
