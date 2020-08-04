import React, {useState} from "react";
import logo from './../../../assets/logo.svg'
import './NavBar.scss'
import SideBar from "../../SideBar/SideBar";
import {useMediaQuery} from "react-responsive/src";


const NavBar = (props) => {
    const [isMenuActive,setActive]=useState(false)
    function toggleMenu(){
        setActive(!isMenuActive)
    }

    const isDesktop=useMediaQuery({query:'(min-width:1024px)'})
    const isTabletOrMobile=useMediaQuery({query:"(max-width:1024px)"})

    return (
        <nav className='header__body'>
            {isMenuActive?<SideBar/>:null}
            <div className='logo'>
                <div className='img'><img src={logo} alt="Logo"/></div>
            </div>
            {isTabletOrMobile&&<div className="burger__menu" onClick={toggleMenu}>
                <span></span>
            </div>}
            {isDesktop&&<div className='header__menu'>
                <ul>
                    <li>
                        <div className='menu__item'><a className='link' href="#about">About me</a></div>
                    </li>
                    <li>
                        <div className='menu__item'><a className='link' href="#relationship">Relationships</a></div>
                    </li>
                    <li>
                        <div className='menu__item'><a className='link' href="#reqiirements">Requirements</a></div>
                    </li>
                    <li>
                        <div className='menu__item'><a className='link' href="#users">Users</a></div>
                    </li>
                    <li>
                        <div className='menu__item'><a className='link' href="#signup">Sign Up</a></div>
                    </li>
                </ul>
            </div>}
        </nav>
    )
}
export default NavBar