import SkillCard from "./SubComponents/SkillCard"
import MySkills from "../../public/data/MySkills"
import SectionTitle from "./SubComponents/SectionTitle"
import SectionDivider from "./SubComponents/SectionDivider"

export default function Skills({dark}) {

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
            color={dark? `rgb(55 65 81)` :'white'}
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
            bg-[#3399ff]
            pb-20
            pt-5

            dark:bg-blue-800
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