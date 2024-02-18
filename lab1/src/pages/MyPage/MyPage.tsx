import React from "react";
import {
    Box,
    Heading,
    Text,
    List,
    ListItem,
    Link,
    Image,
    SimpleGrid,
    Container,
} from '@chakra-ui/react';
import examplePic from "../../assets/img.png";

export const MyPage: React.FC = () => {
    return (
        <Container maxW="container.xl">
            <Box p={4}>
                <Heading as="h1" mb={4}>Генеративные Состязательные Сети (GANs)</Heading>
                <Text fontSize="lg" mb={4}>
                    Генеративные состязательные сети (GANs) — это класс алгоритмов машинного обучения,
                    основанный на теории игр, где две нейросети соревнуются друг с другом.
                </Text>
                <Text mb={4}>
                    Генератор создает изображения, стремясь обмануть дискриминатор, который в свою очередь
                    пытается отличить поддельные изображения от настоящих. С течением времени обе сети
                    учатся и улучшают свои способности, что приводит к производству очень реалистичных изображений.
                </Text>
                <Heading as="h2" size="lg" mb={2}>Как работает генеративная состязательная сеть?</Heading>
                <Text mb={4}>
                    Генеративная состязательная сетевая система состоит из двух глубоких нейронных сетей – генерирующей и дискриминирующей. Обе сети тренируются в состязательной игре, где одна пытается генерировать новые данные, а другая – угадать, являются ли они поддельными или реальными.

                    Технически GAN работает описанным ниже образом. Сложное математическое уравнение составляет основу всего вычислительного процесса. Ниже предоставлен упрощенный обзор работы GAN.

                    Генерирующая нейронная сеть анализирует обучающий набор данных и определяет их атрибуты.
                    Дискриминирующая нейронная сеть также анализирует исходные обучающие данные и самостоятельно определяет атрибуты.
                    Генерирующая сеть изменяет некоторые из них, добавляя шум (или что-либо другое) к определенным атрибутам.
                    После она передает измененные данные дискриминирующей.
                    Вторая сеть вычисляет вероятность того, принадлежат ли сгенерированные выходные данные исходному их набору.
                    Дискриминирующая сеть дает генерирующей некоторые рекомендации по снижению рандомизации векторов шума в следующем цикле.
                    Генерирующая сеть пытается максимально увеличить вероятность ошибки дискриминирующей, а та в свою очередь пытается свести шанс к минимуму. Повторяя обучение раз за разом, генерирующая и дискриминирующая сети развиваются и постоянно противостоят друг другу, пока не достигнут состояния равновесия. В этом состоянии дискриминирующая сеть больше не может распознавать синтезированные данные. На этом тренировочный процесс закончен.
                </Text>
                <Heading as="h2" size="lg" mb={2}>Пример обучения GAN</Heading>
                <Text mb={4}>
                    Давайте рассмотрим информацию, приведенную выше, на примере того, как модель GAN меняет изображения.

                    Учтите, что входное изображение представляет собой человеческое лицо, которое GAN пытается изменить. Например, атрибутами могут быть формы глаз или ушей. Допустим, генерирующая сеть изменяет реальные изображения, добавляя к ним солнцезащитные очки. Дискриминирующая сеть получает набор изображений: на некоторых из них видны реальные люди в солнцезащитных очках, а на других – очки были добавлены генерирующей сетью.

                    Если дискриминирующая сеть может отличить поддельные от настоящих, генерирующая обновляет свои параметры, чтобы создать более качественные изображения. Если ей удается обмануть дискриминирующую, та обновляет свои параметры. Конкуренция улучшает обе сети до тех пор, пока не будет достигнуто равновесие.
                </Text>
                <Heading as="h2" size="lg" mb={2}>Ресурсы для изучения:</Heading>
                <List mb={4}>
                    <ListItem>
                        <Link href="https://www.deeplearningbook.org/" isExternal>
                            Deep Learning Book - Ian Goodfellow и соавторы
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://arxiv.org/abs/1406.2661" isExternal>
                            Generative Adversarial Nets - Исходная статья
                        </Link>
                    </ListItem>
                    <ListItem>
                        <Link href="https://habr.com/ru/articles/709036/" isExternal>
                            Создание изображений с использованием генеративно-состязательных нейронных сетей (GAN) на примере ЭКГ
                        </Link>
                    </ListItem>
                    {/* Добавьте дополнительные ресурсы по вашему выбору */}
                </List>
                <Heading as="h2" size="lg" mb={2}>Примеры изображений:</Heading>
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    {/* Предполагается, что у вас есть изображения в папке public */}
                    <Image src="data:image/jpeg;base64,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" alt="GAN Example 1" objectFit="cover" />
                    <Image src="https://proproprogs.ru/htm/neural_network/files/chto-takoe-generativno-sostyazatelnye-seti-gan.files/image013.jpg" alt="GAN Example 2" objectFit="cover" />
                    <Image src="https://media.proglib.io/posts/2021/07/15/b66baae82e150ddf7bbdf92b4f9d7a1e.png" alt="GAN Example 3" objectFit="cover" />
                    <Image src={examplePic} alt="GAN Example 3" objectFit="cover" />
                    <Image src="https://evergreens.com.ua/assets/images/articles/Kudelya-images/ml/GAN-1(1).jpg" alt="GAN Example 3" objectFit="cover" />
                    <Image src="https://lh6.googleusercontent.com/5Bk5o0cFZRlLLl4MlKyixGYAHrStheap3D_8R3QR-YXkhnRuLnZTm_rtYFLH1wkWdHSak-C2ZXyFG0uxXtx4nOcMC0MmlJ8y7UV1UNQZnmPMvrBznAT6n-XStYjD2ks8EueefvCWJ6s1pKucWGMaENBXnlt9y3heUZgrt8sD-BchcTz0NvcFdh2dUQyR2Q" alt="GAN Example 3" objectFit="cover" />
                </SimpleGrid>
            </Box>
        </Container>
    );
}