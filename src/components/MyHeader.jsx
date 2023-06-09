import { useState, useEffect } from 'react'
import { sleep } from '@/utils/myUtils'
import ScrollIcon from './SubComponents/ScrollIcon'
import SectionDivider from './SubComponents/SectionDivider'

export default function MyHeader({ setCanScroll, canScroll, scrolled, setScrolled, dark }) {

    // UseStates ----------------------------------------------------------------
    const [header_text, setHeaderText] = useState(``)
    const [subheader_text, setSubText] = useState(``)


    // Variables ----------------------------------------------------------------
    const subHeaders = [
        'professional',
        'creative',
        'adventurous',
        'artistic',
        'imaginative',
        'audacious']

    // Util funcs ----------------------------------------------------------------
    const _animateWriteTitle = async () => {
        const chars = []
        const string = '<Elliot Chin />'

        await sleep(500)

        for (const char of string) {
            chars.push(char)
            setHeaderText(`${chars.join('')}_`)
            await sleep(100)
        }
        setHeaderText(chars.join(''))
    }

    const _animateWriteSubtitle = async () => {
        const chars = []
        const replacement = subHeaders[Math.floor(Math.random() * subHeaders.length)]
        const string = `A sneak peak into my ${replacement} life.`

        for (const char of string) {
            chars.push(char)
            setSubText(`${chars.join('')}_`)
            await sleep(100)
        }
        setSubText(chars.join(''))

        await sleep(200)
    }

    const handleScroll = (e) => {

        if (!canScroll) {
            e.preventDefault()
            return
        }

        setScrolled(true)


    }

    // UseEffect ----------------------------------------------------------------

    useEffect(() => {
        const runTextAnimation = async () => {
            await _animateWriteTitle()
            await _animateWriteSubtitle()
            setCanScroll(true)
            setScrolled(false)
        }

        runTextAnimation()
    }, [])

    useEffect(() => {
        window.addEventListener('wheel', handleScroll, { passive: false })
        window.addEventListener('touchmove', handleScroll, { passive: false })
        return () => {
            window.removeEventListener('wheel', handleScroll),
                window.removeEventListener('touchmove', handleScroll)
        }
    }, [canScroll])


    // Components ----------------------------------------------------------------

    const TITLE = (
        <h1
            className={`
            text-gray-200
            font-montserrat
            text-5xl
            text-center
            mt-80

            md:text-7xl

            lg:text-9xl
            `}>
            {header_text}
        </h1>
    )

    const SUBTITLE = (
        <p
            className={
                `
                text-gray-200
                font-montserrat
                text-1xl
                text-center

                md:text-2xl

                lg:text-3xl
                `
            }
        >
            {subheader_text}
        </p>
    )

    const SCROLL_ICON = (
        !scrolled && (
            <ScrollIcon
                text={`Scroll`}
                strokeColor={`white`}
            />
        )
    )

    const BTM_DIVIDER = (

        <SectionDivider
            color={dark ? 'rgb(124 45 18)' : 'rgb(251 146 60)' }
        />

    )



    // Return ----------------------------------------------------------------
    return (
        <section
            id='Home'

            className='
            sections
            relative
            h-[70rem]
            flex
            flex-col
            bg-blend-soft-light
            bg-gray-800
            '>
            {TITLE}
            {SUBTITLE}
            {SCROLL_ICON}
            {BTM_DIVIDER}
        </section>
    )
}