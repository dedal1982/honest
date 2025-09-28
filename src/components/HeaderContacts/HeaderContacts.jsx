import { createPortal } from "react-dom";
import { useState } from "react";
import ContactsPopup from "../ContactsPopup/ContactsPopup";
import useModal from "../../hooks/useModal";
import { lazy, Suspense } from "react";
import Preloader from "../Preloader/Preloader";
const LazyOverlay = lazy(() => import("../Overlay/Overlay"));

function HeaderContacts() {
  const { isOpen, open, close } = useModal(false);

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    close();
  };

  const [contactsText, setContactsText] = useState("Контакты");

  const contactsName = "Контакты";

  const phoneLinks = [
    { href: "tel:+79165718989", name: "Сайты", display: "+7 (916) 571-89-89" },
    { href: "tel:+79255718989", name: "Игры", display: "+7 (925) 571-89-89" },
    {
      href: "tel:+79645718989",
      name: "Тестирование",
      display: "+7 (964) 571-89-89",
    },
    {
      href: "tel:+79855718989",
      name: "Симбиоз",
      display: "+7 (985) 571-89-89",
    },
  ];
  return (
    <div className="header__contacts">
      <div
        id="header-contacts"
        className="header__contacts-name"
        onClick={handleOpen}
      >
        {contactsText}
      </div>
      <ul className="header__contacts-phones">
        {phoneLinks.map((link, index) => (
          <li key={index}>
            <span></span>
            <a
              href={link.href}
              data-name={link.name}
              onMouseOver={() => setContactsText(link.name)}
              onMouseOut={() => setContactsText(contactsName)}
            >
              {link.display}
            </a>
          </li>
        ))}
      </ul>
      {isOpen && (
        <Suspense fallback={<Preloader />}>
          {createPortal(
            <LazyOverlay onClose={handleClose}>
              <ContactsPopup />
            </LazyOverlay>,
            document.body
          )}
        </Suspense>
      )}
    </div>
  );
}

export default HeaderContacts;
