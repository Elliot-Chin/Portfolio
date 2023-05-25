import MyLinks from "../../public/data/MyLinks"


export default function Links() {


    // UseStates -----------------------------------------------------------------

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
                        <span
                            key={idx}
                            className='
                            btn-hover
                            w-2/3
                            font-montserrat
                            cursor-pointer
                            h-16
                            rounded-40
                            text-white
                            text-xl
                            flex
                            items-center
                            justify-center
                            gap-5
                            transition-all
                            duration-500
                            ease-in-out
                            purple-button
                            outline-none

                            md:text-2xl

                            lg:text-3xl

                            '
                            onClick={link.onClick}
                        >
                            {link.icon}
                            {link.display}
                        </span>
                    ))
                }


            </div>






        </div>
    )
}