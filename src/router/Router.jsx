
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HomePage from "../pages/home/HomePage";
import Resource from "../pages/resource/Resource";
// import Solutions from "../pages/courses/Courses";
import Products from "../pages/products/Products";
import Pricing from "../pages/pricing/Pricing";
import Customers from "../pages/customers/Customers";
import About from "../pages/about/About";
import Courses from "../pages/courses/Courses";
import ErrorPage from "../ErrorPage";
import DashboardLayout from "../layouts/DashboardLayout";
import Dashboard from "../pages/dashboard/Dashboard";
import AddCourse from "../pages/dashboard/addCourse/AddCourse";
import Register from "../components/login/Register";
import SingIn from "../components/login/SingIn";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
        {
            path: '/',
            element: <HomePage></HomePage>,

        },
        {
            path: '/courses',
            element: <Courses></Courses>,
        },
        {
            path: '/products',
            element: <Products></Products>,
        },
        {
            path: '/pricing',
            element: <Pricing></Pricing>,
        },
        {
            path: '/customers',
            element: <Customers></Customers>,
        },
        {
            path: '/resources',
            element: <Resource></Resource>,
        },
        {
            path: '/about',
            element: <About></About>,
        },{
            path: '/register',
            element: <Register></Register>
        },{
            path: '/signin',
            element: <SingIn></SingIn>
        }
        
    ] 
   },
   {
    path: '/dashboard',
    element: <DashboardLayout></DashboardLayout>,
    children: [
        {
            path: '/dashboard',
            element: <Dashboard></Dashboard>
        },
        {
            path: '/dashboard/addCourse',
            element: <AddCourse></AddCourse>
        }
    ]
   }
   
]);

