import React from "react";
import { BsLinkedin } from 'react-icons/bs';
import { BsGithub } from 'react-icons/bs';
import { FaTwitter } from 'react-icons/fa';



const HeaderSocials = () => {
    return (
        <div className="header_socials">
            <a href="https://www.linkedin.com/in/omar-mohammed-a2590122b/" target="_blank"><BsLinkedin /></a>
            <a href="https://github.com/Om2rMs" target="_blank"><BsGithub /></a>
            <a href="https://x.com/om2r_mh" target="_blank"><FaTwitter /></a>
        </div>
    )

}

export default HeaderSocials;

