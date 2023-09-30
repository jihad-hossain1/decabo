
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HomePage from "../pages/home/HomePage";
import Resource from "../pages/resource/Resource";
import Solutions from "../pages/solutions/Solutions";
import Products from "../pages/products/Products";
import Pricing from "../pages/pricing/Pricing";
import Customers from "../pages/customers/Customers";
import About from "../pages/about/About";

export const router = createBrowserRouter([
   {
    path: '/',
    element: <Main></Main>,
    children: [
        {
            path: '/',
            element: <HomePage></HomePage>,

        },
        {
            path: '/solutions',
            element: <Solutions></Solutions>,
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
        },
        
    ] 
   }
]);

