import SectionTitle from "./SubComponents/SectionTitle"
import MyProjects from "../../public/data/MyProjects"
import Image from "next/image"
import Lottie from "lottie-react"
import animationData from '../../public/animations/musicnotes.json'
import barGraph from '../../public/animations/bargraph.json'
import SectionDivider from "./SubComponents/SectionDivider"

export default function Projects() {

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    const outer_div_color = "#008000"
    const inner_div_color = "#00cc00"

    const STS_Project = MyProjects.STS
    const AM_Project = MyProjects.AM
    const WB_Project = MyProjects.WB

    // Util funcs ----------------------------------------------------------------

    const mapButtons = ({ project, colorClass }) => (

        <div
            className='
        flex
        w-full
        justify-evenly

        md:w-2/3
        '

        >
            {
                project.buttons.map(({ bn, icon, func }, index) => (
                    <div
                        className={`
                        flex
                        flex-col
                        items-center
                        font-bold
                        p-3
                        glass-effect
                        ${colorClass}
                        rounded-40

                        transition
                        duration-700
                        w-24

                        lg:w-36

                        hover:cursor-pointer
                        hover:bg-green-400
                        hover:transform
                        hover:-translate-y-1
                        `}
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
            }
        </div>
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

    const setTitle = ({ project, colorClass }) => (
        <h1
            /* title */
            className={`
            font-montserrat
            my-10
            text-2xl
            z-10
            w-full
            text-center
            shadowed-text
            ${colorClass}
            text-white

            md:text-4xl

            lg:text-6xl
            `}
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
        <svg
            className='
            -mt-[22rem]

            md:-mt-0
            '
            viewBox="0 0 1920 60"
            aria-hidden="true">
            <path data-theme="softSecondary"
                fill={'rgb(168,85,247)'}
                d="M0,80.75H1920V45.833H1742.083a80.491,80.491,0,0,1,12.863-1.55c5.2-.26,17.24-.3,24.153-.24,26.69.222,54.377,1.094,79.341.96,19.287-.1,37.1-.372,53.573-.788L1920,44V34.078l-6.614.216-9.221.256c-6.252.147-12.7.249-19.265.32-13.132.14-26.739.15-40.206.125-26.935-.052-53.313-.247-74.22.168-14.367-1.4-32.582-.756-48.293-1.92-10.145.509-20.876.936-24.149,2.4-16.09-.266-37.611,2.532-50.019.479V34.684c-10.959-2.291-33.371-1.869-48.292-3.84-15.861-.512-26.214,1.347-39.671,1.92-7.032.178-5.941-.773-13.8-.481-40.751-.071-41.131,5.477-62.087,8.16-4.569-5.691-47.085-5.126-77.622-5.04-2.333-4.154-22.643-5.808-50.015-6.479-4.677-2.069-17.763-2.969-22.423-5.04-4.7-.175-3.474.477-6.9.479-11.485-2.964-40.092-2.449-63.813-3.36-23.312.6-29.4,3.589-55.195,3.841-8.3-3.783-56.5-4.561-84.513-3.361-.316-1.857-5.682-3.862-20.7-4.8-2.193-.137-6.78.122-10.352,0-16.331-.564-22.974-3.145-39.671-1.441-22.812-1.938-73.831-3.919-98.311-.719-4.315-2.2-15.369-3.462-20.7-5.521-23.122-.714-41.26-2.815-65.54-2.64-13.5,1-29.918,1.6-39.671,3.12.27,1.317-1.305,2.38-6.9,2.88-35.562-1.333-83.117-2.545-93.139,2.88-14.338-.314-8.341,2.2-22.423,1.92-5.17-.16-2.615-1.4-6.9-1.68-36.327-1.894-80.653-1.762-100.041,2.161-12.433-1.631-21.648-3.708-36.221-5.04-13.359.1-36.33-.325-48.293-1.2-32.483.6-42.463,4.331-53.471,7.92-25.227-.147-43.752,2.274-58.641,4.321-11.966-1.189-27.56-.426-39.67-1.441-19.514,1.284-40.772,2.328-53.468,4.561C301.584,31.04,294,33.888,283.7,37.8c-15.047-.774-19.865-3.5-36.221-4.321-10.453-.522-37.12-1.01-48.3-.959-10.184.046-17.188,1.062-27.595.719-18.244,2.022-31.516,4.736-46.57,7.2-3.726,2.091-9.8,3.854-17.5,5.39H4.061c-.734-1.281-1.512-2.592-2.344-3.949-.546-.09-1.13-.175-1.717-.26Z"
            />
        </svg>
    )

    const PROJECT_1 = (
        <div
            /* Project 1 */
            className='
                    h-fit
                    flex
                    flex-col
                    items-center
                    mt-36
                    relative
                    '>

            <Lottie
                animationData={barGraph}
                className='
                -top-[6.5rem]
                absolute
                w-40

                md:w-56
                md:-top-40
            '
            />

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

                    <Image
                        src={STS_Project.imgSrc}
                        alt={STS_Project.imgAlt}
                        width={0}
                        height={0}
                        priority
                        unoptimized
                        className='
                                glass-effect
                                dark-green-shadow
                                rounded-40
                                w-11/12
                            '
                    />
                </div>

                {setTitle({ project: STS_Project, colorClass: 'dark-green-shadow' })}

            </div>


            {
                mapButtons({ project: STS_Project, colorClass: 'dark-green-shadow' })
            }


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
                        isolate
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
                    <Image
                        height={0}
                        width={0}
                        unoptimized
                        priority
                        src={AM_Project.imgSrc}
                        alt={AM_Project.imgAlt}
                        className='
                                glass-effect
                                green-shadow
                                rounded-40
                                w-11/12
                                '/>

                </div>

                {setTitle({ project: AM_Project, colorClass: 'green-shadow' })}

                <Lottie animationData={animationData}
                    className='
                    absolute
                    h-36
                    w-full
                    -top-28
                    -z-10

                    md:h-44
                    md:bottom-0

                    lg:h-96
                    lg:-top-48
            '
                />

            </div>

            {
                mapButtons({ project: AM_Project, colorClass: 'green-shadow' })
            }

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
                    <Image
                        width={500}
                        height={500}
                        unoptimized
                        priority
                        src={WB_Project.imgSrc}
                        alt={WB_Project.imgAlt}
                        className='
                                glass-effect
                                dark-green-shadow
                                rounded-40
                                '/>

                </div>

                {setTitle({ project: WB_Project, colorClass: 'dark-green-shadow' })}

            </div>

            {
                mapButtons({ project: WB_Project, colorClass: 'dark-green-shadow' })
            }

            {
                fillDesc({ project: WB_Project })
            }
        </div>
    )


    // Return --------------------------------------------------------------------
    return (
        <section

            id='Projects'

            className='
                sections
                isolate
                h-fit
                relative
                flex
                flex-col
                bg-green-900
                overflow-hidden
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