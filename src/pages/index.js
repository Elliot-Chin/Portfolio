import MyHeader from '@/components/MyHeader'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import { useState, useEffect } from 'react'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import MyLogo from '@/components/MyLogo'

export default function Home() {

  // UseStates -----------------------------------------------------------------
  const [canScroll, setCanScroll] = useState(false)
  const [scrolled, setScrolled] = useState(true)
  const [visibleSectionID, setVisibleSectionID] = useState('')

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

  useEffect(() => {
    console.log(visibleSectionID)
  }, [visibleSectionID])

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
    />
  )

  


  // Return --------------------------------------------------------------------

  return (
    <div>
      <main>

        {LOGO}

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
