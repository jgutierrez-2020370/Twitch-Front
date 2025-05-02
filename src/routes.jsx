//Exportado por named
import { AuthPage } from "./pages/Auth/AuthPage";
import { NotFound } from "./pages/NotFound";
//Exportado por defecto
import App from "./App";
import { DashBoard } from "./pages/DashBoard/DashBoard";
import { Channels } from "./components/Channels";
import { Settings } from "./components/Settings";

export const routes = [
    //ruta             //Página a mostrar
    {path: '/', element: <AuthPage /> },
    {path: '/login', element: <AuthPage /> },
    {
        path: '/dashboard', 
        element: <DashBoard />,
        children: [
            {path: 'setting', element: <Settings />},
            {path: 'channels', element: <Channels />}
        ]

    },
    {path: '*', element: <NotFound /> }
]