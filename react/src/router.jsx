import {createBrowserRouter, Navigate} from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import Login from "./pages/Login.jsx";
import NotFound from "./pages/NotFound.jsx";
import Signup from "./pages/Signup.jsx";
import Users from "./pages/Users.jsx";
import Dashboard from "./pages/Dashboard.jsx";
import UserForm from "./pages/UserForm.jsx";


//kreiranje ruta

const router = createBrowserRouter(  [ 
    {
        path: '/',
        element: <DefaultLayout/>,
      children: [
        {
            path: '/',
            element: <Navigate to="/users" />

        },
        {
            path: '/users',
            element: <Users/>
        },
        {
            path: '/users/new',
            element: <UserForm key ="userCreate"/>
        },
        {
            path: '/users/:id',
            element: <UserForm key ="userUpdate"/>
        },
        {
            path: '/dashboard',
            element: <Dashboard/>
        }
      ]

    },
    {
    path: '/',
    element: <GuestLayout/>,
    children: [
        {
            path: '/signup',
            element: <Signup/>
        },
        {
            path: '/login',
            element: <Login/>
        },
    ]
},

{
    path: '*', //sve sto nije u okviru nasih definisanih ruta
    element: <NotFound/>
}


])

export default router;
