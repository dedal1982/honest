// import { createPortal } from "react-dom";
// import { useState, useEffect } from "react";
// import Overlay from "./Overlay";
// import TermsPopup from "./TermsPopup";

// function Terms() {
//   const [isModalVisible, setModalVisible] = useState(false);

//   // Проверяем URL при монтировании компонента
//   useEffect(() => {
//     if (window.location.pathname === "/terms") {
//       setModalVisible(true);
//     }
//   }, []);

//   const handleOpen = () => {
//     setModalVisible(true);
//     // Обновляем URL
//     history.pushState(null, "", "/terms");
//   };

//   const handleClose = () => {
//     setModalVisible(false);
//     // Возвращаемся к корню или предыдущему URL
//     history.pushState(null, "", "/");
//   };

//   // Обрабатываем изменения истории (например, кнопки "Назад")
//   useEffect(() => {
//     const handlePopState = () => {
//       if (window.location.pathname === "/terms") {
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
// <li id="terms" onClick={handleOpen}>
//   &laquo;Пользовательское соглашение&#187;
// </li>
//       {isModalVisible &&
//         createPortal(
//           <Overlay onClose={handleClose}>
//             <TermsPopup />
//           </Overlay>,
//           document.body
//         )}
//     </>
//   );
// }

// export default Terms;
import { createPortal } from "react-dom";
import { useNavigate, useLocation } from "react-router-dom";
import Overlay from "./Overlay";
import TermsPopup from "./TermsPopup";

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
