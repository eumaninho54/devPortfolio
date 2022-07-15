import StyleAboutMe from './styles'
import { FcCheckmark } from 'react-icons/fc';
import AngeloPhoto from '../../../assets/y.jpg'
import Points from '../../../assets/points.png'
import { RefContext } from '../../../context/refContext';
import { useContext } from 'react';
import { refContextProps } from '../../models/refContextModel';
import AOS from 'aos';


export default function AboutMe() {
  const { aboutMeScroll } = useContext<refContextProps>(RefContext)

  return (
    <StyleAboutMe ref={aboutMeScroll} data-aos="fade-right" data-aos-easing="ease-in-out">
      <div className="content">
        <div className='contentText'>
          <h1><FcCheckmark /> Quem é</h1>
          <p>Salve, meu nome é Angelo Menti, ou <span>"Maninho"</span> para os mais íntimos.
            Sou desenvolvedor <span>Front-end Web & Mobile.</span> Construo interfaces modernas e atuais, dando vida à sua ideia com qualidade, responsividade, animações e performance.</p>
          <p>Quando não estou codando, jogo com meus amigos, assisto séries, saio para conhecer gente nova, e adoro futebol.</p>
        </div>

        <div className='contentImages'>
          <img className='myPhoto' src={AngeloPhoto} alt="AngeloPhoto" />
          <img className='points' src={Points} alt="points" />
        </div>
      </div>
    </StyleAboutMe>
  )
}
