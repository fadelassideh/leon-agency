import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faGlobe, faBrush } from "@fortawesome/free-solid-svg-icons";
import { faFigma } from "@fortawesome/free-brands-svg-icons";
import React from "react";
import Container from "../container/Container";
import SpecialHeading from "../special-heading/SpecialHeading";
import './services.css';

const Service = ({icon, title, body})=>(
    <div className="service">
        <div>
            <FontAwesomeIcon icon={icon} className="service-icon"/>
        </div>
        <div>
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </div>
)

const Services = ()=>(
    <div className="services" id="services">
        <SpecialHeading title="Services" body= "Don't Be Busy, Be Productive"/>
        <Container>
            <div className="col">
                <Service icon={faEye} title="Graphic Design" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantium."/>
                <Service icon={faBrush} title="Web Design" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantium amet consectetur adipisicing elit."/>
            </div>
        
            <div className="col">    
                <Service icon={faFigma} title="UI & UX" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantiumamet consectetur."/>
                <Service icon={faGlobe} title="Web Development" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantiumamet consectetur."/>
            </div>
            
            <div className="col img">
               <img src="./images/mountain2.jpg"/>
            </div>
        </Container>
        
    </div>
)

export default Services;