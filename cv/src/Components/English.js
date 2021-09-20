import React from "react";
import { Jumbotron, Container } from 'reactstrap';
import '../Components/experiencestyle.css'

export const English = ({ data }) => {
    return (
        <div id='English level' className='experience'>
            <Jumbotron fluid>
                <Container fluid>
                    <h4 className="display-3">{data.title}</h4>
                    <p className="lead">
                        At the moment my level of English is A2. Now I am studying and improving my level of English in the conversation studio "Yes"</p>
                </Container>
            </Jumbotron>
        </div >
    )
}