import doctor from "../../../assets/Home_imgs/about/doctors.png";
import phone from "../../../assets/Home_imgs/about/phone.webp";
// import location from "../../../assets/Home_imgs/about/location.png";
import location from "../../../assets/Home_imgs/about/717577.png"
import "./about.css"
const About = () => {
    return (
        <div className="about-section">
        <div className='container'>
            <div className="cards">
            <div className="card">
                <div className="header">
                    <h2> Our Professionals </h2>
                </div>
                <div className="img">
                    <img src={doctor} alt="Doctor" />
                </div>
                <div className="content">
                    <h3><span>180+</span> Doctors</h3>
                    <p>Rapidly reinvent long-term impact collaboration.</p>
                </div>
            </div>
            <div className="card">
                <div className="header flex">
                    <h2> Appointments</h2>
                </div>
                <div className="img">
                    <img src={phone} alt="Phone" />
                </div>
                <div className="content">
                    <h2>+123 (4567) 890</h2>
                    <p>Call us for booking appointments online, available 24/7.</p>
                </div>
            </div>
            <div className="card">
                <div className="header">
                    <h2>Locations</h2>
                </div>
                <div className="img">
                    <img src={location} alt="Location" />
                </div>
                <div className="content">
                    <p>Rapidly reinvent long-term impact collaboration.</p>
                </div>
            </div>
            </div>
        </div>
        </div>
    );
}

export default About;
