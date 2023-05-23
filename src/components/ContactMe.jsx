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

            id='Contact'

            className='
                sections
                isolate
                h-fit
                relative
                flex-wrap
                flex
                flex-col
                gap-y-10
                pb-10
                bg-gradient-to-b
                from-amber-500
                to-yellow-700

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