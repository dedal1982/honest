import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./Header";
import GrandСontent from "./GrandСontent";
import Footer from "./Footer";
import CookieConsent from "./CookieConsent";
import NotFoundPage from "./NotFoundPage";
import Terms from "./Terms";
import Privacy from "./Privacy";

function App() {
  return (
    <div className="page">
      <Header />
      <Routes>
        <Route path="/" element={<GrandСontent />} />
        <Route path="/terms" element={<Terms />} />
        <Route path="/privacy" element={<Privacy />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
      <CookieConsent />
    </div>
  );
}

export default App;
