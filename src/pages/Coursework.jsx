import React from 'react';
import {
	BodyContainer,
} from '../components/StyledComponents/StyledComponents';
import Navigation from '../components/Navigation/Navigation.jsx';
import CourseHero from '../components/Coursework/CourseHero.jsx';
import Footer from '../components/Footer/Footer.jsx';

const CourseWork = () => {
    return (
		<>
			<Navigation page="coursework" />
			<BodyContainer>
				<CourseHero />
			</BodyContainer>
			<Footer />
		</>
    );
}

export default CourseWork;