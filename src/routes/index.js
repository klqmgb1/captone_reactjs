import { Route } from "react-router-dom";
import { lazy } from "react";

const routes = [
    {
        path : "",
        element: lazy(() => import("./../pages/HomeTemplate")),
        nested:[
            {
                path: "",
                element: lazy(()=>import("./../pages/HomeTemplate/HomePage"))
            },
            {
                path: "about",
                element: lazy(()=>import("./../pages/HomeTemplate/AboutPage"))
            },
            {
                path: "list-movie",
                element: lazy(()=> import("./../pages/HomeTemplate/ListMoviePage"))
            },
            {
                path: "detail/:id",
                element: lazy(()=>import("./../pages/HomeTemplate/DetailMoviePage"))
            },
            {
                path : "hooks-state",
                element : lazy(()=>import("./../pages/Hooks/State"))
            },
            {
                path : "hooks-effect",
                element : lazy(()=>import("./../pages/Hooks/Effect"))
            },
        ]
    },
    {
        path: "admin",
        element: lazy(()=> import("./../pages/AdminTemplate")),
        nested: [
            {
                path: "dashboard",
                element: lazy(()=>import("./../pages/AdminTemplate/DashboardPage"))
            },
            {
                path: "add-user",
                element: lazy(()=>import("./../pages/AdminTemplate/AddUserPage"))
            },
            {
                path : "add-movie",
                element : lazy(()=>import("./../pages/AdminTemplate/AddMoviePage"))
            },
            
            
        ]
    },
    {
        path: "auth",
        element: lazy(()=>import("./../pages/AdminTemplate/AuthPage"))
    }
]

const renderRoutes = () => {
    return routes.map((route) => {
        if (route.nested){
           return (<Route key={route.path} path={route.path} element={<route.element />}>
            {
                route.nested.map((item) => {
                    return <Route key={item.path} path={item.path} element={<item.element />}/>
                })}
            </Route>);
        }else{
            return ( 
                <Route key={route.path} path={route.path} element={<route.element />} />
            );
        }
    })
}

export default renderRoutes;