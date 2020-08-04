import React from "react";
import './SideBar.scss'



const SideBar=()=>{
    return(
        <div className="side-menu">

            <div className="menu_block">
                <ul>
                    <li>
                        <div className="menu__item"><a href="#" className="link">About me </a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Relationships </a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Users  </a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Sign Up </a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Terms and Conditions</a></div>
                    </li>
                </ul>
            </div>
            <div>
                <ul>
                    <li>
                        <div className="menu__item"><a href="#" className="link">How it works</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Partnership</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Help</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Leave testimonial</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Contact us</a></div>
                    </li>
                </ul>
            </div>
            <div className="menu_block">
                <ul>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Articles</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Our news</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Testimonials</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Licenses</a></div>
                    </li>
                    <li>
                        <div className="menu__item"><a href="#" className="link">Privacy Policy</a></div>
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default SideBar