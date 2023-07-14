import React, { useState } from 'react';
import { Box, Link, Flex, Text, Image } from '@chakra-ui/react';
import AboutImage from '../Assets/About.jpg'


export const About = () => {
    return (
        <Flex height="container.lg">
            <Box justify="right" align="right" width="35%" padding="2vw 0vw 0vw 10vw"  >
                <Image src={AboutImage} alt="About" borderRadius="15px" />
            </Box>

            <Box width="55%" padding="0 0 0 5vw">
                <Text style={{ fontSize: '5vw', color: 'rgb(255,128,0)', fontWeight: '600' }}> About Me</Text>
                <Text fontSize="md">A computer science student at UConn with a passion for programming.
                    Throughout my time learning, I have taken my education out of the classroom, self-educate for Web-Development skills.
                    I am currently looking for software engineering, full stack web-development internship opportunities.
                </Text>

                <Button />

            </Box>

        </Flex>
    )
}

function Button() {

    const [current, setCurrent] = useState("skill")
    const handleClick = (props) => () => {
        setCurrent(props)
    }

    return (
        <Box>
            <Box display="flex"
                margin="20px 0 40px">
                <Text onClick={handleClick("skill")} marginRight="50px" cursor="pointer" borderBottom={current === 'skill' ? '2px solid red' : ''} transition="border-bottom 0.3s ease-in-out">Skill</Text>
                <Text onClick={handleClick("experience")} marginRight="50px" cursor="pointer" borderBottom={current === 'experience' ? '2px solid red' : ''} transition="border-bottom 0.3s ease-in-out">Experience</Text>
                <Text onClick={handleClick("education")} marginRight="50px" cursor="pointer" borderBottom={current === 'education' ? '2px solid red' : ''} transition="border-bottom 0.3s ease-in-out">Education</Text>
                <Text onClick={handleClick("Curricular-Activities")} marginRight="50px" cursor="pointer" borderBottom={current === 'Curricular-Activities' ? '2px solid red' : ''} transition="border-bottom 0.3s ease-in-out">Curricular Activities</Text>
            </Box>
            <Display props={current} />
        </Box >
    )
}


function Display({ props }) {

    if (props == "skill") {
        return (
            <Box id="skills">
                <Text margin="0 0 20px 0"><span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>Base coding language: </span><br />Python, C++ </Text>
                <Text margin="0 0 20px 0"><span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>Software-Development:</span><br />Java, Kotlin</Text>
                <Text margin="0 0 20px 0"><span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>Web-Development:</span><br />Javascript, React, SQL</Text>
                <Text margin="0 0 20px 0"><span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>Familiar operating systems:</span><br />Mac, Linux(Ubuntu)</Text>

            </Box>
        )
    }
    else if (props == "experience") {
        return (
            <Box id="skills">
                <Text margin="0 0 20px 0">
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>
                        Tech Support Center Advanced Student Employee, Sept. 2021 - Present
                    </span><br />
                    <span style={{ color: 'orange', marginBottom: '0', fontSize: '18px' }}>
                        TSC, University of Connecticut, Storrs, CT<br />
                    </span>
                    ✾ Providing technical support to account issues, computers, classroom support, and more. Troubleshooting over the phone and in person.<br />
                    ✾ Working with Confluence/JIRA
                </Text>

                <Text margin="0 0 20px 0">
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>
                        Network Engineer Student Assistant, July 2021 - Present
                    </span><br />
                    <span style={{ color: 'orange', marginBottom: '0', fontSize: '18px' }}>
                        TSC, University of Connecticut, Storrs, CT<br />
                    </span>
                    ✾ Recording, tracking, and reporting network problems, securing work environment and equipment.<br />
                    ✾ Help update, modify, and make AutoCAD files with University building information.
                </Text>

                <Text margin="0 0 20px 0">
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>
                        Math Tutor, Feb. 2020 - Dec. 2020
                    </span><br />
                    <span style={{ color: 'orange', marginBottom: '0', fontSize: '18px' }}>
                        The University of Connecticut Q-Center, Stamford, CT<br />
                    </span>
                    ✾ Possessed strong a good understanding of multiple math subjects, such as algebra, geometry, and basic arithmetic.
                    <br />
                    ✾ Tutored undergraduate students in related math courses
                </Text>
            </Box >
        )
    }
    else if (props == "education") {
        return (
            <Box>
                <Text margin="0 0 20px 0">
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '22px' }}>
                        MS in Computer Science, 2023 - Present <br />
                        University of Connecticut
                    </span>
                    <Text margin="0 0 5px 0">
                        <span style={{ color: 'orange', marginBottom: '0' }}>
                            GPA: {" "} <br />
                        </span>
                        -
                    </Text>
                    <Text margin="0 0 5px 0">
                        <span style={{ color: 'orange', marginBottom: '0' }}>
                            Relevant Coursework: {" "} <br />
                        </span>
                        -
                    </Text>

                </Text>


                <Text margin="0 0 20px 0">
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '22px' }}>
                        BS in Computer Science, 2019 - 2023 <br />
                        University of Connecticut
                    </span>
                    <Text margin="0 0 5px 0">
                        <span style={{ color: 'orange', marginBottom: '0' }}>
                            GPA: {" "} <br />
                        </span>
                        3.65/4.00
                    </Text>
                    <Text margin="0 0 5px 0">
                        <span style={{ color: 'orange', marginBottom: '0' }}>
                            Honor: {" "} <br />
                        </span>
                        Babbidge Scholar
                    </Text>
                    <Text margin="0 0 5px 0">
                        <span style={{ color: 'orange', marginBottom: '0' }}>
                            Relevant Coursework: {" "} <br />
                        </span>
                        CSE3100: System Programming <br />
                        CSE3150: C++ Essentials <br />
                        CSE3200: Mobile Application Development <br />
                        CSE4701: Principles of Databases <br />
                    </Text>

                </Text>


            </Box>
        )
    }
    else if (props == "Curricular-Activities") {
        return (
            <Box>
                <Text margin="0 0 20px 0">
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>
                        UCONN IT Club - Sept. 2021 - Present
                    </span>
                    <Text margin="0 0 10px 0">
                        Activities Organizer
                    </Text>
                    <span style={{ color: 'orangered', marginBottom: '0', fontSize: '20px' }}>
                        Chinese Students and Scholars Association, Sept. 2021 - Present
                    </span>
                    <Text margin="0 0 5px 0">
                        Activities Organizer
                    </Text>


                </Text>


            </Box>
        )
    }

    return (<Text>none</Text>)
}


