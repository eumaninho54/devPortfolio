import React from 'react'
import StyleCardProject from './styles'
import { RiGithubFill, RiExternalLinkFill } from 'react-icons/ri';

interface CardProjectProps {

  imgTool_1?: React.ReactNode
  imgTool_2?: React.ReactNode
  imgTool_3?: React.ReactNode

  nameTool_1?: React.ReactNode
  nameTool_2?: React.ReactNode
  nameTool_3?: React.ReactNode

  title: string
  text: string
  banner: string

  githubLink: string
  pageLink?: string
}

export default function CardProject(props: CardProjectProps) {
  return (
    <StyleCardProject>
      <img src={props.banner} alt="bannerProjectCard" />
      <div className="Content">
        <div className='title'>
          <h1>{props.title}</h1>
          <div className='links'>
            <a href={props.githubLink} target={"_blank"} rel="noreferrer"><RiGithubFill size={30}/></a>
            {props.pageLink 
            ? <a href={props.pageLink} target={"_blank"} rel="noreferrer"><RiExternalLinkFill size={30}/></a>
            : null
            }
          </div>
        </div>
        <div className="groupTools">
          {props.imgTool_1
          ? <div className='tool'>
              {props.imgTool_1}
              <span style={{marginLeft: "3px"}}>{props.nameTool_1}</span>
            </div>
          : null
          }

          {props.imgTool_2
          ? <div className='tool'>
              {props.imgTool_2}
              <span style={{marginLeft: "3px"}}>{props.nameTool_2}</span>
            </div>
          : null
          }
          
          {props.imgTool_3
          ? <div className='tool'>
              {props.imgTool_3}
              <span style={{marginLeft: "3px"}}>{props.nameTool_3}</span>
            </div>
          : null
          }
        </div>
        <p>{props.text}</p>
      </div>
    </StyleCardProject>
  )
}
