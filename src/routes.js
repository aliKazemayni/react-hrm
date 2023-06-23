import { Navigate, useRoutes } from 'react-router-dom';
// layouts

import DashboardLayout from "./layouts/Dashboard.layout";
import DashboardAppPage from "./pages/DashboardAppPage";
import BlogPage from "./pages/BlogPage";
import ProductsPage from "./pages/ProductsPage";
import UserPage from "./pages/UserPage";
import LoginPage from "./pages/LoginPage";
import Page404 from "./pages/Page404";
//


// ----------------------------------------------------------------------

export default function Routes() {
    const routes = useRoutes([
        {
            path: '/admin',
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/admin" />, index: true },
                { path: 'product', element: <ProductsPage /> },
                { path: 'blog', element: <BlogPage /> },
                { path: 'main', element: <DashboardAppPage /> },
                { path: 'user', element: <UserPage /> }
            ],
        },
        {
            path: 'login',
            element: <LoginPage />,
        },
        {
            element: <DashboardLayout />,
            children: [
                { element: <Navigate to="/admin/main" />, index: true },
                { path: '404', element: <Page404 /> },
                { path: '*', element: <Navigate to="/404" /> },
            ],
        },
        {
            path: '*',
            element: <Navigate to="/404" replace />,
        },
    ]);

    return routes;
}
