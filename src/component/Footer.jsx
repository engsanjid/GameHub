import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images-removebg-preview.png"; // your logo

const Footer = () => {
  return (
    <footer className="bg-base-200 text-base-content py-10 mt-10 border-t">
      <div className="max-w-7xl mx-auto px-5 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo + About */}
        <aside className="flex flex-col items-center md:items-start text-center md:text-left">
          <img src={img} alt="GameHub Logo" className="h-14 w-auto mb-2" />
          <h2 className="font-bold text-xl">GameHub</h2>
          <p className="opacity-70 mt-2">
            Your gaming destination — discover, explore and enjoy top-rated games.
          </p>
          <p className="mt-3 text-sm opacity-60">
            © {new Date().getFullYear()} GameHub — All Rights Reserved.
          </p>
        </aside>

        {/* Useful Links */}
        <nav className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3">Useful Links</h3>
          <ul className="space-y-2">
            <li><Link to="/" className="link link-hover">Home</Link></li>
            <li><Link to="/games" className="link link-hover">Games</Link></li>
            <li><Link to="/about" className="link link-hover">About</Link></li>
            <li><Link to="/contact" className="link link-hover">Contact</Link></li>
            <li><Link to="/support" className="link link-hover">Support</Link></li>
          </ul>
        </nav>

        {/* Social Media */}
        <nav className="text-center md:text-left">
          <h3 className="font-semibold text-lg mb-3">Follow Us</h3>
          <div className="flex justify-center md:justify-start gap-5">

            {/* Facebook */}
            <a
              href="https://facebook.com/sanjid.sanjid.311"
              target="_blank"
              className="hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M9 8H6v4h3v12h5V12h3.642l.358-4H14V6.333C14 5.378 14.192 5 15.115 5H18V0h-3.808C10.596 0 9 1.583 9 4.615V8z" />
              </svg>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/md-sanjid-islam146/"
              target="_blank"
              className="hover:text-primary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 24 24"
                className="fill-current"
              >
                <path d="M4.983 3.5c0 1.381-1.11 2.5-2.483 2.5C1.117 6 0 4.881 0 3.5 0 2.12 1.117 1 2.5 1c1.373 0 2.483 1.12 2.483 2.5zM.25 23h4.5V7.75H.25V23zM8.75 7.75V23h4.5v-7.5c0-3.978 5.25-4.297 5.25 0V23H23v-9.75c0-8.306-9.75-8.01-9.75 0V23h-4.5V7.75h-5z" />
              </svg>
            </a>

          </div>
        </nav>

      </div>
    </footer>
  );
};

export default Footer;
