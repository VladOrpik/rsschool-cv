import React from "react";
import '../Components/EducationStyle.css';

export const Education = ({ qwe, data }) => {
    return (
        <main id='Education'>
            <article className="Education">
                <h4 className="name__link">{data.title}</h4>
                <p className='educatoin__info'>{qwe.title}</p>
            </article>
        </main>
    )
}