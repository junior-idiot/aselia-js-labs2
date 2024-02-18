import React, {useEffect, useState} from "react";
import "./index.css";
import {useNavigate} from "react-router-dom";
import {Box, Button, Heading, Text, VStack} from "@chakra-ui/react";

export const IndexPage: React.FC = () => {
    const [timer, setTimer] = useState<number>(5);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (timer == 1) {
                clearInterval(interval);
                navigate('/main');
            }

            setTimer(timer-1);
        }, 1000)
    }, [timer]);

    return (
        <Box p={5}>
            <VStack spacing={4}>
                <Heading as={"h3"} size={"lg"} textAlign={['center']}>
                    Лабораторная работа №1
                </Heading>
                <Heading  as={"h5"} size={"sm"} textAlign="center">
                    Создание простых HTML страниц.
                    Структура HTML документов, теги форматирования.
                </Heading>
                <Text>Бенчук Алеся Викторовна, группа АССЗД-41</Text>
                <Button variant="solid" colorScheme={"purple"}
                    onClick={() => {
                        navigate("/main");
                    }}
                >
                    Переход на главную через {timer} s
                </Button>
            </VStack>
        </Box>
    )
}