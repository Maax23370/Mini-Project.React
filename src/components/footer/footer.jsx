import "./footer.css"

const Footer = () => {
    return ( <footer className="footer">
  <div className="footer__container">
    <ul className="footer__links">
      <li>
        <a href="/" className="footer__link">Home - Shop</a>
      </li>
     
      <li>
        <a href="/contact" className="footer__link">Contact</a>
      </li>
    </ul>
    <span className="footer__copy">
      © All Rights Reserved By
      <a href="#">Xiaomi</a>
    </span>
  </div>
</footer>
 );
}
 
export default Footer;