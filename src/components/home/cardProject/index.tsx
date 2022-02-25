import React from 'react'
import StyleCardProject from './styles'
import { RiGithubFill, RiExternalLinkFill } from 'react-icons/ri';



export default function CardProject(props: any) {
  return (
    <StyleCardProject>
      <img src={props.banner} alt="bannerProjectCard" />
      <div className="Content">
        <div className='title'>
          <h1>{props.title}</h1>
          <div className='links'>
            <a href={props.githubLink} target={"_blank"} rel="noreferrer"><RiGithubFill size={30}/></a>
            <a href={props.pageLink} target={"_blank"} rel="noreferrer"><RiExternalLinkFill size={30}/></a>
          </div>
        </div>
        <div className="groupTools">

          <div className='tool'>
            {props.imgTool_1}
            <span style={{marginLeft: "3px"}}>{props.nameTool_1}</span>
          </div>

          <div className='tool'>
            {props.imgTool_2}
            <span style={{marginLeft: "3px"}}>{props.nameTool_2}</span>
          </div>

          <div className='tool'>
            {props.imgTool_3}
            <span style={{marginLeft: "3px"}}>{props.nameTool_3}</span>
          </div>

        </div>
        <p>{props.text}</p>
      </div>
    </StyleCardProject>
  )
}
