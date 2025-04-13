import React from 'react';
import {
    BodyContainer,
    Container,
} from '../StyledComponents/StyledComponents';
import Courses from '../../Courses';
import {
    ResumeTitle,
    ResumeItem,
} from '../../components/About/StyledComponents';


const CourseHero = () => {
    return (
        <>
                    <BodyContainer>
                        <Container flex top={10}>
                            <Container width={50} bottom={6} right={2}>
                                <h1>Computer Science</h1>
                            </Container>
                            <Container width={50}>
                                {Courses.CS.map((course) => {
                                    return (
                                        <ResumeItem>
                                            <ResumeTitle>
                                                <span>
                                                    {course.title}
                                                </span>
                                            </ResumeTitle>
                                            <span>
                                                {course.description}
                                            </span>
                                        </ResumeItem>
                                    )})
                                }
                            </Container>
                            
                        </Container>
                        <Container flex top={5}>
                            <Container width={50} bottom={6} right={2}>
                                <h1>Economics</h1>
                            </Container>
                            <Container width={50}>
                                {Courses.Econ.map((course) => {
                                    return (
                                        <ResumeItem>
                                            <ResumeTitle>
                                                <span>
                                                    {course.title}
                                                </span>
                                            </ResumeTitle>
                                            <span>
                                                {course.description}
                                            </span>
                                        </ResumeItem>
                                    )})
                                }
                            </Container>
                            
                        </Container>
                        <Container flex top={5}>
                            <Container width={50} bottom={6} right={2}>
                                <h1>Other</h1>
                            </Container>
                            <Container width={50}>
                                {Courses.Other.map((course) => {
                                    return (
                                        <ResumeItem>
                                            <ResumeTitle>
                                                <span>
                                                    {course.title}
                                                </span>
                                            </ResumeTitle>
                                            <span>
                                                {course.description}
                                            </span>
                                        </ResumeItem>
                                    )})
                                }
                            </Container>
                            
                        </Container>
                    </BodyContainer>
                    
        </>
    );
}
export default CourseHero;