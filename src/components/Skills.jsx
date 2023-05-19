import SkillCard from "./SubComponents/SkillCard"
import MySkills from "../../public/data/MySkills"
import SectionTitle from "./SubComponents/SectionTitle"

export default function Skills() {

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------
    const TITLE = (
        <SectionTitle
            title={"Skills"}
        />
    )

    const BTM_DIVIDER = (
        <div
            className={`
            absolute
            h-24
            bottom-0
            w-full

            before:absolute
            before:pointer-events-none
            before:h-full
            before:w-full
            before:bg-no-repeat
            before:bg-white-arrow-divider
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
            min-h-screen
            bg-gradient-to-b
            from-blue-950
            to-blue-600
            pb-20
            pt-5
            `
            }
        >
            {TITLE}

            <div
                className='
                mb-24
            '
            >
                {
                    MySkills.map(({ key, IconModel, title, skills }) => {
                        return (
                            <SkillCard
                                key={key}
                                IconModel={IconModel}
                                title={title}
                                skills={skills}
                            />
                        )
                    })
                }
            </div>

            {BTM_DIVIDER}

        </section>
    )
}