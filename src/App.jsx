import { Routes, Route } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import GrandСontent from "./components/GrandСontent";
import Footer from "./components/Footer";
import CookieConsent from "./components/CookieConsent";
import NotFoundPage from "./components/NotFoundPage";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";

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
