import React, { useContext } from 'react'
import CardSkill from '../cardSkill'
import StyleSkills from './styles'
import { TiHtml5 } from "react-icons/ti";
import { SiTypescript, SiJavascript, SiReact, SiAngular } from "react-icons/si";
import { IoLogoCss3 } from "react-icons/io";
import { FcSupport } from "react-icons/fc";
import { refContextProps } from '../../models/refContextModel';
import { RefContext } from '../../../context/refContext';




export default function Skills() {
  const { skillsScroll } = useContext<refContextProps>(RefContext)
  
  return (
    <StyleSkills ref={skillsScroll}>
      <h1 className='title'><FcSupport /> Conhecimentos <FcSupport /></h1>
      <div className="content">
        <CardSkill
          title={'Design'}
          text={"Com eles consigo construir e estilizar minhas telas com qualidade e responsividade."}>

          <TiHtml5 size={80} />
          <IoLogoCss3 size={60} style={{ paddingTop: "12px" }} />
        </CardSkill>

        <CardSkill
          title={'Linguagens'}
          text={"Essas são as linguaguens que construo minhas lógicas e que dão vida à page."}>

          <SiJavascript size={80} />
          <SiTypescript size={80} />
        </CardSkill>

        <CardSkill
          title={'Frameworks'}
          text={"React, React Native e Angular, estas são as bibliotecas que tenho conhecimento."}>

          <SiReact size={80} />
          <SiAngular size={80} />
        </CardSkill>
      </div>
    </StyleSkills>
  )
}
