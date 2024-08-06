import React from "react";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import CreateAccount from "../src/components/CreateAccount";

// Import your other components here
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
import { GeneralCompanyInformationForm } from "./components/forms/GeneralCompanyInformationForm";

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
          <Route path="/" element={<CreateAccount />} />
          <Route path="/gci" element={<GeneralCompanyInformationForm />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
