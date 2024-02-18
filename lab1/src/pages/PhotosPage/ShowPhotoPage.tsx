import React from "react";
import {useParams} from "react-router-dom";
import {Box, Image} from "@chakra-ui/react";
import {slides} from "./slides.ts";

export const ShowPhotoPage: React.FC = () => {
    const {id} = useParams();

    if (!id) {
        return <></>;
    }

    return (
        <Box position="relative" maxW="xl" mx="auto" p={4}>
            <Image
                src={slides[+id].src}
                alt={`Слайд ${+id + 1}`}
                fit="cover"
                w="100%"
                h="auto"
            />
        </Box>
    );
}