import ContactForm from "./ContactForm";
import Links from "./Links";
import SectionTitle from "./SubComponents/SectionTitle";




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
                gap-y-10
                pb-10
                bg-gradient-to-b
                from-pink-300
                to-red-900
                -mt-[22rem]

                md:mt-0

                lg:flex-row
                '>

            <SectionTitle
                title={'Contact'}
            />

            <Links
            />

            <ContactForm
            />

        </section>
    )

}