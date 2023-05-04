import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";

const data = [
  {
    id: 1,
    link: 'https://github.com/BaldezPatrick',
    icon: <FontAwesomeIcon icon={faGithub} />,
  },
  {
    id: 2,
    link: 'https://www.linkedin.com/in/patrick-baldez-298064213',
    icon: <FontAwesomeIcon icon={faLinkedin} />,
  },
]

export default data;