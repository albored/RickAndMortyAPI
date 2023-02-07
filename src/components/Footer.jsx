function Footer() {
  const fullYear = new Date().getFullYear();
  return (
    <div
      className="footer footer-center
    py-5 bg-gray-700"
    >
      All rigths reserved &copy; {fullYear} by Alvaro Cayo
    </div>
  );
}

export default Footer;
