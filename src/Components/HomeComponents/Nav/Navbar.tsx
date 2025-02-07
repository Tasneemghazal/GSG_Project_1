import {MagnifyingGlass , List} from "@phosphor-icons/react";
import logo from "../../../assets/Home_imgs/navbar/logo.png";
import logo2 from "../../../assets/Home_imgs/navbar/logo2.png";

import "./navbar.css"
import { useState } from "react";
 const Navbar = () => {
    const [showmenu, setshowmenu] = useState(false);
    const [background, setbackground] = useState(false);
    const [secrooll  , setsecrooll] = useState(0);
    window.addEventListener("scroll", ()=>{
        setsecrooll(window.scrollY);
        if(secrooll > 100){
            setbackground(true);
        }else{
            setbackground(false);
        }
    })
  return (
    <>
    <nav className="navbar">
        <div className={`${showmenu?"nav colom" :"nav" } ${background? "background" : ""}`}   >
            <div className="logo">
            <a href="/">
            <img src={background ? logo2 : logo} alt="" />
            </a>
            </div>
            <div className=  {
                showmenu? "nav-menu show": "nav-menu"  // using ternary operator to toggle the class "show" based on the state of showmenu
            }>
            <ul>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/about">Services</a></li>
                <li><a href="/contact">Contact</a></li>
                <li><a href="/login">Login</a></li>
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
               <div className={background? "menu white" :   "menu"  } onClick={()=>{ setshowmenu(!showmenu) }}>
               <List size={32}  />
               </div>
            </div>
        </div>
    </nav>
    </>
  )
}
export default Navbar