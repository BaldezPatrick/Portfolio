import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

export const links = [
    {id: 1, link: '#', title: 'Home'},
    {id: 2, link: '#about', title: 'About'},
    {id: 3, link: '#skills', title: 'Skills'},
    {id: 4, link: '#portfolio', title: 'Portfolio'},
    {id: 5, link: '#contact', title: 'Contact'},
]

export const socials = [
    {id: 1, link: 'https://github.com', icon: <FontAwesomeIcon icon={faGithub}/>},
    {id: 2, link: 'https://linkedin.com', icon: <FontAwesomeIcon icon={faLinkedin}/>}
]