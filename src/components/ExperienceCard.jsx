import Image from "next/image"
import { AwesomeButton } from "react-awesome-button"


export default function ExperienceCard({ duration, position, location, skills, desc, buttons, buttonFuncs, imgSrc, imgAlt }) {

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------

    return (
        <>
            <div
                className='
                flip
                w-80
                min-w-[20rem]
                h-[37rem]

                md:h-[45rem]

                lg:w-96
                lg:h-[43rem]
            '
            >
                <div
                    className='
                   flip-content
                   w-full
                   h-full
                    '
                >

                    <div
                        /* Front Card */
                        className='
                        flip-front
                        absolute
                        h-full
                        w-full
                        flex
                        flex-col
                        rounded-40
                        p-5
                        bg-white
                        border-4
                        border-green-500
                    '
                    >

                        <Image
                            src={imgSrc}
                            alt={imgAlt}
                            height={0}
                            width={0}
                            unoptimized
                            priority

                            className='
                            w-2/3
                            mx-auto
                        '
                        />

                        <h1
                            className='
                            font-montserrat
                            text-3xl
                            text-center
                            pt-5

                            md:text-4xl
                        '
                        >{position}
                        </h1>

                        <h1
                            className='
                            font-lora
                            text-1xl
                            text-center
                            font-bold
                            pt-5

                            md:text-2xl
                        '
                        >{location}
                        </h1>


                        <h2
                            className='
                            text-center
                            pt-2
                            pb-5

                            lg:text-xl
                        '
                        >
                            {duration}
                        </h2>

                        <div
                            className='
                            flex
                            flex-wrap
                            justify-around
                        '
                        >
                            {
                                skills.map((s, i) => (
                                    <span
                                        key={i}
                                        className='
                                    glass-effect
                                    rounded-40
                                    px-2
                                    py-1
                                    m-2
                                    text-sm

                                    md:text-base

                                    lg:text-lg
                                    '
                                    >{s}</span>
                                ))
                            }
                        </div>

                        <span
                            className='
                                absolute
                                text-center
                                font-montserrat
                                bottom-10
                                w-full
                                left-1/2
                                transform
                                -translate-x-1/2
                                text-xl
                                animate-pulse
                            '
                        >
                            Hover to know more!
                        </span>
                    </div>



                    <div
                        /* Back Card */
                        className='
                        flip-back
                        absolute
                        h-full
                        w-full
                        rounded-40
                        p-5
                        bg-white
                        border-4
                        border-red-400
                        flex
                        flex-col
                    '
                    >
                        <h1
                            className='
                            font-montserrat
                            text-2xl
                            text-center

                            lg:text-3xl
                            '
                        >{position}</h1>

                        <p dangerouslySetInnerHTML={{ __html: desc }}
                            className={`
                            mt-3
                            px-5
                            py-3
                            h-${buttons.length > 0 ? '5/6' : 'full'}
                            scrollbar-thin
                            scrollbar-thumb-red-600
                            overflow-scroll
                            whitespace-pre-line

                            lg:text-lg
                        `}
                        />

                        <div
                            className='
                            flex
                            flex-col
                            items-center
                            justify-center
                        '
                        >
                            {
                                buttons.map((b, index) =>
                                (
                                    <AwesomeButton
                                        key={index}
                                        type='secondary'
                                        style={{
                                            '--button-secondary-color': 'rgb(34,197,94)',
                                            '--button-secondary-color-dark': 'dark-gray',
                                            '--button-secondary-color-light': 'white',
                                            '--button-secondary-color-hover': 'rgb(5,46,22)',
                                            '--button-secondary-color-active': 'rgb(5,46,22)',
                                            '--button-secondary-border': '0px',
                                            '--button-default-border-radius': '40px',
                                            '--button-raise-level': '6px',
                                            '--button-hover-pressure': '2.5',
                                            width: "230px",
                                            marginTop: '20px',
                                        }}
                                        onPress={() => buttonFuncs[index]()}
                                        onClick={() => buttonFuncs[index]()}
                                    >{b}</AwesomeButton>
                                )
                                )
                            }
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}