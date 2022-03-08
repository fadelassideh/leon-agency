import React, {useRef, useEffect, useContext} from 'react'
import './header.css'
import Container from '../container/Container'
import { DarkModeContext } from '../../helper/DarkModeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoon, faSun } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
    const {mode, setMode} = useContext(DarkModeContext);

    const toggleMode = () =>{
        if(mode === "dark")
            setMode("light")
        else{
            setMode("dark")
        }
    }

    useEffect(()=>{
        if (mode === "dark"){
            var head = document.getElementsByTagName('head')[0];
            var styleTag = document.createElement("style")
            var styles = document.createTextNode(":root{--main-color: orange;--secondary-color: grey;--section-bg-color: #262525; --special-heading-color:#2b2b2b;--paragraph-color: #db500d;} body, .card{background-color:#1a1a1a;} h3{ color: white;} footer{background-color:transparent;}")
            styleTag.appendChild(styles);
            head.appendChild(styleTag);
        }
        if(mode === "light"){
            var styles = document.getElementsByTagName("style");
            console.log(styles[styles.length-1]);
            styles[styles.length-1].remove();
        }
    },[mode])

    const toggleNavMenu = () => {  
        var element = document.getElementById('nav-menu')
        if(element.style.display === "none")
            element.style.display = "block"
        else
        element.style.display = "none"
    }

    const navRef = useRef(null)

    useEffect(()=>{
        function handleClickOutside(event) {
            var element = document.getElementById('nav-menu')
            if (navRef.current && !navRef.current.contains(event.target)) {
                if(element.style.display === "block")
                    element.style.display = "none"
            }
        }
        document.addEventListener("click", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("click", handleClickOutside);
        };
    },[navRef])

    return (
      <div className='header'>
        <Container>
            <img className={`logo${mode === "dark" ? " hide":""}`} src='./leon-agency/images/logo.png' alt='LOGO'/>
            <img className={`logo${mode === "light" ? " hide":""}`} src='./leon-agency/images/logo-dark.png' alt='LOGO'/>
            <button onClick={()=> toggleMode()}> <FontAwesomeIcon icon= { mode === "dark" ? faSun: faMoon} /></button>
            <div className='links'>
                <span ref={navRef} className='nav-icon' onClick={toggleNavMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <ul id='nav-menu'>
                   <li> <a href='#services'> Services</a></li> 
                   <li> <a href='#portfolio'> Portfolio </a></li>
                   <li> <a href='#about'> About Us </a></li> 
                   <li> <a href='#contact'> Contact Us </a></li>  
                </ul>
            </div>
            
        </Container>
      </div>
    
  )
}
