import FooterTop from "./FooterTop";
import FooterBottom from "./FooterBottom";

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
