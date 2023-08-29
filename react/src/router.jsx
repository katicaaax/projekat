import {createBrowserRouter} from "react-router-dom";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Signup from "./pages/Signup.jsx";
import Users from "./pages/Users.jsx";


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
    path: '/users',
    element: <Users />
},
{
    path: '*', //sve sto nije u okviru nasih definisanih ruta
    element: <NotFound />
}


])

export default router;
