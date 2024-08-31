import { useState } from "react";
import Sidebar from "@/components/sidebar";
import CryptoEvents from "./crypto-events";
import MyCompany from "./my-company";
import RaiseFunds from "./raise-funds";
import ResearchLibrary from "./research-library";
import SoftwareStash from "./software-stash";
import Grants from "./grants";
import Events from "./events";
import Network from "./network";
import Hire from "./hire";
import Dashboard from "./founder-dashboard";
import HireTalent from "./hire-talent";
import HireServiceProviders from "./hire-service-providers";
import LegalRoom from "./leagal-room";

const Founderdashboard = () => {
  const [currentView, setCurrentView] = useState<string>("dashboard");

  const renderForm = () => {
    switch (currentView) {
      case "dashboard":
        return <Dashboard />;
      case "my-company":
        return <MyCompany />;
      case "raise-funds":
        return <RaiseFunds />;
      case "hire":
        return <Hire />;
      case "network":
        return <Network />;
      case "legal-room":
        return <LegalRoom />;
      case "software-stash":
        return <SoftwareStash />;
      case "research-library":
        return <ResearchLibrary />;
      case "crypto-events":
        return <CryptoEvents />;
      case "events":
        return <Events />;
      case "grants":
        return <Grants />;
      case "HireTalent":
        return <HireTalent />;
      case "HireServiceProviders":
        return <HireServiceProviders />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="flex-1 p-4 lg:p-8">{renderForm()}</div>
    </div>
  );
};

export default Founderdashboard;
