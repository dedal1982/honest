import { createPortal } from "react-dom";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import ContactsPopup from "../ContactsPopup/ContactsPopup";

function HeaderContacts() {
  const [isModalVisible, setModalVisible] = useState(false);

  const handleOpen = () => {
    setModalVisible(true);
  };

  const handleClose = () => {
    setModalVisible(false);
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
      {isModalVisible &&
        createPortal(
          <Overlay onClose={handleClose}>
            <ContactsPopup />
          </Overlay>,
          document.body
        )}
    </div>
  );
}

export default HeaderContacts;
