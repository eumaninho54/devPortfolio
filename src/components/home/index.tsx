import ParticlesBg from './particlesBg'
import TitleBg from './titleBg'
import StyleHomeDiv from './styles'
import AboutMe from './aboutMe'
import Skills from './skills'
import Projects from './projects'

export default function Home(props: any) {

	return (
		<StyleHomeDiv>
			<ParticlesBg refAboutMe={props.refAboutMe}>
				<TitleBg />
			</ParticlesBg>

			<section style={props.style}>
				<div ref={props.refAboutMe}>
					<AboutMe />
				</div>

				<div ref={props.refSkills}>
					<Skills />
				</div>

				<div ref={props.refProjects}>
					<Projects />
				</div>
			</section>

		</StyleHomeDiv>
	)
}
