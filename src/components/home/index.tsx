import ParticlesBg from './particlesBg'
import TitleBg from './titleBg'
import AboutMe from './aboutMe'
import Skills from './skills'
import Projects from './projects'
import ContactMe from './contactMe'


export default function Home() {

  return (
    <main>
      <ParticlesBg>
        <TitleBg />
      </ParticlesBg>

      <AboutMe />

      <Skills />

      <Projects />

      <ContactMe />
    </main>
  )
}
