import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { useEffect } from 'react'


export default function NavMenu({ shown, setShown }) {

    // UseStates -----------------------------------------------------------------
    // Variables -----------------------------------------------------------------

    const items = ['Header', 'About Me', 'Skills', 'Experience', 'Projects', 'Contact']

    // Util funcs ----------------------------------------------------------------
    const handleClick = () => {
        setShown((s) => {
            return !s
        })
    }

    const handleScroll = ({ id }) => {

        const refEl = document.getElementById(id)

        console.log(refEl)

        if (refEl) {
            window.scrollTo({
                top: refEl.offsetTop,
                behavior: 'smooth',
            })
            handleClick()
        }
    }

    // UseEffect -----------------------------------------------------------------

    useEffect(() => {
        console.log(shown)
    }, [shown])

    // Components ----------------------------------------------------------------
    const MENU_ICON = (
        <div
            className='
                fixed
                z-[51]
                mt-5
                left-2

                lg:left-5
                '
        >
            <Hamburger
                toggle={handleClick}
                toggled={shown}
                color={shown ? 'red' : 'black'}
                size={33}
            />
        </div>
    )

    const MENU_HEADER = (
        <div
            className='
                items-center
                justify-center
                w-full
                flex
                flex-row
                mt-3


                '
        >

            <Image
                src={'/images/EC.jpg'}
                height={50}
                width={50}
                alt='Logo'
                unoptimized

                className='

                md:w-16
                
                lg:w-20
                '
            />

            <h1
                className='
                font-montserrat
                m-5
                text-4xl

                md:text-6xl
                '
            >
                Menu
            </h1>

        </div>
    )

    const MENU_ITEMS = (
        items.map((id, idx) => (
            <span
                key={idx}
                onClick={() => handleScroll({ id: id })}
                className='
                font-bold
                w-full
                text-center
                my-2
                p-4
                text-2xl

                hover:cursor-pointer

                md:text-3xl
                '
            >
                {id}
            </span>
        ))
    )

    // Return --------------------------------------------------------------------
    return (
        <>

            {MENU_ICON}

            <div
                className=
                {`
                        fixed
                        z-50
                        h-full
                        w-2/3
                        glass-effect
                        flex
                        flex-col
                        items-center
                        transition
                        transform
                        duration-700
                        ${!shown && ('-translate-x-[101%]')}

                        md:w-1/2

                        lg:w-1/3
                    `}
            >

                {MENU_HEADER}

                {MENU_ITEMS}

            </div>
        </>
    )

}