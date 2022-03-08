import React from "react";
import Container from "../container/Container";
import SpecialHeading from "../special-heading/SpecialHeading";
import './portfolio.css'

const Card = ({imgSrc, title, body})=>(
    <div className="card">
        <img src={imgSrc}/>
        <div className="card-info">
            <h3>{title}</h3>
            <p>{body}</p>
        </div>
    </div>
) 

const Portfolio = ()=>(
    <div className="portfolio" id="portfolio">
        <SpecialHeading title="PORTFOLIO" body="If You Do It Right, It Will Last Forever"/>
        <Container>
            <Card imgSrc="./leon-agency/images/gd-logo.jpg" title="The Grill Logo" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantiumamet consectetur" />
            <Card imgSrc="./leon-agency/images/web-developer.jpg" title="Conquer Website" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantium"/>
            <Card imgSrc="./leon-agency/images/dashboard.png" title="BI Dashboard" body="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Expedita tenetur laudantium"/>
        </Container>
    </div>

)

export default Portfolio; 
