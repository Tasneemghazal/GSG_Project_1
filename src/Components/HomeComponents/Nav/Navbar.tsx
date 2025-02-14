import { MagnifyingGlass, List } from "@phosphor-icons/react";
import logo from "../../../assets/Home_imgs/navbar/Artboard.png";
import "./navbar.css";
import { useState } from "react";

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [scroll, setScroll] = useState(0);

  window.addEventListener("scroll", () => {
    setScroll(window.scrollY);
  });

  return (
    <>
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
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/about">About</a>
              </li>
              <li>
                <a href="/services">Services</a>
              </li>
              <li>
                <a href="/contact">Contact</a>
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
              <a>Book Appointment</a>
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
    </>
  );
};

export default Navbar;