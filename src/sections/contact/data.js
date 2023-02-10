import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";

const data = [
    {
        id: 1, icon: <FontAwesomeIcon icon={faEnvelope} />, link: ''
    },
    {
        id: 2, icon: <FontAwesomeIcon icon={faLinkedin} />, link: 'https://linkedin.com'
    },
    {
        id: 3, icon: <FontAwesomeIcon icon={faGithub} />, link: 'https://github.com'
    }
]

export default data;