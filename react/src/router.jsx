import {createBrowserRouter, Navigate} from "react-router-dom";
import Dashboard from "./pages/Dashboard.jsx";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import Signup from "./pages/Signup";
import Users from "./pages/Users";
import UserForm from "./pages/UserForm";
import Projects from "./pages/Projects";
import Tasks from "./pages/Tasks";
import ProjectForm from "./pages/ProjectForm";
import TaskForm from "./pages/TaskForm";


const router = createBrowserRouter([
  {
    path: '/',
    element: <DefaultLayout/>,
    children: [
      {
        path: '/',
        element: <Navigate to="/dashboard"/>
      },
      {
        path: '/dashboard',
        element: <Dashboard/>
      },
      {
        path: '/projects',
        element: <Projects/>
      },
      {
        path: '/projects/new',
        element: <ProjectForm key="projectCreate" />
      },
      {
        path: '/projects/:id',
        element: <ProjectForm key="projectUpdate" />
      },
      {
        path: '/users',
        element: <Users/>
      },
      {
        path: '/tasks',
       element: <Tasks/>
      },
      {
        path: '/tasks/new',
        element: <TaskForm key="TaskCreate" />
      },
      {
        path: '/tasks/:id',
        element: <TaskForm key="taskUpdate" />
      },
      {
        path: '/users/new',
        element: <UserForm key="userCreate" />
      },
      {
        path: '/users/:id',
        element: <UserForm key="userUpdate" />
      }
    ]
  },
  {
    path: '/',
    element: <GuestLayout/>,
    children: [
      {
        path: '/login',
        element: <Login/>
      },
      {
        path: '/signup',
        element: <Signup/>
      }
    ]
  },
  {
    path: "*",
    element: <NotFound/>
  }
])

export default router;
