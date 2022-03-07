import React from "react";
import './specialHeading.css';
import Container from "../container/Container";
const SpecialHeading = ({title, body})=>(
    <>
        <Container>
            <h2 className="specail-heading">{title}</h2>
            <p>{body}</p>
        </Container>
    </>
)

export default SpecialHeading;