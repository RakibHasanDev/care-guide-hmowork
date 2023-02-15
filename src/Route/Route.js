import Blog from "../Pages/Blog/Blog";
import Contacts from "../Pages/Contacts/Contacts";
import Covid from "../Pages/Covid/Covid";
import HHACertification from "../Pages/HHACertification/HHACertification";
import Resourses from "../Pages/Resourses/Resourses";
import Services from "../Pages/Services/Services";

const { createBrowserRouter } = require("react-router-dom");
const { default: Main } = require("../Main/Main");
const { default: Home } = require("../Pages/Home/Home");


const router = createBrowserRouter ([
    {
        path: '/',
        element: <Main></Main>,
        errorElement : <h1> 404 not Found</h1>,
        children:[
            {
                path: '/',
                element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/contacts',
                element: <Contacts></Contacts>
            },
            
            {
                path: '/covid',
                element: <Covid></Covid>
            },
            {
                path: '/hhaCertification',
                element: <HHACertification></HHACertification>
            },
            {
                path: '/resources',
                element: <Resourses></Resourses>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
        ]

    }
])

export default router;