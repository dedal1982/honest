import "./Footer.css";
import FooterTop from "../FooterTop/FooterTop";
import FooterBottom from "../FooterBottom/FooterBottom";

function Footer() {
  return (
    <div className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <FooterTop />
          <FooterBottom />
        </div>
      </div>
    </div>
  );
}

export default Footer;
