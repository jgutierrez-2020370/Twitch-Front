//Exportado por named
import { AuthPage } from "./pages/Auth/AuthPage";
import { NotFound } from "./pages/NotFound";
//Exportado por defecto
import App from "./App";

export const routes = [
    //ruta             //Página a mostrar
    {path: '/', element: <AuthPage /> },
    {path: '/login', element: <AuthPage /> },
    {path: '*', element: <NotFound /> }
]