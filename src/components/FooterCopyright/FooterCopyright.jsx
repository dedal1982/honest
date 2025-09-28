import { createPortal } from "react-dom";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import CopyrightPopup from "../CopyrightPopup/CopyrightPopup";

function FooterCopyright() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
  };
  return (
    <p id="copyright" className="footer__copyright-bottom" onClick={handleOpen}>
      &#169; ООО &laquo;Честный Эйб&#187;, 2019-2025
      {isModalVisible &&
        createPortal(
          <Overlay onClose={handleClose}>
            <CopyrightPopup />
          </Overlay>,
          document.body
        )}
    </p>
  );
}

export default FooterCopyright;
