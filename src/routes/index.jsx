import { createBrowserRouter } from "react-router-dom";
import Explore from "~/pages/explore";
import Home from "~/pages/home";
import NotFound from "~/pages/not found/NotFound";
import Notifications from "~/pages/notifications";
import '~/assets/css/tailwind.css';
import MainLayout from "~/layouts/main";

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/explore',
                element: <Explore />
            },
            {
                path: 'notifications',
                element: <Notifications />
            },
            {
                path: '*',
                element: <NotFound />
            }
        ]
    },

]);

export default routes;