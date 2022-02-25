import ParticlesBg from './particlesBg'
import TitleBg from './titleBg'
import StyleHomeDiv from './styles'
import AboutMe from './aboutMe'
import Skills from './skills'

export default function Home(props: any) {

	return (
		<StyleHomeDiv>
			<ParticlesBg refAboutMe={props.refAboutMe}>
				<TitleBg />
			</ParticlesBg>

			<div ref={props.refAboutMe}>
				<AboutMe />
			</div>

			<Skills />
		</StyleHomeDiv>
	)
}
