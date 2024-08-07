import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";

// Import your other components here
import LegalRoom from "./pages/startup/leagal-room";
import CryptoEvents from "./pages/startup/crypto-events";
import MyCompany from "./pages/startup/my-company";
import MyCvs from "./pages/startup/my-cvs";
import RaiseFunds from "./pages/startup/raise-funds";
import SoftwareStash from "./pages/startup/software-stash";
import MyPortfolio from "./pages/startup/my-portfolio";
import ResearchLibrary from "./pages/startup/research-library";
import { GeneralCompanyInformationForm } from "./components/forms/GeneralCompanyInformationForm";
import Events from "./pages/startup/events";
import Hire from "./pages/startup/hire";
import Grants from "./pages/startup/grants";
import Invest from "./pages/startup/invest";
import Network from "./pages/startup/network";
import Services from "./pages/startup/services";
import { ProjectInformationForm } from "./components/forms/ProjectInformationForm";
import Signup from "./pages/admin/signup";
import { FundraisingIformationForm } from "./components/forms/FundraisingInformationForm";

const App: React.FC = () => {
  return (
    <Router>
      <div>
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
          <Route path="/" element={<Signup />} />
          <Route path="/gci" element={<GeneralCompanyInformationForm />} />
          <Route path="/pis" element={<ProjectInformationForm />} />
          <Route path="/fif" element={<FundraisingIformationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
