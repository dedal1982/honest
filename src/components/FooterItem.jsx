import Terms from "./Terms";
import Privacy from "./Privacy";

function FooterItem() {
  return (
    <ul className="footer__copyright-item">
      <Terms />
      <Privacy />
    </ul>
  );
}

export default FooterItem;
