import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes/router.tsx";
import {Box, ChakraProvider, Divider, extendTheme, Flex, VStack} from "@chakra-ui/react";
import "@fontsource/inter";
import {Header} from "./components/Header.tsx";
import {Footer} from "./components/Footer.tsx";

const router = createBrowserRouter(routes);

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontFamily: `'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif`,
                lineHeight: '1.5',
                fontWeight: '400',
                background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 54%, rgba(232,240,255,1) 100%)',
                fontSynthesis: 'none',
                textRendering: 'optimizeLegibility',
                WebkitFontSmoothing: 'antialiased',
                MozOsxFontSmoothing: 'grayscale',
            },
        },
    },
});

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <ChakraProvider theme={theme}>
            <Flex direction="column" minHeight="100vh">
                <Header />
                <Box flex="1" p={4}>
                    <VStack spacing={4}>
                        <RouterProvider router={router}/>
                    </VStack>
                </Box>
                <Divider colorScheme="blue" />
                <Footer />
            </Flex>
        </ChakraProvider>
    </React.StrictMode>,
)
