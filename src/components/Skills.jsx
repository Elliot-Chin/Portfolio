import SkillCard from "./SubComponents/SkillCard"
import MySkills from "../../public/data/MySkills"
import SectionTitle from "./SubComponents/SectionTitle"
import SectionDivider from "./SubComponents/SectionDivider"

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
        <SectionDivider
            color={'white'}
        />
    )

    // Return --------------------------------------------------------------------
    return (
        <section
            id='Skills'

            className='
            sections
            relative
            h-fit
            min-h-screen
            bg-blue-600
            pb-20
            pt-5
            '
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