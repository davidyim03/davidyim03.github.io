import React from 'react';
import Posts from "../../posts/Posts";
import Article from '../Article/Article';
import { BodyContainer, Container } from "../StyledComponents/StyledComponents";

const ProjectArticles = () => {
    return(
        <BodyContainer>
            <Container top={10}>
                <Container leftAlign bottom={4}>
                    <h2>My Projects</h2>
                </Container>
                {Posts.map((project) => {
                    return (
                        <Article
                            route={project.route}
                            thumbnail={project.image}
                            title={project.title}
                            date={project.date}
                            description={project.description}
                        />
                    )})
                }
            </Container>
        </BodyContainer>
    )
}

export default ProjectArticles;
