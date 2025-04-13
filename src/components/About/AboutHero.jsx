import React from 'react';
import {
    Container,
    HeroContainer,
    BodyContainer
} from '../StyledComponents/StyledComponents';
import Data from '../../Data';

const AboutHero = () => {
    return(
        <HeroContainer
            transition={{ duration: 0.5, delay: 0.5 }}
            exit={{ opacity: 0 }}
            style={{ marginTop: '-200px', marginBottom: '-250px' }}
        >
            <h1>{Data.about.title}</h1>
        </HeroContainer>
    )
}

export default AboutHero;
