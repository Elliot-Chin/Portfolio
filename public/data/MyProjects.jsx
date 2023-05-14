import { BsGithub, BsYoutube, BsNewspaper } from 'react-icons/bs'


const MyProjects = {

    STS: {
        title: 'Student Tracking System',
        desc: `During my 'Software Quality and Project Management' course at UNB, I participated in a project that aimed to help school advisors handle student and course information more efficiently. The project involved processing tab-separated text files into useful analytics and displaying the information on a dashboard, which was distributed to the class and professor for user testing.

        To ensure effective development, we utilized the agile scrum methodology, conducting standups before class to report progress and offer insight into the team's progression. Pair programming was also implemented when coding features.

        The end result was a comprehensive solution with a robust backend, a full CI/CD pipeline, and a live hosted application with complete test coverage. This dashboard provided advisors with valuable information to assist them in their advising responsibilities.

        Subsequently, I was hired as a software developer by the same professor to develop a similar tool on a department-wide level rather than just for the professor alone.`,
        buttons: [
            {
                bn: "Github",
                icon: <BsGithub color='white' size={'calc(90% - 20px)'} />,
                func: () => { window.open('https://github.com/Elliot-Chin/StudentTrackingSystem-1') },
            },
        ]
    },

    AM: {
        title: 'Automated Musicians',
        desc: `The project was completed as a part of my senior year engineering capstone design project, along with <a href='https://www.linkedin.com/in/edward-chang-2134791a4/' target='_blank'>Edward Chang</a>, <a href='https://www.linkedin.com/in/owen-lee-b3b3a2197/' target='_blank'>Owen Lee</a> and <a href='https://www.linkedin.com/in/thomas-campbell-a6a245184/' target='_blank'>Thomas Campbell</a>.
        
        It was mainly done in Python. It aimed to explore automated music generation using programmed music theory, pattern recognition, and extraction. The project was divided into three sections: Musical Algorithms, Pattern Recognition and Extraction, and Music Composition Generator.

        In the first section, we conducted our own research. We studied the code models reflecting music theory's naturally occurring algorithmic nature. We used these models as a baseline for analyzing existing music and creating new music.

        In the second section, we decided to use sheet music instead of sound files, as our system dealt primarily with music theory.  We fed the system hundreds of compositions in the '.ABC' format to be parsed for repeating patterns.

        Finally, we combined the extracted patterns into a song using our musical algorithm models to mimic the composition construction process.

        During the generation of music, we faced the challenge of deciding which patterns to use. To address this, we created a rule set to determine which designs would fit best into the current generation  based on key parameters that have been stored in the database.
        
        We also introduced some randomness in the decision-making process to avoid repeating patterns. You can also find a short interview on our project on <a href='https://www.cbc.ca/news/canada/new-brunswick/unb-engineering-design-symposium-1.6411721' target='_blank'>CBC News</a>.`,

        buttons: [
            {
                bn: "Github",
                icon: <BsGithub color='white' size={'calc(80% - 20px)'} />,
                func: () => { window.open('https://github.com/edwardchang7/engg4000') },
            },
            {
                bn: "Youtube",
                icon: <BsYoutube color='white' size={'calc(80% - 20px)'} />,
                func: () => { window.open('https://youtu.be/sYTcTymlJhc') },
            },
            {
                bn: "CBC News",
                icon: <BsNewspaper color='white' size={'calc(80% - 20px)'} />,
                func: () => { window.open('https://www.cbc.ca/news/canada/new-brunswick/unb-engineering-design-symposium-1.6411721') }
                ,
            },
        ]
    }
}

export default MyProjects