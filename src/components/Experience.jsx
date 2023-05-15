
import { VerticalTimeline } from "react-vertical-timeline-component"
import SectionTitle from "./SubComponents/SectionTitle"
import VTElement from "./SubComponents/VTElement"
import Experiences from "../../public/data/MyExperiences"


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
        <div
            className={`
        absolute
        h-24
        -bottom-1
        w-full

        before:absolute
        before:pointer-events-none
        before:h-full
        before:w-full
        before:bg-no-repeat
        before:bg-green-skew-divider
        transform
        rotate-180
        `
            }
        />
    )
    // Return --------------------------------------------------------------------

    return (
        <section
            className={`
            relative
            h-fit
            -mt-10
            min-h-screen
            bg-white
            pb-28
            `
            }
        >

            {TITLE}

            <div
                className="
                mt-10

                md:mb-15

                lg:mb-36

                lg:mt-15
            "
            >
                <VerticalTimeline
                    lineColor="rgb(31,41,55)"
                    animate={false}
                >

                    {
                        Experiences.map(({ duration, imgSrc, imgAlt, position, location, desc, buttons, buttonFuncs, skills }, i) => (
                            <VTElement
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
                </VerticalTimeline>
            </div>

            {BTM_DIVIDER}

        </section>
    )
}