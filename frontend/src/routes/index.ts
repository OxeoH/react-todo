import LoginPage from "../components/LoginPage/LoginPage";
import RegisterPage from "../components/RegisterPage/RegisterPage";
import GroupTable from '../components/GroupTable/GroupTable';
import { GROUPS_ROUTE, LOGIN_ROUTE, MAIN_ROUTE, REGISTER_ROUTE, NOTFOUND_ROUTE } from "./utils/consts";
import TaskTable from "../components/TaskTable/TaskTable";
import { WelcomePage } from "../components/WelcomePage";
import { NotFoundBlock } from "../components/NotFoundBlock/NotFoundBlock";


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
        Component: WelcomePage
    },
    {
        path: NOTFOUND_ROUTE,
        Component: NotFoundBlock
    }
]

export type RouteType ={ 
    path: string,
    Component: React.FC
}
