import React, { useState, useEffect } from 'react';
import {Box, Button, Image, Text} from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import {slides} from "./slides.ts";

export const PhotosPage: React.FC = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        }, 2000);

        return () => clearInterval(timer);
    }, []);

    return (
        <Box position="relative" maxW="xl" mx="auto" p={4}>
            <Image
                src={slides[currentSlide].src}
                alt={`Слайд ${currentSlide + 1}`}
                fit="cover"
                w="100%"
                h="auto"
            />
            <Text fontSize="lg" position="absolute" bottom="4" left="4" color="white">
                {slides[currentSlide].caption}
            </Text>
            <Button
                position="absolute"
                bottom="4"
                right="4"
                colorScheme="purple"
                onClick={() => navigate("/photo/"+currentSlide)}
            >
                Перейти
            </Button>
        </Box>
    );
}