import React from 'react';
import { Box, Link, Flex, Text } from '@chakra-ui/react';


export const Hello = () => {
    return (
        <Box height="100%"
            align="left"
            justify="center"
            fontSize="6vw"
            padding="8vw 0vw 0vw 2vw"
        >

            <Text class="animate__animated animate__fadeInDown animate__slower" >Hey, I am  <span style={{ fontSize: '8vw', color: 'rgb(255,128,0)' }}>Ruiqi Wei</span></Text>
            <Text class="animate__animated animate__fadeInLeftBig animate__slower" >Welcome to my website !</Text>
        </Box>
    )
}