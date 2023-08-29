import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login.jsx";


//kreiranje ruta

const router = createBrowserRouter( [ 
{
    path: '/login',
    element: <Login />
},
{
    path: '/signup',
    element: <Signup />
},
{
    path: '/ussers',
    element: <Users />
}

])

export default router;
