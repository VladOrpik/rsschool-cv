import React from "react";
import '../Components/footerstyle.css'

export const Footer = () => {
    return (
        <footer>
            <ul className='footer__list'>
                <li className="footer__li"><a className="footer__link" href="">
                </a></li>
                <li className="footer__li"><a className="footer__link" href="wladeua678@gmail.com">Email</a></li>
                <li className="footer__li"><a className="footer__link" href="https://github.com/VladOrpik">Github</a></li>
                <li className="footer__li">
                    <p>👋</p>
                </li>
            </ul>
            <a href='https://rs.school/js/'><img className='qwerty' src='https://rs.school/images/rs_school_js.svg' /></a>
        </footer>
    )
}