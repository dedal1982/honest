import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import PrivacyPopup from "../PrivacyPopup/PrivacyPopup";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function Privacy() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    // Навигация на маршрут /privacy
    navigate("/privacy");
  };

  const handleClose = () => {
    // Возврат на главную страницу
    navigate("/", { replace: true });
  };

  return (
    <>
      <li id="privacy" onClick={handleOpen}>
        &laquo;Политика конфедициальности&#187;
      </li>
      {location.pathname === "/privacy" && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <PrivacyPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default Privacy;
