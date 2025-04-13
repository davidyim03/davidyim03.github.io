import React from 'react';
import {
    ResumeTitle,
    ResumeItem,
} from '../../components/About/StyledComponents';
import { Container } from '../StyledComponents/StyledComponents';
import Link from '../Utility/Link';
import Button from '../Utility/Button';
import Data from '../../Data';

const Resume = () => {
    return (
        <Container>
            <Container flex bottom={6}>
                <Container width={30} right={3} bottom={3}>
                    <h1>Education</h1>
                </Container>
                <Container width={70}>
                    {Data.about.education.map((degree) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>
                                        {degree.degree} in {degree.program}
                                    </span>
                                    <p>{degree.school}, {degree.date}</p>
                                </ResumeTitle>
                                <p>{degree.about}</p>
                                <Button
                            right
                            text="Coursework"
                            route="/coursework"
                        />

                            </ResumeItem>
                        )})
                    }
                </Container>
            </Container>
            <Container flex bottom={6}>
                <Container width={30} right={3} bottom={3}>
                    <h1>Experience</h1>
                </Container>

                <Container width={70}>
                    {Data.about.experience.map((role) => {
                        return (
                            <ResumeItem>
                                <ResumeTitle>
                                    <span>{role.title + ' '}</span>
                                    <span>at </span>
                                    <span>{role.company}</span>
                                </ResumeTitle>
                                <p>{role.date}</p>
                                {role.description.map((bullet)=>{
                                    return(
                                        <p>{bullet}</p>
                                    )  
                                })}

                            </ResumeItem>
                        )})
                    }
                    <Button
                            right
                            text="Projects"
                            route="/projects"
                        />
                </Container>
            </Container>
        </Container>
    );
}

export default Resume;