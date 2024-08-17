import { useState } from "react";
import CryptoEvents from "./crypto-events";
import LegalRoom from "./leagal-room";
import ResearchLibrary from "./research-library";
import SoftwareStash from "./software-stash";
import Network from "./network";
import SeeviceProviderDashboard from "./service-provider-dashboard";
import SidebarTalent from "@/components/sidebar-talent";
import MyCvs from "./my-cvs";

const Talentdashboard = () => {
  const [currentView, setCurrentView] = useState<string>("");

  const renderForm = () => {
    switch (currentView) {
      case "dashboard":
        return <SeeviceProviderDashboard />;
      case "my-cvs":
        return <MyCvs />;
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
      default:
        return <SeeviceProviderDashboard />;
    }
  };

  return (
    <div className="flex">
      <SidebarTalent setCurrentView={setCurrentView} />
      <div className="flex-1">{renderForm()}</div>
    </div>
  );
};

export default Talentdashboard;
