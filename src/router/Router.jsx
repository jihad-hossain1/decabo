
import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import HomePage from "../pages/home/HomePage";
import Resource from "../pages/resource/Resource";
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
import PrivateRoute from "./PrivateRoute";
import ManageCourses from "../pages/dashboard/manageCourses/ManageCourses";
import UpdateCourse from "../pages/dashboard/manageCourses/UpdateCourse";
import CourseDetails from "../pages/courses/CourseDetails";
import { getCourse } from "../api/getCourse";
import Enroll from "../pages/dashboard/enroll/Enroll";
import CheckoutCart from "../pages/dashboard/carts/checkoutCart/CheckoutCart";
import PaymentCartLayout from "../layouts/payment/PaymentCartLayout";
import EnrolledCourse from "../pages/enrolledCourse/EnrolledCourse";
import EnrolledMainDashboard from "../pages/enrolledCourse/EnrolledMainDashboard/EnrolledMainDashboard";
import FavoritePage from "../pages/FavoritePage/FavoritePage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <HomePage></HomePage>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
      },
      {
        path: "/products",
        element: <Products></Products>,
      },
      {
        path: "/pricing",
        element: <Pricing></Pricing>,
      },
      {
        path: "/customers",
        element: <Customers></Customers>,
      },
      {
        path: "/resources",
        element: <Resource></Resource>,
      },
      {
        path: "/checkout",
        element: <CheckoutCart></CheckoutCart>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/signin",
        element: <SingIn></SingIn>,
      },
      {
        path: "course/:id",
        element: <CourseDetails></CourseDetails>,
        loader: ({ params }) => getCourse(params.id),
      },
    ],
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <DashboardLayout></DashboardLayout>
      </PrivateRoute>
    ),
    children: [
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "/dashboard/addCourse",
        element: <AddCourse></AddCourse>,
      },
      {
        path: "/dashboard/manageCourses",
        element: <ManageCourses></ManageCourses>,
      },
      {
        path: "/dashboard/updateCourse/:id",
        element: <UpdateCourse></UpdateCourse>,
        loader: ({ params }) =>
          fetch(`${import.meta.env.VITE_BASE_URL}/course/${params.id}`),
      },
      {
        path: "/dashboard/enroll",
        element: <Enroll></Enroll>,
      },
    ],
  },
  {
    path: "/paymentCheckout",
    element: <PaymentCartLayout />,
  },
  {
    path: "/my_enrolled_course",
    element: <EnrolledMainDashboard />,
    children: [
      {
        path: "/my_enrolled_course/enroll_course",
        element: <EnrolledCourse></EnrolledCourse>,
      },
      {
        path: "/my_enrolled_course/favorites",
        element: <FavoritePage></FavoritePage>,
      },
    ],
  },
]);

