import React from 'react';
import Navigation from '../components/Navigation/Navigation.jsx';
import ProjectArticles from '../components/Projects/ProjectArticles.jsx';
import Footer from '../components/Footer/Footer.jsx';

const Projects = () => {
    return (
        <>
            <Navigation page="projects" />
            <ProjectArticles />
            <Footer />
        </>
    );
}

export default Projects;