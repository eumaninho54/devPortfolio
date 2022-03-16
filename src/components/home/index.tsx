import ParticlesBg from './particlesBg'
import TitleBg from './titleBg'
import AboutMe from './aboutMe'
import Skills from './skills'
import Projects from './projects'
import ContactMe from './contactMe'

interface HomeProps {
  style: object
  refAboutMe:   React.MutableRefObject<null>
  refSkills:    React.MutableRefObject<null>
  refProjects:  React.MutableRefObject<null>
  refContactMe: React.MutableRefObject<null>
}

export default function Home(props: HomeProps) {

  return (
    <main>
      <ParticlesBg refAboutMe={props.refAboutMe}>
        <TitleBg />
      </ParticlesBg>

      <div style={props.style}>
        <div ref={props.refAboutMe}>
          <AboutMe />
        </div>

        <div ref={props.refSkills}>
          <Skills />
        </div>

        <div ref={props.refProjects}>
          <Projects />
        </div>

        <div ref={props.refContactMe}>
          <ContactMe />
        </div>
      </div>

    </main>
  )
}
