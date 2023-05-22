import {FaGithubAlt, FaInfoCircle, FaLinkedin, FaMailBulk} from 'react-icons/fa'

const MyLinks = [
    {
        icon: <FaInfoCircle />,
        display: 'Resume',
        onClick: () => { window.open('/WTR/EC_Resume.pdf') }
    },
    {
        icon: <FaGithubAlt />,
        display: 'Github',
        onClick: () => { window.open('https://github.com/Elliot-Chin') }
    },
    {
        icon: <FaLinkedin />,
        display: 'LinkedIn',
        onClick: () => { window.open('https://www.linkedin.com/in/elliot-chin-90b4311a6/') }
    },
    {
        icon: <FaMailBulk />,
        display: 'Mail',
        onClick: () => { window.open('mailto:me.ecys.9@gmail.com?subject=Portfolio Form Submission"') }
    }
]


export default MyLinks