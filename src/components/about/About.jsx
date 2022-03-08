import react from "react";
import Container from "../container/Container";
import SpecialHeading from "../special-heading/SpecialHeading";
import './about.css'

const About = () =>(
    <div className="about" id="about">
        <SpecialHeading title="ABOUT" body="Less Is More Work"/>
        <Container>
            <div className="about-img">
                <img src="./leon-agency/images/black-mountain.jpg"/>
            </div>
            <div className="about-info">
                <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Veritatis voluptatibus dolorem aperiam alias, rerum quam, tempora eligendi unde vero architecto doloremque! Qui nam amet quod consectetur sint ut necessitatibus laboriosam?</p>
                <hr />
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Nisi fuga quas asperiores, deserunt necessitatibus culpa quaerat ea minus amet, quibusdam molestiae modi molestias aspernatur dolor sunt earum at sequi quo.</p>
            </div>
            
        </Container>
    </div>
)

export default About;