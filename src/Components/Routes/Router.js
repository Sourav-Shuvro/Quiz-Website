import { createBrowserRouter } from "react-router-dom";
import Home from "../Home/Home";
import Main from "../../Layout/Main";
import Questions from "../Questions/Questions";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                loader: async()=>{
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Home></Home>
            },
            {
                path: '/home',
                loader: async()=>{
                    return fetch('https://openapi.programming-hero.com/api/quiz')
                },
                element: <Home></Home>
            },
            {
                path: '/quiz/:id',
                loader: async({params}) =>{
                    return fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`)
                },
                element: <Questions></Questions>
            }
        ]
    }
])