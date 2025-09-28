import { createPortal } from "react-dom";
import CopyrightPopup from "../CopyrightPopup/CopyrightPopup";
import useModal from "../../hooks/useModal";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

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
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <CopyrightPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </p>
  );
}

export default FooterCopyright;
