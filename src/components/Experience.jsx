
import SectionTitle from "./SubComponents/SectionTitle"
import Experiences from "../../public/data/MyExperiences"
import ExperienceCard from './ExperienceCard'
import SectionDivider from "./SubComponents/SectionDivider"


export default function Experience() {

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------
    const TITLE = (
        <SectionTitle
            title={"Experience"}
            styles={{
                top: '20px',
                color: 'rgb(31,41,55)',
            }}
        />
    )

    const BTM_DIVIDER = (
        <SectionDivider
            color={'rgb(20,83,45)'}
        />
    )
    // Return --------------------------------------------------------------------

    return (
        <section

            id='Experience'

            className='
            sections
            relative
            h-fit
            -mt-10
            min-h-screen
            bg-white
            pb-28
            '
        >

            {TITLE}

            <div
                className="
                flex
                flex-col
                flex-wrap
                h-fit
                my-10
                gap-10
                p-10
                justify-center
                items-center

                md:flex-row

                lg:mt-15
            "
            >

                {
                    Experiences.map(({ duration, imgSrc, imgAlt, position, location, desc, buttons, buttonFuncs, skills }, i) => (
                        <ExperienceCard
                            duration={duration}
                            imgSrc={imgSrc}
                            imgAlt={imgAlt}
                            position={position}
                            location={location}
                            desc={desc}
                            buttons={buttons}
                            buttonFuncs={buttonFuncs}
                            skills={skills}
                            key={i}
                        />
                    ))
                }

            </div>

            {BTM_DIVIDER}

        </section>
    )
}