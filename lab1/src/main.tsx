import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {routes} from "./routes/router.tsx";
import {ChakraProvider, extendTheme} from "@chakra-ui/react";
import "@fontsource/inter";

const router = createBrowserRouter(routes);

const theme = extendTheme({
    styles: {
        global: {
            'html, body': {
                fontFamily: `'Inter', system-ui, Avenir, Helvetica, Arial, sans-serif`,
                lineHeight: '1.5',
                fontWeight: '400',
                background: 'linear-gradient(90deg, rgba(255,255,255,1) 0%, rgba(255,255,255,1) 54%, rgba(249,238,255,1) 100%)',
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
          <RouterProvider router={router}/>
      </ChakraProvider>
  </React.StrictMode>,
)
