import React from "react";
import Avatarka from '../img/avatar.png'
import '../Components/aboutme.css'

export const AboutMe = ({ title, info }) => {
    return (
        <div id='About me' className='Adress'>
            <section className="name__Info">
                <h1 className="name">{title.name}</h1>
                <h3 className="Info">
                    {info.info}
                </h3>
            </section>
            <section className='avatarka'>
                <img className='img-avatarka' alt='avatarka' src={Avatarka} />
            </section>
        </div>
    )
}