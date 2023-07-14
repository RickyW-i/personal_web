import React from 'react';
import { Box, Image, Heading, Text, Link, Flex, Spacer, background } from '@chakra-ui/react';
import AboutImage from '../Assets/About.jpg'
import management from '../Assets/Project-management.svg'
import drawing from '../Assets/Project-drawing.jpg'
import life from '../Assets/Project-Life.jpg'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'

const management_text = "Work as project manager for a ticketing system with full function on create/delete tickets, assign to individules/groups. Powered by React, MongoDB, ExpressJs"
const management_link = "https://github.com/JXqwq/TicketingSystem"
const drawing_text = "Using Allegro5 on C++ to achieve an interface for drawing. Designed with multiple design patterns for the project. Provides the basic graphic user interface, and the application logic for the graphic editor. Achieved draw, select, group, delete, move, undo/redo, and export/import to/from text file functions."
const drawing_link = "https://github.com/RickyW-i/graphic-drawing"
const LifeSimulator_text = "Build with object orientation and OO in C++ to deal with complex situations like life simulation. The simulator can initialize, add organisms, add a daily event, and collect information on the organisms being simulated. "
const LifeSimulator_link = "https://github.com/RickyW-i/life-simulator"


export const Project = () => {
    return (
        <Flex height="90vh" direction="column">
            <Text textAlign="center" style={{ fontSize: '5vw', color: 'rgb(255,128,0)', fontWeight: '600' }}>Project</Text>
            <Flex justifyContent="space-between" width="100%" padding="5vw">
                <Block title={"C++ Graphic Drawing"} image={drawing} text={drawing_text} link={drawing_link} />
                <Block title={"Managment System"} image={management} text={management_text} link={management_link} />
                <Block title={"LifeSimulator"} image={life} text={LifeSimulator_text} link={LifeSimulator_link} />
            </Flex>

        </Flex>
    )
}





function Block({ title, image, text, link }) {
    const { colorMode } = useColorMode();
    var background
    if (colorMode == "light") {
        background = "linear-gradient(rgba(255,255,255,0.8), orangered)"
    }
    else { background = "linear-gradient(rgba(0,0,0,0.8), orangered)" }


    return (
        <Box
            margin="20px"
            borderRadius="10px"
            position="relative"
            overflow="hidden"
            width="100%"
            _hover={{
                img: {
                    transform: "scale(1.1)",
                },
                div: {
                    height: "100%",
                },
            }}
        >
            <Image
                src={image}

                borderRadius="10px"
                transition="transform 0.5s"
            />
            <Box
                width="100%"
                height="0"
                background={background}
                borderRadius="10px"
                position="absolute"
                left="0"
                bottom="0"
                overflow="hidden"
                display="flex"
                alignItems="center"
                justifyContent="center"
                flexDirection="column"
                padding="0 40px"
                textAlign="left"
                fontSize="18px"
                marginTop="20px"
                transition="height 0.5s"
            >
                <Heading
                    fontWeight="700"
                    marginBottom="20px"
                    fontSize="26px"
                >
                    {title}
                </Heading>
                <Text>
                    {text}
                </Text>
                <Link
                    marginTop="20px"
                    color="orange"
                    textDecoration="none"
                    fontSize="18px"
                    lineHeight="60px"
                    backgroundColor="white"
                    width="60px"
                    height="60px"
                    borderRadius="50%"
                    display="flex"
                    alignItems="center"
                    justifyContent="center"
                    href={link}
                >
                    <ExternalLinkIcon />
                </Link>
            </Box>
        </Box>
    );
}

