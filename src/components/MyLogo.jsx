import Image from "next/image";
import Tilt from "react-parallax-tilt"



export default function MyLogo({ visible }) {
    // UseStates -----------------------------------------------------------------

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

    const scrollToTop = () => {

        const refEl = document.getElementById('Home')

        window.scrollTo({
            top: refEl.offsetTop,
            behavior: 'smooth',
        })

    }

    // UseEffect -----------------------------------------------------------------

    // Components ----------------------------------------------------------------

    // Return --------------------------------------------------------------------
    return (

        <div
            className='
            rounded-40
            fixed
            right-0
            m-5
            z-50

            cursor-pointer
            '

            onClick={scrollToTop}
        >
            <Tilt
                tiltReverse={true}
                gyroscope={true}
                tiltAxis="y"
            >
                {
                    !visible && (<Image
                        src={'/images/EC.jpg'}
                        width={80}
                        height={80}
                        alt='Logo'

                        className='
    
                        md:w-[100px]
    
                        lg:w-[120px]
                    '
                    />)
                }

            </Tilt>
        </div>
    )

}