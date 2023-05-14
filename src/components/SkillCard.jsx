import { useState, useEffect } from "react"
import Tilt from "react-parallax-tilt"

const SkillCard = ({ IconModel, title, skills }) => {
    // UseStates -----------------------------------------------------------------

    const [tiltAngle, setTiltAngle] = useState('x')

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    // UseEffect -----------------------------------------------------------------
    useEffect(() => {
        function handleResize() {
            setTiltAngle(window.innerWidth < 768 ? 'y' : 'x')
        }

        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------
    return (
        < Tilt
            tiltEnable={false}
            glareEnable={true}
            glareMaxOpacity={0.4}
            glarePosition="all"
            glareColor="white"
            glareBorderRadius="40px"
            className={`
            glass-effect
            bg-blue-200
            rounded-40
            w-5/6
            mx-auto
            flex
            flex-col
            mb-10
            text-white

            md:w-10/12

            lg:flex-row
            lg:w-2/3
            `
            }
        >
            <div
                className={
                    `
                    relative
                    p-5
                    w-full

                    after:absolute
                    after:bg-gradient-radial from-white via-transparent to-transparent
                    after:w-5/6
                    after:h-px
                    after:left-1/2
                    after:transform
                    after:-translate-x-1/2
                    after:mt-5

                    md:w-full

                    lg:w-80

                    after:lg:w-px
                    after:lg:h-full
                    after:lg:z-10
                    after:lg:my-auto
                    after:lg:right-0
                    after:lg:top-0
                    after:lg:left-full
                    after:lg:translate-x-0

                    `
                }
            >
                <div
                    className={`
                relative
                h-28

                lg:h-72
                `
                    }>
                    {IconModel}
                </div>

                <h1
                    className={
                        `
                relative
                text-center
                font-montserrat
                text-4xl

                shadowed-text

                lg:w-full
                `
                    }
                >
                    {title}
                </h1>
            </div>

            <div
                className='
                    mx-auto
                    flex
                    flex-wrap
                    p-5
                    justify-center
                    
                    lg:justify-start
                    lg:my-auto
            '
            >
                {

                    skills?.map((s, i) => (
                <span
                    className={`
                                relative
                                text-l
                                px-5
                                py-1
                                m-2
                                rounded-40
                                font-semibold
                                glass-effect

                                md:text-xl

                                lg:text-2xl
                        `
                    }
                    key={i}
                >
                    {s}
                </span>
                ))
                }
            </div>
        </Tilt >
    )
}

export default SkillCard