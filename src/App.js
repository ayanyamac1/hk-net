import { useActionData } from "react-router-dom";
import FooterComponent from "./components/Footer.component";
import NavbarComponent from "./components/Navbar.component";

import { Routes, Route } from 'react-router-dom';
import HomePage from "./pages/Home.page";
import EmailsPage from "./pages/Emails.page";
import StaffBiographiesPage from "./pages/StaffBiographies.page";
import WisdomHubPage from "./pages/WisdomHub.page";
import AboutUsPage from "./pages/AboutUs.page";

function App() {
  return (
    <div>
      {/* Navbar */}
       <NavbarComponent> </NavbarComponent>

      {/* Wrapper */}
      <div className="wrapper">
        <Routes>
          <Route   path="/"   element = {<HomePage />} />
          <Route    path="/emails"  element = {<EmailsPage />} />
          <Route    path="/staff-biographies"  element = {<StaffBiographiesPage />} />
          <Route    path="/Wisdom-hub"  element = {<WisdomHubPage />} />
          <Route    path="/About-Us"  element = {<AboutUsPage />} />

        </Routes>
       
      </div>

      {/* Footer */}
      <FooterComponent></FooterComponent>

    </div>
  );
}

export default App;

