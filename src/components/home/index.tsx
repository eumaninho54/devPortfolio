import ParticlesBg from './particlesBg'
import TitleBg from './titleBg'
import AboutMe from './aboutMe'
import Skills from './skills'
import Projects from './projects'
import ContactMe from './contactMe'

export default function Home(props: any) {

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

				<div>
					<ContactMe />
				</div>
			</div>

		</main>
	)
}
