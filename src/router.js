import { Navigate, useRoutes } from 'react-router-dom';
// layouts

import AboutPage from "./pages/About.page";
import TasksPage from "./pages/Tasks.page";
import DashboardLayout from "./layouts/Dashboard.layout";
import MainPage from "./pages/Main.page";
//


// ----------------------------------------------------------------------

export default function Router() {
    const routes = useRoutes([
        {
            path: '/admin',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/admin" />, index: true },
                { path: 'about', element: <AboutPage /> },
                { path: 'main', element: <MainPage /> },
                { path: 'tasks', element: <TasksPage /> }
            ],
        },
        // {
        //     path: 'login',
        //     element: <LoginPage />,
        // },
        // {
        //     element: <SimpleLayout />,
        //     children: [
        //         { element: <Navigate to="/dashboard/app" />, index: true },
        //         { path: '404', element: <Page404 /> },
        //         { path: '*', element: <Navigate to="/404" /> },
        //     ],
        // },
        // {
        //     path: '*',
        //     element: <Navigate to="/404" replace />,
        // },
    ]);

    return routes;
}
