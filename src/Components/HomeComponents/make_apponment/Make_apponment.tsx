import { ArrowElbowRight } from '@phosphor-icons/react'
import img from "../../../assets/Home_imgs/Make_apponment/app.png"
import "./apponment.css"
const Make_apponment = () => {
  return (
    <div className='appinment'>
        <div className="conatainer">
            <div className="flex">
                <div className="img">
                    <img src={img} alt="appointment"/>
                </div>
                <div className="data">
                    <div className="header">
                        <span>ONLINE APPOINMENT</span>
                        <h2>Make an online appointment booking for treatment patients</h2>
                    </div>
                    <div className="form">
                        <form>
                            <div className="input">
                            <input type="text" placeholder="Your Name" />
                            <input type="text" placeholder="Your E-mail" />
                            </div>
                           <div className="input">
                           <input type="text" placeholder="Supject" />
                           <input type="text" placeholder="Phone Number" />
                           </div>
                           <div className="input">
                            <textarea placeholder="Your Message" rows={4} defaultValue={""} />
                            </div>
                            <button type="submit">
                                Send Now <ArrowElbowRight size={20} />
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Make_apponment
