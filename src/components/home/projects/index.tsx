import React from 'react'
import StyleProjects from './styles'
import CardProject from '../cardProject'
import { SiAngular, SiSass, SiTypescript, SiJavascript, SiReact } from 'react-icons/si'
import { FcOpenedFolder } from 'react-icons/fc'
import { BsArrowRight } from 'react-icons/bs'
import imgCopyNetflix from "../../../assets/copy_netflix.png"

//https://www.digitaland.tv/wp-content/uploads/2016/03/banner_developer-.jpg

export default function Projects() {
  return (
    <StyleProjects>
      <div className='content'>
        <div className="groupCard">
          <h1 className='titleProjects'><FcOpenedFolder /> Projetos <FcOpenedFolder /></h1>
          <a href='https://github.com/ymaninho54' target="_blank" rel="noreferrer">
            <h2 className='moreProjects'>Veja mais <BsArrowRight size={20} color='#722fe6' /></h2>
          </a>

          <CardProject
            imgTool_1={<SiJavascript color="#EFD81D" />}
            nameTool_1={<span style={{ color: "#EFD81D" }}>Javascript</span>}

            imgTool_2={<SiTypescript color="#6B94CB" />}
            nameTool_2={<span style={{ color: "#6B94CB" }}>Typescript</span>}

            imgTool_3={<SiReact color="#5ED3F3" />}
            nameTool_3={<span style={{ color: "#5ED3F3" }}>React</span>}

            title={'Em construção'}
            text={"Atualmente devo estar codando este projeto, busque um café e aguarde que logo lhe mostro."}
            banner={"https://www.digitaland.tv/wp-content/uploads/2016/03/banner_developer-.jpg"}

            githubLink={""}
            pageLink={""}
          />
        </div>

        <div className="groupCard">
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
            pageLink={"https://ymaninho54.github.io/Copy-Netflix/"}
          />
          <CardProject 
            imgTool_1={<SiJavascript color="#EFD81D" />}
            nameTool_1={<span style={{ color: "#EFD81D" }}>Javascript</span>}

            imgTool_2={<SiTypescript color="#6B94CB" />}
            nameTool_2={<span style={{ color: "#6B94CB" }}>Typescript</span>}

            imgTool_3={<SiReact color="#5ED3F3" />}
            nameTool_3={<span style={{ color: "#5ED3F3" }}>React</span>}

            title={'Em construção'}
            text={"Atualmente devo estar codando este projeto, busque um café e aguarde que logo lhe mostro."}
            banner={"https://www.digitaland.tv/wp-content/uploads/2016/03/banner_developer-.jpg"}

            githubLink={""}
            pageLink={""}/>
        </div>
      </div>

    </StyleProjects>
  )
}
