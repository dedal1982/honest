import { createPortal } from "react-dom";
import Overlay from "../Overlay/Overlay";
import CopyrightPopup from "../CopyrightPopup/CopyrightPopup";
import useModal from "../../hooks/useModal";

function FooterCopyright() {
  const { isOpen, open, close } = useModal(false);

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    close();
  };
  return (
    <p id="copyright" className="footer__copyright-bottom" onClick={handleOpen}>
      &#169; ООО &laquo;Честный Эйб&#187;, 2019-2025
      {isOpen &&
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
