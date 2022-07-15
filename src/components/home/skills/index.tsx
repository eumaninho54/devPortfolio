import React, { useContext } from 'react'
import CardSkill from '../cardSkill'
import StyleSkills from './styles'
import { SiTypescript, SiJavascript, SiReact, SiNodedotjs, SiCss3, SiHtml5 } from "react-icons/si";
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
          timeDelay={100}
          title={'Design'}
          text={"Com eles consigo construir e estilizar minhas telas com qualidade e responsividade."}>

          <SiHtml5 size={80} />
          <SiCss3 size={80} />
        </CardSkill>

        <CardSkill
          timeDelay={300}
          title={'Linguagens'}
          text={"Essas são as linguaguens que construo minhas lógicas e que dão vida à page."}>

          <SiJavascript size={80} />
          <SiTypescript size={80} />
        </CardSkill>

        <CardSkill
          timeDelay={500}
          title={'Frameworks'}
          text={"React, React Native e Node utilizo para construir minhas aplicações web e mobile."}>

          <SiReact size={80} />
          <SiNodedotjs size={80} />
        </CardSkill>
      </div>
    </StyleSkills>
  )
}
