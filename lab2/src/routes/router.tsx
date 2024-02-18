import {RouteObject} from "react-router-dom";
import {IndexPage} from "../pages/IndexPage/IndexPage.tsx";
import {FacultyPage} from "../pages/FacultyPage/FacultyPage.tsx";
import {GroupPage} from "../pages/GroupPage/GroupPage.tsx";
import {SchedulePage} from "../pages/SchedulePage/SchedulePage.tsx";
import {TestsPage} from "../pages/TestsPage/TestsPage.tsx";

type NamedRouteObject = RouteObject & {
    name: string,
    showInPage: boolean,
};
export const routes: NamedRouteObject[] = [
    {
        path: "/",
        element: <IndexPage/>,
        name: "Главная",
        showInPage: true,
    },
    {
        path: "/faculty",
        element: <FacultyPage/>,
        name: "Мой факультет",
        showInPage: true,
    },
    {
        path: "/group",
        element: <GroupPage/>,
        name: "Моя группа",
        showInPage: true,
    },
    {
        path: "/schedule",
        element: <SchedulePage/>,
        name: "Расписание",
        showInPage: true,
    },
    {
        path: "/tests",
        element: <TestsPage/>,
        name: "Зачеты",
        showInPage: true,
    },
];