import { StyleProjects, CarouselDiv } from './styles'
import CardProject from '../cardProject'
import { SiTypescript, SiReact, SiNodedotjs } from 'react-icons/si'
import { FcOpenedFolder } from 'react-icons/fc'
import { BsArrowRight } from 'react-icons/bs'
import imgHelpDogs from "../../../assets/helpdogs.png"
import imgCineApp from "../../../assets/cineapp.png"
import imgYourCurrency from "../../../assets/yourCurrency.png"
import Carousel from 'react-elastic-carousel'
import { RefContext } from '../../../context/refContext';
import { useContext } from 'react';
import { refContextProps } from '../../models/refContextModel';

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 1000, itemsToShow: 2, itemsToScroll: 2 },
  { width: 1500, itemsToShow: 3 },
]

export default function Projects() {
  const { projectsScroll } = useContext<refContextProps>(RefContext)

  return (
    <StyleProjects ref={projectsScroll}>
      <div className='content'>
        <div className="groupCard">
          <h1 className='titleProjects'><FcOpenedFolder /> Projetos <FcOpenedFolder /></h1>
          <a href='https://github.com/eumaninho54' target="_blank" rel="noreferrer">
            <h2 className='moreProjects'>Veja mais <BsArrowRight size={20} color='#722fe6' /></h2>
          </a>

          <CarouselDiv>
            <Carousel
              className='carousel'
              isRTL={false}
              breakPoints={breakPoints}
              enableAutoPlay={false}>

              <CardProject
                imgTool_1={<SiTypescript color="#6B94CB" />}
                nameTool_1={<span style={{ color: "#6B94CB" }}>Typescript</span>}

                imgTool_2={<SiReact color="#5ED3F3" />}
                nameTool_2={<span style={{ color: "#5ED3F3" }}>React Native</span>}

                title={'HelpDogs'}
                text={"App de consulta com objetivo principal de divulgar o trabalho da organização ASPCA, organização que busca o direito ao tratamento respeitoso aos animais."}
                banner={imgHelpDogs}

                githubLink={"https://github.com/eumaninho54/HelpDogs"} />

              <CardProject
                imgTool_1={<SiTypescript color="#6B94CB" />}
                nameTool_1={<span style={{ color: "#6B94CB" }}>Typescript</span>}

                imgTool_2={<SiReact color="#5ED3F3" />}
                nameTool_2={<span style={{ color: "#5ED3F3" }}>React Native</span>}

                imgTool_3={<SiNodedotjs color="#4F9640" />}
                nameTool_3={<span style={{ color: "#4F9640" }}>Node</span>}

                title={'CineApp'}
                text={"App completo de compra de ingressos para cinema. Com aplicação backend para autenticar usuarios e ingressos."}
                banner={imgCineApp}

                githubLink={"https://github.com/eumaninho54/cine-app"} />

              <CardProject
                imgTool_1={<SiTypescript color="#6B94CB" />}
                nameTool_1={<span style={{ color: "#6B94CB" }}>Typescript</span>}

                imgTool_2={<SiReact color="#5ED3F3" />}
                nameTool_2={<span style={{ color: "#5ED3F3" }}>React Native</span>}

                title={'yourCurrency'}
                text={"App que realiza conversão de moeda com valor buscado. Construído com auxílio do Expo cli."}
                banner={imgYourCurrency}

                githubLink={"https://github.com/eumaninho54/yourCurrency"} />
            </Carousel>
          </CarouselDiv>
        </div>
      </div>
    </StyleProjects>
  )
}
