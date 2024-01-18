import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react"
const App = lazy(()=>import('./components/App'))
const LogInPage = lazy(()=>import('./Pages/LogInPage'))
const Dashboard= lazy(()=>import('./Pages/Dashboard'))
export const router = createBrowserRouter[
{
    path: '/', 
     element: <App/>, 
     childen:[
        {
            path: '/login',
            element: <LogInPage/>
        },
        {
            path: '/dashboard', 
            element: <Dashboard/>
        }
        
     ]
}
]