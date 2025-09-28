import HeaderTopTitle from "./HeaderTopTitle";
import HeaderLogo from "./HeaderLogo";
import HeaderContacts from "./HeaderContacts";

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
