import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import TermsPopup from "../TermsPopup/TermsPopup";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function Terms() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleOpen = () => {
    // Навигация на маршрут /privacy
    navigate("/terms");
  };

  const handleClose = () => {
    // Возврат на главную страницу
    navigate("/", { replace: true });
  };

  return (
    <>
      <li id="terms" onClick={handleOpen}>
        &laquo;Пользовательское соглашение&#187;
      </li>
      {location.pathname === "/terms" && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <TermsPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </>
  );
}

export default Terms;
