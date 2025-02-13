
import { FacebookLogo, InstagramLogo, LinkedinLogo, XLogo } from "@phosphor-icons/react";
import img from "../../../assets/Home_imgs/footer_img/footer_cleanup.png"
import logo from "../../../assets/Home_imgs/navbar/logo2.png";
import "./footer.css"
 const Footer = () => {
  return (
    <div className="footer" style={{
        backgroundImage : `url(${img})`
    }}>
    <div className="container">
        <div className="flex">
        <div className="des">
             <img src={logo} alt="logo" />
            <p>
            Completely promote interdependent systems for Latest update news this Medical.
            </p>
        </div>
        <div className="part2">
            <div className="foot-link">
                <h3>Company</h3>
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About Us</a></li>
                    <li><a href="#">Services</a></li>
                    <li><a href="#">Contact Us</a></li>
                    <li><a href="#">blog</a></li>
                </ul>
            </div>
            <div className="foot-link">
                <h3>Useful Links</h3>
                <ul>
                    <li><a href="#">Partners</a></li>
                    <li><a href="#">Testimonial</a></li>
                    <li><a href="#">Appoinment</a></li>
                    <li><a href="#">Privacy</a></li>
                    <li><a href="#">FQA</a></li>
                </ul>
            </div>
            <div className="foot-link">
                <div className="section">
                    <h3>Contacts</h3>
                    <p>102/ B Street , New Elephant Read, Sandigo , USA</p>
                </div>
                <div className="section">
                    <h3>Email-US</h3>
                    <p>esample@gmail.co</p>
                </div>
                <div className="section">
                    <h3>Phone</h3>
                    <p>+123 456 7890</p>
                </div>
            </div>
        </div>
        </div>
        <div className="copy">
        <p>Copyright © 2021 Medical. All rights reserved.</p>
        <div className="social">
            <a href="#">
            <FacebookLogo size={32} />
            </a>
            <a href="#">
            <XLogo size={32} />
            </a>
            <a href="#">
            <InstagramLogo size={32} />
            </a>
            <a href="#">
            <LinkedinLogo size={32} />
            </a>
        </div>
        </div>
    </div>
    </div>
  )
}
export default Footer;
