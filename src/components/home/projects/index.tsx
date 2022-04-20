import React from 'react'
import { StyleProjects, CarouselDiv} from './styles'
import CardProject from '../cardProject'
import { SiAngular, SiSass, SiTypescript, SiJavascript, SiReact } from 'react-icons/si'
import { FcOpenedFolder } from 'react-icons/fc'
import { BsArrowRight } from 'react-icons/bs'
import imgCopyNetflix from "../../../assets/copy_netflix.png"
import imgAuthLogin from "../../../assets/authLogin.png"
import Carousel from 'react-elastic-carousel'

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1000, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1500, itemsToShow: 3 },
]

export default function Projects() {

  return (
    <StyleProjects>
      <div className='content'>
        <div className="groupCard">
          <h1 className='titleProjects'><FcOpenedFolder /> Projetos <FcOpenedFolder /></h1>
          <a href='https://github.com/ymaninho54' target="_blank" rel="noreferrer">
            <h2 className='moreProjects'>Veja mais <BsArrowRight size={20} color='#722fe6' /></h2>
          </a>

          <CarouselDiv>
            <Carousel 
              className='carousel' 
              isRTL={false} 
              breakPoints={breakPoints}
              enableAutoPlay={false}>
              <CardProject
                imgTool_1={<SiAngular color="#DD0031" />}
                nameTool_1={<span style={{ color: "#DD0031" }}>Angular</span>}

                imgTool_2={<SiTypescript color="#6B94CB" />}
                nameTool_2={<span style={{ color: "#6B94CB" }}>Typescript</span>}

                imgTool_3={<SiSass color="#C76494" />}
                nameTool_3={<span style={{ color: "#C76494" }}>Sass</span>}

                title={'Copy-Netflix'}
                text={"Uma cópia completa do site da Netflix, construido inteiramente em Angular, utilizando uma api pública para trazer os dados dos filmes."}
                banner={imgCopyNetflix}

                githubLink={"https://github.com/ymaninho54/Copy-Netflix"}
                pageLink={"https://ymaninho54.github.io/Copy-Netflix/"}/>

              <CardProject 
                imgTool_1 ={<SiTypescript color="#6B94CB" />}
                nameTool_1={<span style={{ color: "#6B94CB" }}>Typescript</span>}

                imgTool_2 ={<SiReact color="#5ED3F3" />}
                nameTool_2={<span style={{ color: "#5ED3F3" }}>React</span>}

                title={'AuthLogin'}
                text={"Projeto de autenticação de token JWT. Login com Facebook e Google com token guardado em localStorage e liberando rotas."}
                banner={imgAuthLogin}

                githubLink={"https://github.com/ymaninho54/authLogin"}
                pageLink={"https://ymaninho54.github.io/authLogin/"}/>
            </Carousel>
          </CarouselDiv>
        </div>
      </div>

    </StyleProjects>
  )
}
