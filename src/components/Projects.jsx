import SectionTitle from "./SubComponents/SectionTitle"
import MyProjects from "../../public/data/MyProjects"


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


            <div
                /* Project 1 */
                className='
            h-fit
            flex
            flex-col
            items-center
            '
            >

                <div
                    /* image title wrapper */
                    className='
                relative
                w-full
                flex
                flex-col
                items-center
                mt-10
                '
                >
                    <div
                        /* Image */
                        className={`
                        bg-[url(/images/STS.png)]
                        bg-no-repeat
                        bg-cover
                        w-80
                        h-24
                        rounded-lg
                        glass-effect

                        md:h-52
                        md:w-[50rem]

                        lg:h-52
                        lg:w-[50rem]
                        `}
                    />

                    {setTitle({ project: STS_Project })}
                </div>


                <div
                    /* button wrapper */
                    className='
                    w-full
                    flex
                    justify-around
                    mb-10
                '>
                    {
                        mapButtons({ project: STS_Project })
                    }
                </div>


                {
                    fillDesc({ project: STS_Project })
                }

            </div>

            {TOP_TRI}

            <div
                /* Project 2 */
                className='
            relative
            h-fit
            w-full
            z-[1]
            bg-[#008000]
            -top-[310px]
            flex
            flex-col
            items-center

            md:-top-[170px]

            lg:-top-0
            '
            >

                <div
                    /* image title wrapper */
                    className='
                relative
                w-full
                flex
                flex-col
                items-center
                mt-10
                '
                >
                    <div
                        /* Image */
                        className='
                        w-full
                        h-fit
                        flex
                        flex-col
                        items-center

                        md:w-2/3

                        lg:w-8/12
                    '
                    >
                        <img src='/images/SDP.jpg'
                            className='
                            rounded-40
                            w-11/12
                            '
                        />

                    </div>

                    {setTitle({ project: AM_Project })}

                </div>

                <div
                    /* button wrapper */
                    className='
                    w-11/12
                    flex
                    justify-evenly
                    mb-10
                '>
                    {
                        mapButtons({ project: AM_Project })
                    }
                </div>

                {
                    fillDesc({ project: AM_Project })
                }

            </div>

            {BTM_TRI}

            <div
                /* Project 3 */
                className='
                relative
            border
            h-96
            -top-[620px]
            border-blue-600

            md:-top-[340px]

            lg:-top-0
            '
            >

            </div>

        </section>
    )
}