import React from "react";
import {routes} from "../../routes/router.tsx";
import {Button, HStack} from "@chakra-ui/react";
import {useNavigate} from "react-router-dom";

export const MainPage: React.FC = () => {
    const navigator = useNavigate();

    return (
        <HStack spacing={4}>
            {routes.map((route) => route.showInPage ? <Button key={route.name} onClick={()=>{
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-expect-error
                navigator(route.path)}} variant='outline' colorScheme={"purple"}>
                {route.name}
            </Button> : <></>)}
        </HStack>
    )
}