import AuthBlock from "../components/AuthBlock/AuthBlock";
import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import GroupTable from '../components/GroupTable/GroupTable';
import { GROUPS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE } from "./utils/consts";
import TaskTable from "../components/TaskTable/TaskTable";

export const authRoutes: RouteType[]= [
    {
        path: GROUPS_ROUTE,
        Component: GroupTable
    },
    {
        path: GROUPS_ROUTE + "/:id",
        Component: TaskTable
    },
]

export const defaultRoutes: RouteType[] = [
    {
        path: LOGIN_ROUTE,
        Component: LoginPage
    },
    {
        path: REGISTER_ROUTE,
        Component: RegisterPage
    },
    {
        path: MAIN_ROUTE,
        Component: AuthBlock//!Fix
    },
]

export type RouteType ={ 
    path: string,
    Component: React.FC
}
