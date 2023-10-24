import { Link } from "react-router-dom";

import logo from "../../public/json-logo.png";

const Footer = () => {
  return (
    <footer className="container text-center py-6">
      <Link
        to="/"
        className="flex items-center justify-center hover:no-underline"
      >
        <img src={logo} alt="logo" className="w-5 h-5 mr-4 animate" />
        <span className="text-xs text-gray-500 font-bold">
          © Vincent AIPAR - {new Date().getFullYear()}{" "}
        </span>
      </Link>
    </footer>
  );
};

export default Footer;
