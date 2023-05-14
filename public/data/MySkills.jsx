import CMDBase from "@/components/models/LanguagesBase"
import WrenchBase from "@/components/models/WrenchBase"
import SpeechBase from "@/components/models/SpeechBase"
import BriefcaseBase from "@/components/models/BriefcaseBase"
import APIBase from "@/components/models/APIBase"
import TechnicalBase from "@/components/models/TechnicalBase"

const MySkills = [
    {
        key: 1,
        title: 'Technical',
        IconModel: <TechnicalBase />,
        skills: ['React', 'Django', 'Flask', 'Antd Design', 'Bootstrap', 'PyMongo', 'System Design', 'Machine Learning', 'SQLite', 'SQAlchemy', 'Pandas', 'Openpyxl', 'Numpy', 'Matplotlib']
    },
    {
        key: 2,
        title: 'Languages',
        IconModel: <CMDBase />,

        skills: ['Python', 'Java', 'JavaScript', 'CSS (3)', 'HTML (5)', 'TailwindCSS', '  C  ', 'NoSQL', 'SQL', 'Racket', 'MatLab']
    },
    {
        key: 3,
        title: 'API',
        IconModel: <APIBase />,
        skills: ['MongoDB', 'CircleCI', 'TuyaIoT', 'Discord']
    },
    {
        key: 4,
        title: 'Tools',
        IconModel: <WrenchBase />,
        skills: ['VS Code', 'VS Codium', 'Eclipse', 'GCC', 'Postman', 'GIMP', 'Discord', 'Ubuntu', 'Linux', 'Mac', 'Windows', 'Microsoft Office Tools']
    },
    {
        key: 5,
        title: 'Management',
        IconModel: <BriefcaseBase />,
        skills: ['GitHub', 'Agile', 'Trello', 'Google Drive']
    },
    {
        key: 6,
        title: 'Spoken',
        IconModel: <SpeechBase />,
        skills: ['English', 'Mandarin', 'Malay', 'Cantonese']
    }
]

export default MySkills