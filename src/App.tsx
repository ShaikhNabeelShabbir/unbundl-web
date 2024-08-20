import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Signupforserviceproviders from "./pages/admin/signupforserviceproviders";
import Signupfortalent from "./pages/admin/signupfortalent";
import Signupforinvestor from "./pages/admin/signupforinvestor";
import Signup from "./pages/admin/signup";
import Founderdashboard from "./pages/startup/founder";
import ServiceProvider from "./pages/startup/service-provider";
import Talentdashboard from "./pages/startup/talent";
import Investor from "./pages/startup/investor";
import AccountSettings from "./pages/startup/account-settings";

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" element={<Signup />} />
          <Route
            path="/service-providers"
            element={<Signupforserviceproviders />}
          />
          <Route path="/talent" element={<Signupfortalent />} />
          <Route path="/investor" element={<Signupforinvestor />} />
          <Route path="/founder-dashboard" element={<Founderdashboard />} />
          <Route
            path="/service-provider-dashboard"
            element={<ServiceProvider />}
          />
          <Route path="/talent-dashboard" element={<Talentdashboard />} />
          <Route path="/investor-dashboard" element={<Investor />} />
          <Route path="/account-setting" element={<AccountSettings />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
