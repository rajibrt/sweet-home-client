import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main/Main";
import AddListing from "../Pages/AddListing/AddListing";
import Home from "../Pages/Home/Home";
import CityWiseListing from "../Pages/Listing/CityWiseListing";
import SingleView from "../Pages/Listing/SingleView";
import Signup from "../Pages/Signup/Signup";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/AddListing',
                element: <AddListing></AddListing>
            },
            {
                path: '/Signup',
                element: <Signup></Signup>
            },
            {
                path: '/citywiselisting/:city',
                element: <CityWiseListing></CityWiseListing>,
                loader: ({ params }) => params.city

            },
            {
                path: '/citywiselisting',
                element: <CityWiseListing></CityWiseListing>,

            },
            {
                path: '/singleview/:id',
                element: <SingleView></SingleView>,
                loader: ({ params }) => params.id

            }
        ]
    }
])

export default router;