import { useState } from "react";
import Sidebar from "@/components/sidebar";
import { Network } from "lucide-react";
import CryptoEvents from "./crypto-events";
import LegalRoom from "./leagal-room";
import MyCompany from "./my-company";
import RaiseFunds from "./raise-funds";
import ResearchLibrary from "./research-library";
import SoftwareStash from "./software-stash";
const Founderdashboard = () => {
  const [currentView, setCurrentView] = useState<string>("research-library");

  const renderForm = () => {
    switch (currentView) {
      case "my-company":
        return <MyCompany />;
      case "raise-funds":
        return <RaiseFunds />;
      //   case "hire":
      //     return <Hire />;
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
      //   case "events":
      //     return <Events />;
      //   case "grants":
      //     return <Grants />;
      default:
        return <ResearchLibrary />;
    }
  };

  return (
    <div className="flex">
      <Sidebar setCurrentView={setCurrentView} />
      <div className="flex-1">{renderForm()}</div>
    </div>
  );
};

export default Founderdashboard;
