
import React from 'react';

import {
  ChakraProvider,
  Box,
  Flex,
} from '@chakra-ui/react';
import { ColorModeSwitcher } from './ColorModeSwitcher';
import Menu from './menu';
import 'animate.css';
import { Hello } from './Compoent/Hello';
import { About } from './Compoent/About';
import { Project } from './Compoent/Project';
import { Contact } from './Compoent/Contact';

function App() {
  return (
    <ChakraProvider >
      <Box textAlign="left" fontSize="xl" height="100vh" justifyContent="normal">
        <Flex height="10vh">
          <Menu />
          <ColorModeSwitcher justifySelf="flex-end" />
        </Flex>
        <Box height="90vh" overflowY="scroll">
          <Hello />
          <About />
          <Project />
          <Contact />
        </Box>
      </Box >
    </ChakraProvider >
  );
}

export default App;
