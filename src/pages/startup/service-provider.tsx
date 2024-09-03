import { useState } from "react";
import CryptoEvents from "./crypto-events";
import LegalRoom from "./leagal-room";
import ResearchLibrary from "./research-library";
import SoftwareStash from "./software-stash";
import Network from "./network";
import SeeviceProviderDashboard from "./service-provider-dashboard";
import SidebarServiceProvider from "@/components/sidebar-service-provider";
import Services from "./services";

const ServiceProvider = () => {
  const [currentView, setCurrentView] = useState<string>("");

  const renderForm = () => {
    switch (currentView) {
      case "dashboard":
        return <SeeviceProviderDashboard />;
      case "services":
        return <Services />;
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
      <SidebarServiceProvider setCurrentView={setCurrentView} />
      <div className="flex-1 p-4 lg:p-0">{renderForm()}</div>
    </div>
  );
};

export default ServiceProvider;
