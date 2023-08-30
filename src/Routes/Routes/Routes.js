import { createBrowserRouter } from "react-router-dom";
import Main from "../../layout/Main";
import Home from "../../Pages/Home/Home";
import Courses from "../../Pages/Category/Courses/Courses";
import FAQ from "../../Pages/Category/FAQ/FAQ";
import Blog from "../../Pages/Category/Blog/Blog";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import CourseCategory from "../../Pages/Category/CourseCategory/CourseCategory";
import CourseDetails from "../../Pages/Category/CourseDetails/CourseDetails";
import Profile from "../../Pages/Others/Profile/Profile";
import PrivateRoutes from "../PrivateRoutes/PrivateRoutes";
import Footer from "../../Pages/Category/Footer/Footer";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: ([
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/courses',
                element: <Courses></Courses>,
                loader: () => fetch('https://assignment-10-server-mauve.vercel.app/courses')
            },
            {
                path: '/course/:id',
                element: <CourseCategory></CourseCategory>,
                loader: ({ params }) => fetch(`https://assignment-10-server-mauve.vercel.app/category/${params.id}`)
            },
            {
                path: '/courses/:id',
                element: <PrivateRoutes><CourseDetails></CourseDetails></PrivateRoutes>,
                loader: ({ params }) => fetch(`https://assignment-10-server-mauve.vercel.app/courses/${params.id}`)
            },
            {
                path: '/faq',
                element: <FAQ></FAQ>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: '/profile',
                element: <Profile></Profile>
            },
            {
                path: '/footer',
                element: <Footer></Footer>
            }
        ])
    },
    {
        path: '*',
        element: <dib><h3>Routes Not Found 404.</h3></dib>
    }
])