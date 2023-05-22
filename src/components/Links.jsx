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
            red-shadow
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
                            hover-2
                            p-4
                            w-5/6
                            text-3xl
                            text-center
                            font-montserrat
                            m-3
                            gap-5
                            flex
                            cursor-pointer

                            md:text-4xl
                            md:justify-center

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