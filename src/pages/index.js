import MyHeader from '@/components/MyHeader'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import { useState, useEffect } from 'react'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import MyLogo from '@/components/MyLogo'
import NavMenu from '@/components/NavMenu'

export default function Home() {

  // UseStates -----------------------------------------------------------------
  const [canScroll, setCanScroll] = useState(false)
  const [scrolled, setScrolled] = useState(true)
  const [shown, setShown] = useState(false)
  const [visibleSectionID, setVisibleSectionID] = useState('Header')

  // Variables -----------------------------------------------------------------

  // Util funcs ----------------------------------------------------------------

  // UseEffect -----------------------------------------------------------------

  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.sections')

      elements.forEach((element) => {
        const { top, bottom } = element.getBoundingClientRect();
        const isVisible = top < window.innerHeight && bottom >= 0;

        if (isVisible) {
          setVisibleSectionID(element.id)
        }
      })
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    }
  }, [])

  // Components ----------------------------------------------------------------

  const HEADER = (
    <MyHeader
      setCanScroll={setCanScroll}
      setScrolled={setScrolled}
      canScroll={canScroll}
      scrolled={scrolled}
    />
  )

  const ABOUT_ME = (
    <AboutMe
    />
  )

  const SKILLS = (
    <Skills
    />
  )

  const EXPERIENCE = (
    <Experience
    />
  )

  const PROJECT = (
    <Projects
    />
  )

  const CONTACTME = (
    <ContactMe
    />
  )

  const LOGO = (
    <MyLogo
    visible={shown}
    />
  )

  const NAV = (
    <NavMenu
      shown={shown}
      setShown={setShown}
      selectedID={visibleSectionID}
    />
  )




  // Return --------------------------------------------------------------------

  return (
    <div>
      <main>

        {LOGO}

        {NAV}

        {HEADER}

        {ABOUT_ME}

        {SKILLS}

        {EXPERIENCE}

        {PROJECT}

        {CONTACTME}

      </main>
    </div>
  )
}
