import Terms from "../Terms/Terms";
import Privacy from "../Privacy/Privacy";

function FooterItem() {
  return (
    <ul className="footer__copyright-item">
      <Terms />
      <Privacy />
    </ul>
  );
}

export default FooterItem;
