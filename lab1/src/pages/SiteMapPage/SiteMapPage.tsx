import React from "react";
import { Box, Flex, Center, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import {ArrowDownIcon, MinusIcon, ArrowUpIcon, ArrowBackIcon} from "@chakra-ui/icons";

const SiteMapBlock: React.FC<{ to: string; label: string }> = ({ to, label }) => {
    return (
        <Flex direction="column" align="center">
            <Link to={to}>
                <Box p={3} borderWidth="1px" borderRadius="lg">
                    <Text fontSize="md">{label}</Text>
                </Box>
            </Link>
        </Flex>
    );
};

const Arrow: React.FC = () => {
    return <ArrowDownIcon mx={2} my={3} />;
};

const Line: React.FC = () => {
    return <MinusIcon mx={2} my={3} />;
};

const Up: React.FC = () => {
    return <ArrowUpIcon mx={2} my={3} />;
};

const Left: React.FC = () => {
    return <ArrowBackIcon mx={2} my={3} />;
};

export const SiteMapPage: React.FC = () => {
    return (
        <Center h="100vh" flexDir="column">
            <SiteMapBlock to="/" label="Стартовая страница" />
            <Arrow />
            <Flex justifyContent={"center"} align={"center"}>
                <SiteMapBlock to="/main" label="Главная страница" />
                <Left/>
                <SiteMapBlock to="/map" label="Карта сайта" />
            </Flex>

            <Arrow />
            <Flex>
                <SiteMapBlock to="/biography" label="Биография" />
                <Line/>
                <SiteMapBlock to="/hobby" label="Хобби" />
                <Line/>
                <Flex direction="column" justifyContent={"center"} align={"center"}>
                    <SiteMapBlock to="/photos" label="Фотографии" />
                    <Arrow />
                    <Flex direction="column" justifyContent={"center"} align={"center"}>
                        <SiteMapBlock to="/photo/0" label="Фото 1" />
                        <Arrow />
                        <SiteMapBlock to="/photo/1" label="Фото 2" />
                        <Arrow />
                        <SiteMapBlock to="/photo/2" label="Фото 3" />

                    </Flex>
                </Flex>
                <Line/>
                <SiteMapBlock to="/my" label="Моя тема" />
                <Up/>

            </Flex>
        </Center>
    );
}