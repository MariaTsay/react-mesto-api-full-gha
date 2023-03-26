import React from "react";

function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <footer className="footer">
      <p className="footer__copyright">© {fullYear} Мария Цай</p>
    </footer>
  )
}

export default Footer;