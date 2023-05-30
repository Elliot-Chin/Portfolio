import AvatarBase from "./models/AvatarBase"
import AboutMeIntro from "../../public/data/AboutMeIntro"
import { useEffect, useState } from "react"
import SectionTitle from "./SubComponents/SectionTitle"
import SectionDivider from "./SubComponents/SectionDivider"


export default function AboutMe({ dark }) {

    const [height, setHeight] = useState('700px')

    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------

    useEffect(() => {
        const handleResize = () => {
            setHeight(window.innerWidth < 768 ? '700px' :
                window.innerWidth < 1024 ? '1000px' :
                    '1200px'
            )
        }
        handleResize()
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // Components ----------------------------------------------------------------

    const TITLE = (
        <SectionTitle
            title={"About Me"}
        />
    )

    const AVATAR = (
        <div
            className={`
            my-auto
            mx-auto
            w-full

            md:w-3/4
            
            lg:w-1/2
            `}
            style={{
                height: height,
            }}
        >
            <AvatarBase />
        </div>

    )

    const DESCRIPTION = (
        <p
            className='
                        relative
                        font-hindMadurai
                        whitespace-pre-line
                        p-10
                        mx-auto
                        leading-7
                        w-full
                        text-lg
                        text-white

                        md:w-11/12

                        lg:text-xl
                        lg:w-1/2
                        lg:my-auto
                        '
        >
            {AboutMeIntro}
        </p>
    )

    const BTM_DIVIDER = (
        <SectionDivider
            color={dark ? 'rgb(30 64 175)' : '#3399ff'} />
    )

    // Return --------------------------------------------------------------------
    return (
        <>

            <section
                id='About Me'

                className='
                sections
                min-h-screen
                relative
                flex-wrap
                flex
                gap-5
                flex-col
                justify-center
                bg-orange-400

                dark:bg-orange-900
                '>

                {TITLE}

                <div
                    className={`
                    flex
                    flex-col
                    flex-wrap
                    glass-effect
                    w-10/12
                    mx-auto
                    mb-32
                    pb-5
                    -mt-5
                    rounded-40


                    md:flex-col
                    md:w-10/12
                    md:mb-40

                    lg:w-2/3
                    lg:flex-row
                    lg:mb-48
                    `
                    }
                >

                    {AVATAR}

                    {DESCRIPTION}
                </div>

                {BTM_DIVIDER}
            </section>
        </>
    )
}