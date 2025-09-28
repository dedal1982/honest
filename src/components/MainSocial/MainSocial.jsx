import Telegram from "/src/assets/images/Telegram.svg";
import EMail from "/src/assets/images/E-Mail.svg";
import RuTube from "/src/assets/images/RuTube.svg";
import Pinterest from "/src/assets/images/Pinterest.svg";
import ToGis from "/src/assets/images/2GIS.svg";
import RuStore from "/src/assets/images/RuStore.svg";

function MainSocial() {
  return (
    <ul className="main__social">
      <li>
        <a href="https://telegram.me/ChestnyyEyb" target="_blank">
          <img src={Telegram} alt="Telegram" />
        </a>
      </li>
      <li>
        <a href="mailto:lincoln@chestnyyeyb.ru" target="_blank">
          <img src={EMail} alt="E-Mail" />
        </a>
      </li>
      <li>
        <a href="https://rutube.ru/u/chestnyyeyb/" target="_blank">
          <img src={RuTube} alt="RuTube" />
        </a>
      </li>
      <li>
        <a href="https://www.pinterest.ru/chestnyyeyb/" target="_blank">
          <img src={Pinterest} alt="Pinterest" />
        </a>
      </li>
      <li>
        <a
          href="https://2gis.ru/balashikha/firm/70000001085385845"
          target="_blank"
        >
          <img src={ToGis} alt="2GIS" />
        </a>
      </li>
      <li>
        <a
          href="https://www.rustore.ru/catalog/app/com.gameeyb.uncleabestories"
          target="_blank"
        >
          <img src={RuStore} alt="RuStore" />
        </a>
      </li>
    </ul>
  );
}
export default MainSocial;
