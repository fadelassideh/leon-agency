import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";
import Container from "../container/Container";
import SpecialHeading from "../special-heading/SpecialHeading";
import './contactUs.css'

const ContactUs = () => (
    <div className="contact" id="contact">
        <SpecialHeading title="Contact" body="We Born To Create" />
        <Container>
            <div className="contact-content">
                <p className="label">Feel Free To Drop Us A Line At:</p>
                <a href="mailto:leonagency@mail.com?subject=contact" className="link"> LeonAgency@mail.com </a>
                <div className="social">
                    Find Us On Social Networks
                    <FontAwesomeIcon icon={faYoutube} className="social-icon"/>
                    <FontAwesomeIcon icon={faFacebook} className="social-icon" />
                    <FontAwesomeIcon icon={faInstagram} className="social-icon" />
                </div>
            </div>
        </Container>
    </div>
)

export default ContactUs