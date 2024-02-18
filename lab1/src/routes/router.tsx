import {RouteObject} from "react-router-dom";
import {IndexPage} from "../pages/IndexPage/IndexPage.tsx";
import {MainPage} from "../pages/MainPage/MainPage.tsx";
import {BiographyPage} from "../pages/BiographyPage/BiographyPage.tsx";
import {HobbyPage} from "../pages/HobbyPage/HobbyPage.tsx";
import {PhotosPage} from "../pages/PhotosPage/PhotosPage.tsx";
import {MyPage} from "../pages/MyPage/MyPage.tsx";
import {SiteMapPage} from "../pages/SiteMapPage/SiteMapPage.tsx";
import {ShowPhotoPage} from "../pages/PhotosPage/ShowPhotoPage.tsx";

type NamedRouteObject = RouteObject & {
    name: string,
    showInPage: boolean,
};
export const routes: NamedRouteObject[] = [
    {
        path: "/",
        element: <IndexPage/>,
        name: "Стартовая страница",
        showInPage: true,
    },
    {
        path: "/main",
        element: <MainPage/>,
        name: "Главная",
        showInPage: true,
    },
    {
        path: "/biography",
        element: <BiographyPage/>,
        name: "Биография",
        showInPage: true,
    },
    {
        path: "/hobby",
        element: <HobbyPage/>,
        name: "Хобби",
        showInPage: true,
    },
    {
        path: "/photos",
        element: <PhotosPage/>,
        name: "Фото",
        showInPage: true,
    },
    {
        path: "/photo/:id",
        element: <ShowPhotoPage/>,
        name: "Фото",
        showInPage: false,
    },
    {
        path: "/my",
        element: <MyPage/>,
        name: "Моя тема",
        showInPage: true,
    },
    {
        path: "/map",
        element: <SiteMapPage/>,
        name: "Карта сайта",
        showInPage: true,
    },
];