import React from "react";
import {Box, Heading, ListItem, UnorderedList} from "@chakra-ui/react";

export const TestsPage: React.FC = () => {
    return (
        <Box>
            <div>
                <Heading as='h4' size='md'>Зачеты и экзамены:</Heading>
                <UnorderedList>
                    <ListItem>Информационные технологии и психология управления</ListItem>
                    <ListItem>Автоматизация управления предприятием на платформе 1С</ListItem>
                    <ListItem>Программное средства систем обработки данных</ListItem>
                    <ListItem>Проектирование систем обработки данных</ListItem>
                    <ListItem>Программное обеспечение 2D графики и анимации</ListItem>
                    <ListItem>Этика и эстетика</ListItem>
                </UnorderedList>
            </div>
        </Box>
    );
}