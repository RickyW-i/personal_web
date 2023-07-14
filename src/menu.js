import React from 'react';
import { Box, Link, Flex, Text } from '@chakra-ui/react';

const MenuItem = ({ children, isLast, to = "/", ...rest }) => {
    return (
        <Link href={to}>
            <Text display="block" {...rest}>
                {children}
            </Text>
        </Link>
    );
};

const Menu = () => {
    return (

        <Flex
            justifyContent="space-between"
            alignItems="flex-end"
            width="100%"
            padding="10px"
        >
            <Box
                display="flex"
                justifyContent="flex-end"
                width="100%"
            >
                <MenuItem to="/">Home</MenuItem>
                <MenuItem to="/about">About</MenuItem>
                <MenuItem to="/contact" isLast>Contact</MenuItem>
            </Box>
        </Flex>
    );
};
export default Menu;

