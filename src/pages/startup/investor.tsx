import { useState } from "react";
import CryptoEvents from "./crypto-events";
import LegalRoom from "./leagal-room";
import ResearchLibrary from "./research-library";
import SoftwareStash from "./software-stash";
import Grants from "./grants";
import Events from "./events";
import Network from "./network";
import Hire from "./hire";
import HireTalent from "./hire-talent";
import HireServiceProviders from "./hire-service-providers";
import SidebarInvestor from "@/components/sidebar-investor";
import MyPortfolio from "./my-portfolio";
import Invest from "./invest";
import InvestorDashboard from "./investor-dashboard";

const Investor = () => {
  const [currentView, setCurrentView] = useState<string>("");

  const renderForm = () => {
    switch (currentView) {
      case "investor-dashboard":
        return <InvestorDashboard />;
      case "my-portfolio":
        return <MyPortfolio />;
      case "invest":
        return <Invest />;
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
        return <InvestorDashboard />;
    }
  };

  return (
    <div className="flex">
      <SidebarInvestor setCurrentView={setCurrentView} />
      <div className="flex-1">{renderForm()}</div>
    </div>
  );
};

export default Investor;
