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
            }
        ]

    }
])

export default router;