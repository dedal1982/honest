import "./Header.css";
import HeaderTopTitle from "../HeaderTopTitle/HeaderTopTitle";
import HeaderLogo from "../HeaderLogo/HeaderLogo";
import HeaderContacts from "../HeaderContacts/HeaderContacts";

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header__wrapper">
          <HeaderLogo />
          <HeaderTopTitle />
          <HeaderContacts />
        </div>
      </div>
    </div>
  );
}

export default Header;
