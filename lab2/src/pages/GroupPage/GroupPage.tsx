import React from "react";
import {Box, ListItem, Text, UnorderedList} from "@chakra-ui/react";

export const GroupPage: React.FC = () => {
    return (
        <Box>
            <Text>Название: АССДЗ-41</Text>
            <Text>Специальность: 1 - 53 01 02 Автоматизированные системы обработки информации </Text>
            <Text>Список группы:</Text>

            <UnorderedList>
                <ListItem>Байдо К.В.</ListItem>
                <ListItem>Белая В.П.</ListItem>
                <ListItem>Белоусов Н.А.</ListItem>
                <ListItem>Бенчук А.В.</ListItem>
                <ListItem>Веремейчик В.Е.</ListItem>
                <ListItem>Григорьев Е.В.</ListItem>
                <ListItem>Гулевич Д.Н.</ListItem>
                <ListItem>Гуцева Е.В.</ListItem>
                <ListItem>Дмитриев А.Г.</ListItem>
                <ListItem>Загоровская Ю.А.</ListItem>
                <ListItem>Ковальчку Л.Ю</ListItem>
                <ListItem>Крупенькина И.А.</ListItem>
                <ListItem>Куцанова Д.В.</ListItem>
                <ListItem>Макаровец М.А.</ListItem>
                <ListItem>Новик В.В.</ListItem>
                <ListItem>Ризничук Д.В.</ListItem>
                <ListItem>Шевцов И.В.</ListItem>
                <ListItem>Шишков А.А.</ListItem>
                <ListItem>Шпанькова В.В.</ListItem>
            </UnorderedList>
        </Box>
    );
}