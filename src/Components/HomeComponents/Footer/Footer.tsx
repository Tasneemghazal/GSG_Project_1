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
        </div>
        <div className="copy">
        <p>Copyright © 2021 Medical. All rights reserved.</p><br />
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
