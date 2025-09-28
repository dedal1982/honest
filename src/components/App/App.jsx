import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "../Header/Header";
import GrandСontent from "../GrandСontent/GrandСontent";
import Footer from "../Footer/Footer";
import CookieConsent from "../CookieConsent/CookieConsent";
import NotFoundPage from "../NotFoundPage/NotFoundPage";
import Terms from "../Terms/Terms";
import Privacy from "../Privacy/Privacy";

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
