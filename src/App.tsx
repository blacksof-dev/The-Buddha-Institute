import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Contact from "pages/contact-us";
import Engage from "pages/engage-with-us";
import PartnersAndSupporters from "pages/partners-support";
import BudhaFellowProgram from "pages/budha-fellow-program";
import Footer from "organisms/footer";
import Navnew from "organisms/header";
import ScrollToTop from "layouts/ScrollToTop";
import DonateUs from "pages/donate-us";
import Home from "pages/home";
import AboutUs from "pages/about-us";
import Resources from "pages/resources";
import BuddhaFellows from "pages/buddha-fellows";
import Awards from "pages/awards";
import Impact from "pages/impact";
import DonationFromUSA from "pages/usa-donate";
import DonationFromIndia from "pages/india-donate";
import ViewWithAdminLayout from "admin/ViewWithAdminLayout";
import { BrowserRouter } from "react-router-dom";
import PartnersAndSupportersAdmin from "admin/pages/partners-and-supporters";
import AdminHome from "./admin/pages/home/index";
// import NewsAndArticales from "admin/pages/home/newsAndArticales";
import AdminContact from "./admin/pages/contact/index";
// import ContactUs from "pages/contact-us";

import CaseStudy from "admin/pages/caseStudy";
import Updates from "admin/pages/home/Newsletter";
import BudhaFellowshipProgram from "admin/pages/budha-fellowship-program";
import BudhaFellow from "admin/pages/budha-fellow";
import DonateUsAdmin from "admin/pages/donate-us";
import { AuthProvider, useAuth } from "admin/hooks/authProvider";
import AdminSignIn from "admin/pages/authentication/login";
import AdminImpact from "admin/pages/impact";
import { Navigate, Outlet } from "react-router-dom";
import AdminDashboard from "admin/pages/Admin-dashboard";
import { ToastContainer } from "react-toastify";
import AwardsAdminPanel from "admin/pages/awards";
import ForgetPassword from "admin/pages/authentication/forget-password";
import ResourcesAdmin from "admin/pages/resources";
import ErrorPage from "pages/errorPage";
import MarkDown from "pages/markdown";
import { MarkDownProvider } from "hooks/markDown";
import NewsLetterPage from "admin/pages/newsletter";
import AboutUsAdmin from "admin/pages/aboutUs";
import CreatePassword from "admin/pages/authentication/set-password";
import Privacy from "organisms/privacy";
import Register from "auth/register";
import Login from "auth/login";
import ForgotPassword from "auth/forgot-password";

const PrivateRoute = () => {
  const { token } = useAuth();
  if (!token) return <Navigate to="/signin" />;
  return <Outlet />;
};

// export default PrivateRoute;

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="App">
        <Navnew />
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="colored"
          // transition={Bounce}
        />
        <AuthProvider>
          <MarkDownProvider>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/privacy-policy" element={<Privacy />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="/contact-us" element={<Contact />} />
              <Route path="/engage-with-us" element={<Engage />} />
              <Route
                path="/partners-and-supporters"
                element={<PartnersAndSupporters />}
              />
              <Route path="/donate-us" element={<DonateUs />} />
              {/* <Route path="/ecowrap-caseStudy" element={<MarkDownPractise />} /> */}
              <Route path="signin" element={<AdminSignIn />}></Route>
              <Route
                path="/forgot-admin-password"
                element={<ForgetPassword />}
              />
              <Route
                path="create-password/:token"
                element={<CreatePassword />}
              />
              <Route
                path="/budha-fellowship-program"
                element={<BudhaFellowProgram />}
              />

              <Route path="/resources" element={<Resources />} />

              <Route path="/awards" element={<Awards />} />
              <Route
                path="/budha-fellowship-program"
                element={<BudhaFellowProgram />}
              />
              <Route path="/resources" element={<Resources />} />
              <Route path="/awards" element={<Awards />} />
              <Route path="/impact" element={<Impact />} />
              <Route path="/buddha-fellows" element={<BuddhaFellows />} />
              <Route path="/donate-usa" element={<DonationFromUSA />} />
              <Route path="/donate-india" element={<DonationFromIndia />} />
              <Route path="/case-study" element={<MarkDown />} />

              <Route path="/registration" element={<Register />} />
              <Route path="/login" element={<Login />} />
              <Route path="/forgot-password" element={<ForgotPassword />} />

              <Route element={<PrivateRoute />}>
                <Route path="/admin" element={<ViewWithAdminLayout />}>
                  <Route path="dashboard" element={<AdminDashboard />} />
                  <Route path="signin" element={<AdminSignIn />}></Route>
                  <Route path="home" element={<AdminHome />} />

                  <Route path="contact" element={<AdminContact />} />

                  <Route
                    path="partners-and-supporters"
                    element={<PartnersAndSupportersAdmin />}
                  />
                  <Route path="case-study" element={<CaseStudy />} />
                  <Route path="updates" element={<Updates />} />
                  <Route path="impact" element={<AdminImpact />} />
                  <Route
                    path="budha-fellowship-program"
                    element={<BudhaFellowshipProgram />}
                  />
                  <Route path="budha-fellow" element={<BudhaFellow />} />
                  <Route path="donate" element={<DonateUsAdmin />} />
                  <Route path="awards" element={<AwardsAdminPanel />} />
                  <Route path="resources" element={<ResourcesAdmin />} />
                  <Route path="newsletter" element={<NewsLetterPage />} />
                  <Route path="about-us" element={<AboutUsAdmin />} />
                </Route>
              </Route>

              <Route path="*" element={<ErrorPage />} />
            </Routes>
          </MarkDownProvider>
        </AuthProvider>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
