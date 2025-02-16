import { MagnifyingGlass, List } from "@phosphor-icons/react";
import logo from "../../../assets/Home_imgs/navbar/Artboard.png";
import "./navbar.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(0);
  const [activeSection, setActiveSection] = useState('');

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setActiveSection(id)
    }
  }

  useEffect(() => {
    const section = ['slider', 'about', 'services', 'contact'];
    const handleScroll = () => {
      let current = '';
      section.forEach((section) => {
        const element = document.getElementById(section)
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150 && rect.bottom >= 150) {
            current = section;
          }
        }
      });
      setActiveSection(current);
    }
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [])

  return (
    <div id="nav">
      <nav className="navbar">
        <div className={`${showMenu ? "nav column" : "nav"}`}>
          <div className="logo">
            <a href="/">
              <img src={logo} alt="Logo" />
            </a>
          </div>
          <div className={showMenu ? "nav-menu show" : "nav-menu"}>
            <ul>
              <li>
                <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('slider')}
                  className={activeSection === 'slider' ? 'active' : ''}
                >
                  Home
                </a>
              </li>
              <li>
                <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('about')}
                  className={activeSection === 'about' ? 'active' : ''}
                >
                  About
                </a>
              </li>
              <li>
                <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('services')}
                  className={activeSection === 'services' ? 'active' : ''}
                >
                  Services 
                </a>
              </li>
              <li>
                <a style={{ cursor: 'pointer' }} onClick={() => scrollToSection('contact')}
                  className={activeSection === 'contact' ? 'active' : ''}
                >
                  Contact
                </a>
              </li>
              <li>
                <a href="/login">Login</a>
              </li>
            </ul>
          </div>
          <div className="buttons">
            <div className="search">
              <a href="/search">
                <MagnifyingGlass size={32} />
              </a>
            </div>
            <div className="book">
                <Link to="/patient/booking" >Book Appointment</Link>
            </div>
            <div
              className="menu"
              onClick={() => setShowMenu(!showMenu)}
            >
              <List size={32} />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;