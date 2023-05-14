import { useEffect, useState } from 'react'
import { MdConstruction } from 'react-icons/md'


export default function UnderConstruction() {
    // UseStates -----------------------------------------------------------------
    const [msg, setMsg] = useState('')

    // Variables -----------------------------------------------------------------

    const messages = [
        "We're working on it... but it's taking a minute.",
        "Under construction since... well, we'll let you know when it's done.",
        "Sorry, we're not ready for the world to see us yet.",
        "This section is taking a power nap. It'll wake up refreshed and better than ever!",
        "Pardon our pixels, we're still sprucing things up.",
        "We're renovating this section. Sorry for the dust.",
        "Under construction, but we promise not to use duct tape.",
        "This section is currently on vacation. We'll send a postcard when it gets back.",
    ]

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    useEffect(() => {
        setMsg(messages[Math.floor(Math.random() * messages.length)])
    }, [])

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------

    return (
        <div
            className='
            relative
            bg-yellow-400
            h-[30rem]
            w-11/12
            flex
            flex-col
            justify-center
            rounded-40
            overflow-hidden
            my-auto
            mx-auto
        '
        >
            <div
                className='
                absolute
                w-full
                h-24
                -top-3
                transform
                animate-pulse
                -scale-y-[1]
                bg-black-construction-divider
            '
            />

            <div
                className='
                flex
                justify-center
                items-center
                mt-16
                my-10
            '
            >
                <MdConstruction
                    size={180}
                    className='
                    relative
                    '
                />

                <h1
                    className='
                    text-3xl
                    font-montserrat
                    p-5
                    text-center
                    shadowed-text

                    md:text-4xl

                    lg:text-6xl

                    '
                >
                    Under Construction
                </h1>
            </div>

            <span
                className='
            relative
            w-fit
            mx-auto
            text-lg
            text-center
            mb-10
            px-5
            shadowed-text

            md:text-2xl

            lg:text-3xl
            '
            >
                {msg}
            </span>

            <div
                className='
                absolute
                w-full
                h-24
                transform
                -scale-x-[1]
                -bottom-3
                animate-pulse
                duration-1000
                bg-black-construction-divider
            '
            />

        </div>
    )
}