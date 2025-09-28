// import { createPortal } from "react-dom";
// import { useState, useEffect } from "react";
// import Overlay from "./Overlay";
// import PrivacyPopup from "./PrivacyPopup";

// function Privacy() {
//   const [isModalVisible, setModalVisible] = useState(false);

//   // Проверяем URL при монтировании компонента
//   useEffect(() => {
//     if (window.location.pathname === "/privacy") {
//       setModalVisible(true);
//     }
//   }, []);

// const handleOpen = () => {
//   setModalVisible(true);
//   // Обновляем URL
//   history.pushState(null, "", "/privacy");
// };

//   const handleClose = () => {
//     setModalVisible(false);
//     // Возвращаемся к корню или предыдущему URL
//     history.pushState(null, "", "/");
//   };

//   // Также можно слушать изменения истории, если хотите реагировать на Back/Forward
//   useEffect(() => {
//     const handlePopState = () => {
//       if (window.location.pathname === "/privacy") {
//         setModalVisible(true);
//       } else {
//         setModalVisible(false);
//       }
//     };
//     window.addEventListener("popstate", handlePopState);
//     return () => window.removeEventListener("popstate", handlePopState);
//   }, []);

//   return (
//     <>
// <li id="privacy" onClick={handleOpen}>
//   &laquo;Политика конфедициальности&#187;
// </li>
//       {isModalVisible &&
//         createPortal(
//           <Overlay onClose={handleClose}>
//             <PrivacyPopup />
//           </Overlay>,
//           document.body
//         )}
//     </>
//   );
// }

// export default Privacy;
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import PrivacyPopup from "./PrivacyPopup";

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
