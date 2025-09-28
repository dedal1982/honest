import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import PrivacyPopup from "../PrivacyPopup/PrivacyPopup";

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
      {location.pathname === "/privacy" &&
        createPortal(
          <Overlay onClose={handleClose}>
            <PrivacyPopup />
          </Overlay>,
          document.body
        )}
    </>
  );
}

export default Privacy;
