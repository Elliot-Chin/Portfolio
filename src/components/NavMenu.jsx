import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'


export default function NavMenu({ selectedID, shown, setShown }) {

    // UseStates -----------------------------------------------------------------
    const spanRefs = useRef([])
    const [prevID, setPrevID] = useState('Home')
    // Variables -----------------------------------------------------------------

    const items = ['Home', 'About Me', 'Skills', 'Experience', 'Projects', 'Contact']

    // Util funcs ----------------------------------------------------------------
    const handleClick = () => {
        setShown((s) => {
            return !s
        })
    }

    const handleScroll = ({ id }) => {

        const refEl = document.getElementById(id)

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

        spanRefs.current[prevID].classList.remove('selected-style')
        spanRefs.current[selectedID].classList.add('selected-style')
        setPrevID(selectedID)

    }, [selectedID])

    // Components ----------------------------------------------------------------
    const MENU_ICON = (
        <div
            className={`
                fixed
                z-[51]
                mt-5
                left-2
                transition

                lg:left-5

                
                `}
        >
            <Hamburger
                toggle={handleClick}
                toggled={shown}
                color={shown ? 'red' : 'black'}
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
                mt-16

                md:mt-0
                '
        >

            <Image
                src={'/images/EC.jpg'}
                height={50}
                width={50}
                alt='Logo'
                unoptimized
                priority

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
        <div
            className='
            flex
            flex-col
            overflow-auto
        '
        >
            {
                items.map((id, idx) => (
                    <span
                        ref={(el) => (spanRefs.current[id] = el)}
                        key={id}
                        name={id}
                        onClick={() => handleScroll({ id: id })}
                        onMouseEnter={() => spanRefs.current[id].classList.add('hover-style')}
                        onMouseLeave={() => spanRefs.current[id].classList.remove('hover-style')}
                        className='
                        font-bold
                        w-full
                        text-center
                        my-2
                        p-4
                        text-2xl
                        transition
                        duration-700
                        cursor-pointer
                        
                        hover:text-red-600
                        
                        md:text-3xl
                        '
                    >
                        {id}
                    </span>
                ))
            }
        </div>
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