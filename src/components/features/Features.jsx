import React from "react";
import './features.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBriefcase, faEarthEurope} from '@fortawesome/free-solid-svg-icons';
import { faLightbulb } from '@fortawesome/free-regular-svg-icons';
import Container from "../container/Container";
const Features = () => (
    <div className="features">
        <Container >
            <div className="feature">
                <FontAwesomeIcon icon={ faLightbulb } className= "icon" />
                <h3>Tell Us Your Ideas</h3>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantium.</p>
            </div>

            <div className="feature">
                <FontAwesomeIcon icon={ faBriefcase } className= "icon" />
                <h3>We Will Do All The Work</h3>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius nulla optio perferendis impedit.</p>
            </div>

            <div className="feature last">
                <FontAwesomeIcon icon={ faEarthEurope } className= "icon" />
                <h3>Your product Is Worldwide</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit sapiente!</p>
            </div>
        </Container>
    </div>
);

export default Features