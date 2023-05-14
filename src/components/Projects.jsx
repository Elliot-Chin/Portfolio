import SectionTitle from "./SubComponents/SectionTitle"
import MyProjects from "../../public/data/MyProjects"
import UnderConstruction from "./SubComponents/UnderConstruction"

export default function Projects() {

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    const outer_div_color = "#008000"
    const inner_div_color = "#00cc00"

    const STS_Project = MyProjects.STS
    const AM_Project = MyProjects.AM

    // Util funcs ----------------------------------------------------------------

    const mapButtons = ({ project }) => (

        project.buttons.map(({ bn, icon, func }, index) => (
            <div
                className='
                flex
                flex-col
                items-center
                font-bold
                p-3
                glass-effect
                rounded-40

                transition
                duration-700
                w-24

                lg:w-36

                hover:cursor-pointer
                hover:bg-green-400
                hover:transform
                hover:-translate-y-1
            '
                key={index}
                onClick={func}
            >
                {icon}
                <span
                    className='
                    text-white
                    text-lg
                    px-2
                    mt-2
                    w-24
                    text-center

                    md:text-lg
                    '
                >
                    {bn}
                </span>

            </div>
        ))

    )

    const fillDesc = ({ project }) => (
        <pre
            /* description */
            dangerouslySetInnerHTML={{ __html: project.desc }}
            className='
                        px-10
                        whitespace-pre-line
                        text-white
                        mt-5
                        font-hindMadurai
                        leading-7
                        mb-10
                        text-lg

                        md:text-xl
                        md:w-5/6

                        lg:text-2xl
                        lg:w-3/4
                    '
        />
    )

    const setTitle = ({ project }) => (
        <h1
            /* title */
            className='
            font-montserrat
            my-10
            text-2xl
            w-full
            text-center
            shadowed-text
            text-white

            md:text-4xl

            lg:text-6xl
            '
        >
            {project.title}
        </h1>
    )

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------

    const TOP_TRI = (
        <svg
            className='
                relative
                -left-[20%]
                transform
                rotate-[15deg]
                -top-[180px]
                w-[140%]

                md:-top-[150px]
                md:rotate-0
                md:left-0

                lg:w-screen
                lg:top-5
                '

            width="100%"
            height="400"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill={outer_div_color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M 100 100 V 10 L 0 100" />
            <path d="M 30 73 L 100 18 V 10 Z"
                fill={inner_div_color}
                strokeWidth="0" />
        </svg>
    )

    const BTM_TRI = (
        <svg

            className='
                relative
                -left-[20%]
                transform
                scale-y-[-1]
                w-[140%]
                -top-[440px]
                -rotate-[15deg]

                md:rotate-0
                md:left-0
                md:-top-[190px]

                lg:w-screen
                lg:-top-5
                '


            width="100%"
            height="400"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill={outer_div_color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M 100 100 V 10 L 0 100" />
            <path d="M 30 73 L 100 18 V 10 Z"
                fill={inner_div_color}
                strokeWidth="0" />
        </svg>
    )

    // Return --------------------------------------------------------------------
    return (
        <section
            className='
                h-fit
                relative
                flex
                gap-5
                flex-col
                bg-green-950
                overflow-x-hidden
                '>


            <SectionTitle
                title={"Projects"}
            />

            <UnderConstruction
            />



        </section>
    )
}