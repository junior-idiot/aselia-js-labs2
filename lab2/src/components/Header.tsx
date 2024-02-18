import React from "react";
import {Flex, Box, Spacer, Link as ChakraLink, Image, Divider, HStack} from '@chakra-ui/react';
import {routes} from "../routes/router.tsx";

export const Header: React.FC = () => {
    return (
        <>
            <Flex as="header" width="full" align="center" padding="1" bg="blue.400" color="white">
                <Box p="2">
                    <Image
                        boxSize='80px'
                        objectFit='cover'
                        src={"https://www.gsu.by/themes/gsutheme/logo.svg"}
                    />
                </Box>
                <Spacer />
                <Box>
                    Лабораторная работа №2
                    Бенчук А.В.
                    Группа: АССЗД-41
                </Box>
            </Flex>
            <Divider/>
            <Flex as="header" width="full" align="center" padding="2" bg="blue.400" color="white">
                <HStack spacing={4}>
                    {routes.map(link => link.showInPage ? <a href={link.path}>
                        <ChakraLink color={link.path ===  location.pathname ? 'gray.100' : 'white'} colorScheme="blue" variant="ghost">{link.name}</ChakraLink>
                    </a> : <></>)}
                </HStack>
            </Flex>
        </>
    );
}