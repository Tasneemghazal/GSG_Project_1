import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import "./footer.css";

const Footer = () => {
    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    }
    return (
        <div id="contact">
            <h1>Vita 5.</h1>
            <p>
                Completely promote interdependent systems for Latest update news this Medical.
            </p>
            <div className="icons-list">
                <a onClick={() => scrollToSection("slider")}>
                    <FacebookLogo weight="fill" size={32} />
                </a>
                <a onClick={() => scrollToSection("slider")}>
                    <XLogo weight="fill" size={32} />
                </a>
                <a onClick={() => scrollToSection("slider")}>
                    <InstagramLogo weight="fill" size={32} />
                </a>
                <a onClick={() => scrollToSection("slider")}>
                    <LinkedinLogo weight="fill" size={32} />
                </a>
            </div>
            <div className="footer-links">
                <div className="footer-column">
                    <h3>About</h3>
                    <a onClick={() => scrollToSection("slider")}>About us</a>
                    <a onClick={() => scrollToSection("slider")}>Services</a>
                    <a onClick={() => scrollToSection("slider")}>Blog</a>
                    <a onClick={() => scrollToSection("slider")}>Contact us</a>
                </div>
                <div className="footer-column">
                    <h3>Support</h3>
                    <a onClick={() => scrollToSection("slider")}>Support</a>
                    <a onClick={() => scrollToSection("slider")}>Knowledge base</a>
                    <a onClick={() => scrollToSection("slider")}>Live chat</a>
                </div>
                <div className="footer-column">
                    <h3>Jobs</h3>
                    <a onClick={() => scrollToSection("slider")}>Jobs</a>
                    <a onClick={() => scrollToSection("slider")}>Our time</a>
                    <a onClick={() => scrollToSection("slider")}>Leadership</a>
                    <a onClick={() => scrollToSection("slider")}>Privacy Policy</a>
                </div>
                <div className="footer-column">
                    <h3>Products</h3>
                    <a onClick={() => scrollToSection("slider")}>Nordic Chair</a>
                    <a onClick={() => scrollToSection("slider")}>Kruzo Aero</a>
                    <a onClick={() => scrollToSection("slider")}>Ergonomic Chair</a>
                </div>
            </div>
            <br /><br /><hr />
            <div className="final">
                <p>Copyright ©2024. All Rights Reserved. — Designed with love by Untree.co Distributed By ThemeWagon</p>
                <div>
                    <a onClick={() => scrollToSection("slider")}>Terms & Conditions</a> |
                    <a onClick={() => scrollToSection("slider")}> Privacy Policy</a>
                </div>
            </div>
        </div>
    );
};

export default Footer;
