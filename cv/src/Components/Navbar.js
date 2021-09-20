import React from "react";
import '../Components/navbar-style.css'

export const Navbar = ({ data }) => {

    const ListenItem = data.map(item => <li className="left-item"><a href={`#${item.title}`}>{item.title}</a></li>);
    return (
        <header>
            <nav>
                {ListenItem}
                <div id="indicator"></div>
            </nav>
        </header>
    )
}

