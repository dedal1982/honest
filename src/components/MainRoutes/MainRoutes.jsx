import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
  useNavigate,
} from "react-router-dom";
import { useEffect } from "react";

function MainRoutes() {
  const location = useLocation();
  const navigate = useNavigate();

  // Проверка URL при монтировании
  useEffect(() => {
    if (location.pathname === "/privacy") {
      // Открываем модалку
    } else if (location.pathname === "/terms") {
      // Открываем модалку
    }
  }, [location]);

  return (
    <>
      {/* Основное содержимое */}
      <nav>
        <a href="/privacy">Политика конфиденциальности</a>
        <a href="/terms">Пользовательское соглашение</a>
      </nav>

      {/* Маршруты */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/privacy"
          element={<PrivacyModal onClose={() => navigate("/")} />}
        />
        <Route
          path="/terms"
          element={<TermsModal onClose={() => navigate("/")} />}
        />
      </Routes>
    </>
  );
}

export default MainRoutes;
