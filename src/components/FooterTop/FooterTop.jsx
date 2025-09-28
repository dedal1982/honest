import { createPortal } from "react-dom";
import { useState } from "react";
import Overlay from "../Overlay/Overlay";
import RequisitesPopup from "../RequisitesPopup/RequisitesPopup";
import useModal from "../../hooks/useModal";

function FooterTop() {
  const { isOpen, open, close } = useModal(false);

  const handleOpen = () => {
    open();
  };

  const handleClose = () => {
    close();
  };

  const [active, setActive] = useState(false);

  const handleMouseEnter = () => {
    setActive(true);
  };

  const handleMouseLeave = () => {
    setActive(false);
  };

  // Обертка для всех requisites
  const requisitesClass = `footer__contacts-list requisites-hover ${
    active ? "active" : ""
  }`;
  return (
    <div id="requisites" className="footer__top" onClick={handleOpen}>
      <div className="footer__contacts">
        <ul
          className={requisitesClass}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li>Наименование юридического лица: ООО &laquo;Честный Эйб&raquo;</li>
          <li>Юридический адрес: 143980, Московская обл.,</li>
          <li>г. Балашиха, ул. Октябрьская (Железнодорожный мкр.),</li>
          <li>д. 33, Бдок А, помещение V-13, комната 1</li>
        </ul>
        <ul
          className={requisitesClass}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <li>ОГРН: 1195081055575</li>
          <li>ИНН: 5012100464</li>
          <li>КПП: 501201001</li>
        </ul>
      </div>
      <ul
        className={`footer__contacts-list bank-list requisites-hover ${
          active ? "active" : ""
        }`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <li>Банковские реквизиты:</li>
        <li>Банк: АО &laquo;АЛЬФА-БАНК&raquo;</li>
        <li>Расчетный счет: 40702810902630003334</li>
        <li>Корреспондентский счет: 30101810200000000593</li>
        <li>БИК: 044525593</li>
      </ul>
      {isOpen &&
        createPortal(
          <Overlay onClose={handleClose}>
            <RequisitesPopup />
          </Overlay>,
          document.body
        )}
    </div>
  );
}

export default FooterTop;
