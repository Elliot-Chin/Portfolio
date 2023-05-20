import MyHeader from '@/components/MyHeader'
import AboutMe from '@/components/AboutMe'
import Skills from '@/components/Skills'
import { useState } from 'react'
import Experience from '@/components/Experience'
import Projects from '@/components/Projects'
import ContactMe from '@/components/ContactMe'
import MyLogo from '@/components/MyLogo'

export default function Home() {

  const [canScroll, setCanScroll] = useState(false)
  const [scrolled, setScrolled] = useState(true)


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
