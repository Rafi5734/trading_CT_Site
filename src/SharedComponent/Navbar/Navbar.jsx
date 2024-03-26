import { useEffect, useRef, useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import "./Navbar.css";
import { Link, useLocation } from "react-router-dom";

import CTLogo from '../../../public/ctoption.png'
const Navbar = () => {
  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  };

  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  

  // ... rest of your code

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 70) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div id="navigation" className={scrolled ? "scrolled" : ""}>
      <header className="w-11/12 2xl:max-w-[1600px] mx-auto font-montserrat tracking-wide">
        <Link to="/">
          <img src={CTLogo} className="max-w-[150px]" alt="" />
        </Link>
        <nav ref={navRef} className="">
          <Link className={`${location.pathname === '/' ? 'text-primary font-semibold border-b-2 border-primary' : 'font-medium border-b-2 border-transparent'}`} to="/" onClick={showNavbar}>
            Home
          </Link>
          <Link className={`${location.pathname === '/about-us' ? 'text-primary font-semibold border-b-2 border-primary' : 'font-medium border-b-2 border-transparent'}`} to="/about-us" onClick={showNavbar}>
            About Us
          </Link>
          <Link to="/contact"  className={`${location.pathname === '/contact' ? 'text-primary font-semibold border-b-2 border-primary' : 'font-medium border-b-2 border-transparent'}`} onClick={showNavbar}>
            Contact
          </Link>
          <Link to="/faq"  className={`${location.pathname === '/faq' ? 'text-primary font-semibold border-b-2 border-primary' : 'font-medium border-b-2 border-transparent'}`} onClick={showNavbar}>
            Faq
          </Link>
          <Link to="/help"  className={`${location.pathname === '/help' ? 'text-primary font-semibold border-b-2 border-primary' : 'font-medium border-b-2 border-transparent'}`} onClick={showNavbar}>
            Help
          </Link>
          <Link
          to="/user"
            onClick={showNavbar}
            id="get-started-btn"
            className="md:absolute md:right-[2.5%] bg-primary py-[5px] px-3 rounded-full font-semibold"
          >
            Get Started
          </Link>
          <button className="nav-btn nav-close-btn" onClick={showNavbar}>
            <FaTimes />
          </button>
        </nav>
        <button className="nav-btn" onClick={showNavbar}>
          <FaBars />
        </button>
      </header>
    </div>
  );
};
export default Navbar;
