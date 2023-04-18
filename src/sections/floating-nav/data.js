import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHouse, faUser, faScrewdriverWrench, faBriefcase, faAddressCard } from "@fortawesome/free-solid-svg-icons";

const data = [
    {id: 1, link: '#', icon: <FontAwesomeIcon icon={faHouse} />},
    {id: 2, link: '#about', icon: <FontAwesomeIcon icon={faUser} />},
    {id: 3, link: '#skills', icon: <FontAwesomeIcon icon={faScrewdriverWrench} />},
    {id: 4, link: '#portfolio', icon: <FontAwesomeIcon icon={faBriefcase} />},
    {id: 5, link: '#contact', icon: <FontAwesomeIcon icon={faAddressCard} />}
];

export default data;