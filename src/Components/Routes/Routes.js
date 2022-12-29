import { createBrowserRouter } from "react-router-dom";
import AddTask from "../AddTask/AddTask";
import CompletedTask from "../CompletedTask/CompletedTask";
import Home from "../Home/Home";
import Login from "../Login/Login";
import Main from "../Main/Main";
import MyTask from "../MyTask/MyTask";
import Register from "../Register/Register";



const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/addtask',
                element: <AddTask></AddTask>
            },
            {
                path: '/mytask',
                element: <MyTask></MyTask>
            },
            {
                path: '/completedtask',
                element: <CompletedTask></CompletedTask>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
        ]
    }
]);

export default router