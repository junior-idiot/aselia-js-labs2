import React from "react";
import {Box, HStack, Link, Image} from "@chakra-ui/react";

type Subject = {
    image: string,
    link: string,
    name: string,
};

const subjectsOfTermList: Subject[] = [
    {
        image: "https://cdn-icons-png.flaticon.com/512/5988/5988512.png",
        link: "https://elib.gsu.by/handle/123456789/17888",
        name: "Разработка веб-приложений"
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/7351/7351998.png",
        link: "https://elib.gsu.by/handle/123456789/3552",
        name: "Проектирование автоматизированных систем"
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/1610/1610810.png",
        link: "https://elib.gsu.by/handle/123456789/316",
        name: "Технологии обработки медиаданных"
    },
    {
        image: "https://cdn-icons-png.flaticon.com/512/2591/2591980.png",
        link: "https://elib.gsu.by/handle/123456789/30983",
        name: "Основы машинного обучения"
    },
];

export const Footer: React.FC = () => {
    return (
        <Box as="footer" width="full" p={4} bgColor="gray.200">
            <HStack justify="center" spacing={8}>
                {subjectsOfTermList.map(link => <Link href={link.link} isExternal>
                    <HStack spacing={2} align="center">
                        <Image src={link.image} boxSize="30px" />
                        <Box>{link.name}</Box>
                    </HStack>
                </Link>)}
            </HStack>
        </Box>
    );
}