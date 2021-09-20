import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import '../Components/experiencestyle.css'
export const Experience = ({ data }) => {
    return (
        <div id='Experience' className='experience'>
            <Jumbotron fluid>
                <Container fluid>
                    <h4 className="display-3">{data.title}</h4>
                    <p className="lead">
                        In the summer, I did an internship at the Senla IT company, specializing in front-end developer. It lasted 3 weeks</p>
                </Container>
            </Jumbotron>
        </div >
    )
}