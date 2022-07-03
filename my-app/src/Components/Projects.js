import React from 'react'
import { Link } from "react-router-dom";
import ProjectDisplay from "./ProjectDisplay";

function Projects(){
    return(
        <div className='projects'>
            <ProjectDisplay project="pacman" />
            <ProjectDisplay project="frigo" />
            <ProjectDisplay project="goodnewspartners" />
            <ProjectDisplay project="bearroom" />
            <ProjectDisplay project="tripplanner" />
        </div>
    )
}

export default Projects