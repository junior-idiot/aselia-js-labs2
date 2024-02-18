import React from "react";
import {
    Image,
    UnorderedList,
    ListItem,
    Text,
    Heading,
    Container,
    TableContainer,
    Table,
    Thead, Tr, Th, Tbody, Td
} from '@chakra-ui/react';

export const HobbyPage: React.FC = () => {
    const hobbies = [
        {
            name: 'Фотография',
            skills: 'Творческое видение, технические навыки фотосъемки',
            time: '5-10 часов в неделю',
            cost: 'Низкая - Высокая',
            risk: 'Низкий'
        },
        {
            name: 'Йога',
            skills: 'Концентрация, гибкость, сила',
            time: '3-5 часов в неделю',
            cost: 'Низкая',
            risk: 'Низкий'
        },
        // Добавьте другие хобби по аналогии
    ];

    return (
        <>
            <Container maxW="container.md" py={5}>
                <Heading as="h1" size="xl" mb={6} textAlign="center">
                    Мир Фотографии
                </Heading>
                <Image
                    src="https://a.d-cd.net/e86fd84s-960.jpg"
                    alt="Красочный пейзаж"
                    borderRadius="md"
                    mb={4}
                />

                <Text fontSize="md" mb={4}>
                    Фотография — это не просто хобби, это искусство захватить момент, который говорит больше, чем слова.
                    Она помогает нам сохранять воспоминания, делиться историями и выражать креативность. Независимо от того,
                    являетесь ли вы профессионалом или любителем, фотография открывает безграничные возможности для
                    самовыражения и исследования мира вокруг нас.
                </Text>

                <Heading as="h2" size="lg" mb={4}>
                    Начало Пути
                </Heading>
                <Text fontSize="md" mb={4}>
                    Каждый фотограф начинает с первого снимка. Что превращает обычный снимок в произведение искусства? Ключевыми
                    элементами являются композиция, свет и мгновение. Давайте погрузимся в каждый из них:
                </Text>

                {/* Список ключевых элементов фотографии */}
                <UnorderedList mb={4}>
                    <ListItem><strong>Композиция:</strong> Искусство расположения объектов в кадре.</ListItem>
                    <ListItem><strong>Свет:</strong> Понимание того, как свет влияет на сцену и настроение.</ListItem>
                    <ListItem><strong>Мгновение:</strong> Способность уловить и запечатлеть решающий момент.</ListItem>
                </UnorderedList>

                <Heading as="h2" size="lg" mb={4}>
                    Техники и Практика
                </Heading>
                <Text fontSize="md" mb={4}>
                    Фотография требует практики и терпения. Вот несколько техник, которые помогут вам улучшить свои навыки:
                </Text>

                {/* Список техник фотографии */}
                <UnorderedList mb={4}>
                    <ListItem>Работа с различными уровнями экспозиции.</ListItem>
                    <ListItem>Использование разных объективов для разных эффектов.</ListItem>
                    <ListItem>Эксперименты с длинной экспозицией для создания уникальных изображений.</ListItem>
                </UnorderedList>

                <Text fontSize="md" mb={4}>
                    Не бойтесь экспериментировать и выходить из зоны комфорта. Попробуйте разные стили и жанры,
                    ищите вдохновение в работах известных фотографов и делайте снимки каждый день.
                </Text>
                <TableContainer>
                    <Table variant="simple">
                        <Thead>
                            <Tr>
                                <Th>Название хобби</Th>
                                <Th>Необходимые навыки</Th>
                                <Th>Время</Th>
                                <Th>Предполагаемые расходы</Th>
                                <Th>Уровень риска</Th>
                            </Tr>
                        </Thead>
                        <Tbody>
                            {hobbies.map((hobby, index) => (
                                <Tr key={index}>
                                    <Td>{hobby.name}</Td>
                                    <Td>{hobby.skills}</Td>
                                    <Td>{hobby.time}</Td>
                                    <Td>{hobby.cost}</Td>
                                    <Td>{hobby.risk}</Td>
                                </Tr>
                            ))}
                        </Tbody>
                    </Table>
                </TableContainer>
            </Container>
        </>
    );
}