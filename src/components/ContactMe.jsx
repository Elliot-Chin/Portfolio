import SectionTitle from "./SubComponents/SectionTitle";
import UnderConstruction from "./SubComponents/UnderConstruction";




export default function ContactMe() {
    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------
    return (
        <section
            className='
                isolate
                h-fit
                relative
                flex-wrap
                flex
                flex-col
                pb-10
                bg-gradient-to-b
                from-pink-300
                to-red-900
                -mt-[22rem]

                md:mt-0
                '>

            <SectionTitle
                title={'Contact Me'}
            />

            <UnderConstruction
            />

        </section>
    )

}