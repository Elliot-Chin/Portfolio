import { useState } from "react"
import MyLinks from "../../public/data/MyLinks"


export default function Links() {


    // UseStates -----------------------------------------------------------------
    const [cName, setCName] = useState('__left')

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------
    const handleMouseEnter = (event) => {
        const { clientX } = event
        const spanRect = event.target.getBoundingClientRect()
        const spanCenterX = spanRect.left + spanRect.width / 2

        setCName(clientX < spanCenterX ? '__left' : '__right')

    }

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------
    return (
        <div
            className='
            glass-effect
            brown-shadow
            rounded-40
            h-[40rem]
            w-5/6
            mx-auto
            relative
            flex
            flex-col

            md:w-2/3

            lg:w-2/5
        '
        >
            <h1
                className='
                font-montserrat
                mx-auto
                mt-5
                text-4xl
                text-white

                md:text-5xl

                lg:text-6xl
                '
            >
                Social Links
            </h1>


            <div
                className='
                flex
                flex-col
                items-center
                pb-16
                justify-around
                my-auto
                h-full
                '
            >

                {
                    MyLinks.map((link, idx) => (
                        <span
                            key={idx}
                            className={`
                            btn-hover
                            relative
                            w-2/3
                            cursor-pointer
                            h-16
                            rounded-40
                            text-xl
                            flex
                            items-center
                            overflow-hidden
                            z-10
                            justify-center
                            outline-none

                            ${cName}

                            md:text-2xl

                            lg:text-3xl
                            
                            `}
                            onClick={link.onClick}
                            onMouseMove={handleMouseEnter}
                        >
                            <span
                                className='
                                text-white
                                font-montserrat
                                absolute
                                text-xl
                                flex
                                items-center
                                justify-center
                                gap-5
                                '
                            >
                                {link.icon}
                                {link.display}
                            </span>
                        </span>
                    ))
                }

            </div>

        </div>
    )
}
