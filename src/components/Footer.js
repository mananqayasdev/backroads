import { socialLinks } from "../data";
import PageLinks from "./PageLinks";
import SocialLink from "./SocialLink";
const Footer = () => {
  return (
    <footer className="section footer">
      <ul className="footer-links">
        <PageLinks parentClass="footer-links" itemClass="footer-link" />
      </ul>
      <ul className="footer-icons">
        {socialLinks.map((link) => {
          return <SocialLink {...link} key={link.id} LinkClass="footer-icon" />;
        })}
      </ul>
      <p className="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date">{new Date().getFullYear()}</span> all rights reserved
      </p>
    </footer>
  );
};
export default Footer;
