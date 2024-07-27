import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';



const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://linkedin.com" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com" target="_blank"><BsGithub /></a>
            <a href="https://twitter.com" target="_blank"><FaTwitter /></a>
        </div>
    )

}

export default HeaderSocials;
