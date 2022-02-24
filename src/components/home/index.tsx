import ParticlesBg from './particlesBg'
import TitleBg from './titleBg'
import StyleHomeDiv from './styles'
import AboutMe from './aboutMe'
import Skills from './skills'

export default function Home() {

	return (
		<StyleHomeDiv>
			<ParticlesBg>
				<TitleBg />
			</ParticlesBg>

			<AboutMe/>
			<Skills/>
		</StyleHomeDiv>
	)
}
