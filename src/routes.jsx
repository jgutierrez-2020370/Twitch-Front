import App from "./App";
import { NotFound } from "./pages/NotFound";

export const routes = [
    //ruta             //Página a mostrar
    {path: '/', element: <App /> },
    {path: '/home', element: <App /> },
    {path: '*', element: <NotFound /> }
]