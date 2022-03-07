import React, {useRef, useEffect} from 'react'
import './header.css'
import Container from '../container/Container'

export default function Header() {
    
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
            <img className='logo' src='./images/logo.png'  alt='LOGO'/>
            <div className='links'>
                <span ref={navRef} className='nav-icon' onClick={toggleNavMenu}>
                    <span></span>
                    <span></span>
                    <span></span>
                </span>
                <ul id='nav-menu'>
                   <li> <a href='#services'> Services </a></li> 
                   <li> <a href='#portfolio'> Portfolio </a></li>
                   <li> <a href='#about'> About Us </a></li> 
                   <li> <a href='#contact'> Contact Us </a></li>  
                </ul>
            </div>
        </Container>
      </div>
    
  )
}
