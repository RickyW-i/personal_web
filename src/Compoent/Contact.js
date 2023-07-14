import React from 'react';
import { Box, Image, Heading, Text, Link, Flex, Spacer, background } from '@chakra-ui/react';
import AboutImage from '../Assets/About.jpg'
import management from '../Assets/Project-management.svg'
import drawing from '../Assets/Project-drawing.jpg'
import life from '../Assets/Project-Life.jpg'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { useColorMode } from '@chakra-ui/react'


export const Contact = () => {
    return (
        <Flex height="90vh" direction="column" marginTop="10vh">
            <Text textAlign="center" style={{ fontSize: '5vw', color: 'rgb(255,128,0)', fontWeight: '600' }}>Contact</Text>
            <Flex justifyContent="space-between" width="100%" padding="5vw">
            </Flex>

        </Flex>
    )
}




