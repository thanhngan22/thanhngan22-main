import Home from "../pages/Home";

const homeRoute = {
    path: '/',
    element: <Home />,
    children: [
        {
            path: 'home/',
            element: <Home />
        },
    ]
}

export default homeRoute;