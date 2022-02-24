import React from 'react'
import StyleAboutMe from './styles'
import { FcCheckmark } from 'react-icons/fc';
import AngeloPhoto from '../../../assets/y.jpg'
import Points from '../../../assets/points.png'

export default function AboutMe() {
    return (
        <StyleAboutMe>
            <div className="content">
                <div className='contentText'>
                    <h1><FcCheckmark/> Quem é</h1>
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
