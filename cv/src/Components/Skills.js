import React from "react";
import { Progress } from 'reactstrap';
import '../Components/skillsstyle.css'

export const Skills = ({ data }) => {
    return (
        <div id='Skills' className='skills__block'>
            <div >
                <h4 className="name__link">{data.title}</h4>
                <div className="text-center">GIT</div>
                <Progress value="25" />
                <div className="text-center">jAVASCRIPT</div>
                <Progress value="35" />
                <div className="text-center">CSS</div>
                <Progress value={50} />
                <div className="text-center">HTML</div>
                <Progress value={75} />
                <div className="text-center">FIGMA</div>
                <Progress value="100" />
                <div className="text-center">Multiple bars</div>
                <Progress multi>
                    <Progress bar value="15" />
                    <Progress bar color="success" value="30" />
                    <Progress bar color="info" value="25" />
                    <Progress bar color="warning" value="20" />
                    <Progress bar color="danger" value="5" />
                </Progress>
            </div>
        </div>
    );
};
