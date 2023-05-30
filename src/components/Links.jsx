import { useState } from "react"
import MyLinks from "../../public/data/MyLinks"
import { AwesomeButton } from "react-awesome-button"


export default function Links() {


    // UseStates -----------------------------------------------------------------
    const [fSize, setFontSize] = useState('50rem')

    // Variables -----------------------------------------------------------------

    // Util funcs ----------------------------------------------------------------

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
                        <AwesomeButton
                            key={idx}
                            type='secondary'
                            before={link.icon}
                            onPress={link.onClick}
                            onPressed={link.onClick}
                            style={{
                                '--button-secondary-color': 'rgb(59,7,100)',
                                "--button-secondary-color-dark": "transparent",
                                "--button-secondary-color-light": "white",
                                '--button-secondary-color-hover': 'rgb(168,85,247)',
                                '--button-secondary-color-active': 'rgb(168,85,247)',
                                '--button-secondary-border': '0px solid #acc3d7',
                                '--button-default-border-radius': '40px',
                                '--button-raise-level': '6px',
                                '--button-hover-pressure': '2.5',
                                fontSize: '1.5rem',
                                height: '80px',
                            }}
                            className='
                            w-2/3
                            '
                        >
                            {link.display}
                        </AwesomeButton>
                    ))
                }

            </div>

        </div>
    )
}
