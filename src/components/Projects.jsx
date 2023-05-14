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
    const WB_Project = MyProjects.WB

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
                -left-[100%]
                transform
                -top-[100px]
                w-[200%]

                md:-top-[170px]
                md:-left-[70%]

                lg:-left-[50%]
                lg:w-[150%]
                lg:top-10
                '

            width="100%"
            height="400"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
            fill={outer_div_color}
            xmlns="http://www.w3.org/2000/svg"
        >
            <path d="M 100 100 V 10 L 0 100"
            />
            <path d="M 30 73 L 100 18 V 10 Z"
                fill={inner_div_color}
                strokeWidth="0"
            />
        </svg>
    )

    const BTM_TRI = (
        <svg

            className='
                relative
                -left-[100%]
                transform
                scale-y-[-1]
                w-[200%]
                -top-[420px]

                md:-left-[70%]
                md:-top-[370px]

                lg:-left-[50%]
                lg:w-[150%]
                lg:-top-28
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
                strokeWidth="0"
            />
        </svg>
    )

    const BTM_DIVIDER = (
        <div
            className={`
            absolute
            h-24
            bottom-[22rem]
            w-full

            md:bottom-0

            before:absolute
            before:pointer-events-none
            before:h-full
            before:w-full
            before:bg-no-repeat
            before:bg-pink-diamond-divider
            transform
            rotate-180
            `
            }
        />
    )

    const PROJECT_1 = (
        <div
            /* Project 1 */
            className='
                    h-fit
                    flex
                    flex-col
                    items-center

                    mt-16
                    '>

            <div
                /* image title wrapper */
                className='
                        relative
                        w-full
                        flex
                        flex-col
                        items-center
                        mt-10
                        '>

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
                        '>

                    <img src={STS_Project.imgSrc}
                        className='
                                glass-effect
                                rounded-40
                                w-11/12
                            '
                    />
                </div>

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
    )

    const PROJECT_2 = (
        <div
            /* Project 2 */
            className='
                    relative
                    h-fit
                    w-full
                    z-[1]
                    bg-[#008000]
                    -top-[250px]
                    flex
                    flex-col
                    items-center

                    md:-top-[250px]

                    lg:-top-0
                    '>

            <div
                /* image title wrapper */
                className='
                        relative
                        w-full
                        flex
                        flex-col
                        items-center
                        mt-10
                        '>
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
                        '>
                    <img
                        src={AM_Project.imgSrc}
                        className='
                                glass-effect
                                rounded-40
                                w-11/12
                                '/>

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
    )

    const PROJECT_3 = (
        <div
            /* Project 3 */
            className='
                    relative
                    h-fit
                    -top-[450px]
                    flex
                    flex-col
                    items-center


                    md:-top-[400px]

                    lg:-top-[100px]
                    '>


            <div
                /* image title wrapper */
                className='
                        relative
                        w-full
                        flex
                        flex-col
                        items-center
                        mt-10
                        '>
                <div
                    /* Image */
                    className='
                        w-2/3
                        h-fit
                        flex
                        flex-col
                        items-center

                        md:w-2/3

                        lg:w-10/12
                        '>
                    <img
                        src={WB_Project.imgSrc}
                        className='
                                glass-effect
                                rounded-40
                                '/>

                </div>

                {setTitle({ project: WB_Project })}

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
                    mapButtons({ project: WB_Project })
                }
            </div>

            {
                fillDesc({ project: WB_Project })
            }
        </div>
    )


    // Return --------------------------------------------------------------------
    return (
        <section
            className='
                isolate
                h-fit
                relative
                flex
                flex-col
                bg-green-950
                overflow-x-hidden
                '>


            <SectionTitle
                title={"Projects"}
            />

            {PROJECT_1}

            {TOP_TRI}

            {PROJECT_2}

            {BTM_TRI}

            {PROJECT_3}

            {BTM_DIVIDER}

        </section>
    )
}