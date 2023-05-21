import Hamburger from 'hamburger-react'
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'


export default function NavMenu({ selectedID, shown, setShown }) {

    // UseStates -----------------------------------------------------------------
    const spanRefs = useRef([])
    const [prevID, setPrevID] = useState('')
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
        console.log(`This is ${selectedID}`)
        if (prevID) {
            spanRefs.current[prevID].style.borderBottom = 'none'
            spanRefs.current[prevID].style.color = 'black'
        }
        spanRefs.current[selectedID].style.borderBottom = '1px solid rgb(31,41,55)'
        spanRefs.current[selectedID].style.color = 'red'
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
                overflow-scroll

                md:mt-0
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
        <div
            className='
            flex
            flex-col
            overflow-scroll
        '
        >
            {
                items.map((id, idx) => (
                    <span
                        ref={(el) => (spanRefs.current[id] = el)}
                        key={id}
                        onClick={() => handleScroll({ id: id })}
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