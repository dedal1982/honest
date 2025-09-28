import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Overlay from "../Overlay/Overlay";
import TermsPopup from "../TermsPopup/TermsPopup";

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
      {location.pathname === "/terms" &&
        createPortal(
          <Overlay onClose={handleClose}>
            <TermsPopup />
          </Overlay>,
          document.body
        )}
    </>
  );
}

export default Terms;
