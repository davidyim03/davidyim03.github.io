import React from "react"
import {useState} from "react"
import {mapNametoDescription, mapNametoTitle} from "./../description_utils"

function ProjectDisplay(project){
    const [isHovering, setIsHovering] = useState(false);

    const handleMouseOver = () => {
      setIsHovering(true);
    };
  
    const handleMouseOut = () => {
      setIsHovering(false);
    };
  
    project = project.project
    const redirectlink = "/" + project
    const image = "./"+project+".png"
    const backpage = <div style={{display:"flex", flexDirection:"column", alignItems:"center", padding: "20px", textAlign:"center", fontSize:"20px"}}><strong>{mapNametoTitle(project)}</strong>{mapNametoDescription(project)}</div>
    return(
        <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            <a className="projectthumb" href={redirectlink}>
                {isHovering ? backpage : <img className="projectimage" src={image}/>}
            </a>
        </div>
    )
}

export default ProjectDisplay